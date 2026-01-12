import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Send, ChevronLeft, ChevronRight, User, MessageCircle, X, Lock } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../../components/ui';
import { useHeaderAction } from '../../context/HeaderActionContext';
import { useAuth } from '../../context/AuthContext';
import {
  DUMMY_CONVERSATIONS,
  Activity,
  Message
} from '../../config/content';
import { formatMessageTime } from '../../utils/helpers';
import { getUserTypeFromPath, getActivitiesForUserType } from '../../utils/contentLoader';

export interface UnifiedActivitiesRef {
  openMobileMenu: () => void;
}

/**
 * UnifiedActivities Component
 * Desktop: Three-panel layout (collapsible activity selector, activity area, collapsible chat)
 * Mobile: Full-screen activity area with floating action buttons
 * Supports all user types (student, teacher, guardian, school)
 * Dynamically loads activities based on user type and authentication state
 * Exposes openMobileMenu method for parent components
 */
const UnifiedActivities = forwardRef<UnifiedActivitiesRef, {}>((_, ref) => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  // Extract user type from URL
  const userType = getUserTypeFromPath(location.pathname);
  if (!userType) {
    // Fallback to home if user type cannot be determined
    navigate('/');
    return null;
  }

  // Load activities dynamically based on user type, auth state, and user's actual roles
  // contentLoader acts like an API endpoint - checks role match and returns appropriate content
  const { activities, freeCount } = getActivitiesForUserType(
    userType,
    isAuthenticated,
    user?.roles || []
  );

  const [selectedActivity, setSelectedActivity] = useState<Activity>(activities[0] || {} as Activity);
  const [messages, setMessages] = useState<Message[]>(
    activities.length > 0 ? (DUMMY_CONVERSATIONS[activities[0].id] || []) : []
  );
  const [newMessage, setNewMessage] = useState('');

  // Desktop collapsible states
  const [isActivityPanelOpen, setIsActivityPanelOpen] = useState(true);
  const [isChatPanelOpen, setIsChatPanelOpen] = useState(true);

  // Mobile states
  const [isMobileActivitySelectorOpen, setIsMobileActivitySelectorOpen] = useState(false);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  const { setTitle, setMobileAction, setHideDefaultNav } = useHeaderAction();
  const chatEndRef = useRef<HTMLDivElement>(null);

  const isActivityLocked = (index: number): boolean => {
    return !isAuthenticated && index >= freeCount;
  };

  // Expose openMobileMenu method to parent component
  useImperativeHandle(ref, () => ({
    openMobileMenu: () => setIsMobileActivitySelectorOpen(true)
  }));

  const handleActivitySelect = (activity: Activity) => {
    setSelectedActivity(activity);
    setMessages(DUMMY_CONVERSATIONS[activity.id] || []);
    setIsMobileActivitySelectorOpen(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'student',
      timestamp: new Date(),
      senderName: 'You'
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Sync with Header Context
  useEffect(() => {
    setTitle(null);
    setMobileAction(() => () => setIsMobileActivitySelectorOpen(true));
    setHideDefaultNav(true);

    return () => {
      setTitle(null);
      setMobileAction(null);
      setHideDefaultNav(false);
    };
  }, [selectedActivity, setTitle, setMobileAction, setHideDefaultNav]);

  // Handle case where user type has no activities
  if (activities.length === 0) {
    return (
      <div className="h-full w-full bg-white flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Activities Coming Soon!
          </h2>
          <p className="text-gray-600">
            We're preparing exciting activities for you. Check back soon!
          </p>
          {!isAuthenticated && (
            <div className="mt-6">
              <Link to="/login">
                <Button variant="primary">Sign In to Get Notified</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Layout - Three Panel */}
      <div className="hidden lg:flex h-full w-full overflow-hidden bg-white">
        {/* Left Panel - Activity Selection (Collapsible) */}
        {isActivityPanelOpen && (
          <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-sm font-bold text-gray-900">Activities</h2>
              <button
                onClick={() => setIsActivityPanelOpen(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
              {activities.map((activity, index) => {
                const isLocked = isActivityLocked(index);
                return (
                  <div key={activity.id} className="relative">
                    <button
                      onClick={() => isLocked ? navigate('/login') : handleActivitySelect(activity)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                        selectedActivity.id === activity.id
                          ? 'bg-primary/10 border border-primary'
                          : 'bg-white border border-transparent hover:bg-gray-50'
                      } ${isLocked ? 'opacity-60' : ''}`}
                    >
                      <div className={`${activity.color} text-white p-2 rounded-full`}>
                        {activity.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-bold text-xs text-gray-900">{activity.name}</h3>
                        <p className="text-xs text-gray-500 truncate">{activity.description}</p>
                      </div>
                    </button>
                    {isLocked && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[1px] rounded-lg pointer-events-none">
                        <Lock className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </div>
                );
              })}

              {!isAuthenticated && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg text-center border border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Login for more activities</p>
                  <Link to="/login">
                    <Button variant="primary" size="sm" className="w-full text-xs">Sign In</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Expand button for activity panel */}
        {!isActivityPanelOpen && (
          <button
            onClick={() => setIsActivityPanelOpen(true)}
            className="w-8 border-r border-gray-200 flex items-center justify-center hover:bg-gray-50 bg-white"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        )}

        {/* Middle Panel - Activity Area */}
        <div className="flex-1 bg-gray-50 flex flex-col h-full overflow-hidden">
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-3xl mx-auto">
              {/* Activity Header */}
              <div className={`${selectedActivity.color} text-white rounded-xl p-6 mb-8 shadow-sm`}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-white/20 rounded-full">
                    {selectedActivity.icon}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{selectedActivity.name}</h1>
                    <p className="text-sm opacity-90">{selectedActivity.description}</p>
                  </div>
                </div>
              </div>

              {/* Placeholder Content */}
              <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className={`${selectedActivity.color} text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {selectedActivity.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    Activities Coming Soon!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We're preparing exciting {selectedActivity.name.toLowerCase()} activities for you.
                    In the meantime, feel free to ask any questions using the chat on the right!
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 text-left">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>What you can do now:</strong>
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ask questions about {selectedActivity.name.toLowerCase()}</li>
                      <li>• Get guidance from our team</li>
                      <li>• Explore other activity categories</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Q&A Chat (Collapsible) */}
        {isChatPanelOpen && (
          <div className="w-96 bg-white border-l border-gray-200 flex flex-col h-full">
            {/* Chat Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between shadow-sm z-10">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <h2 className="font-bold">Ask Questions</h2>
              </div>
              <button
                onClick={() => setIsChatPanelOpen(false)}
                className="p-1 hover:bg-white/20 rounded"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">No messages yet.<br />Ask a question to get started!</p>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${
                        message.sender === 'student' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.sender === 'team' && (
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-lg p-3 ${
                          message.sender === 'student'
                            ? 'bg-primary text-white'
                            : 'bg-white border border-gray-200 shadow-sm'
                        }`}
                      >
                        <p className="text-xs font-semibold mb-1 opacity-75">
                          {message.senderName}
                        </p>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'student' ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {formatMessageTime(message.timestamp)}
                        </p>
                      </div>
                      {message.sender === 'student' && (
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 resize-none border-2 border-gray-200 rounded-lg p-2 text-sm focus:border-primary focus:outline-none"
                  rows={2}
                />
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSendMessage}
                  disabled={newMessage.trim() === ''}
                  className="self-end"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Expand button for chat panel */}
        {!isChatPanelOpen && (
          <button
            onClick={() => setIsChatPanelOpen(true)}
            className="w-8 border-l border-gray-200 flex items-center justify-center hover:bg-gray-50 bg-white"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>

      {/* Mobile Layout - Full Screen Activity Area */}
      <div className="lg:hidden min-h-screen flex flex-col relative">
        {/* Activity Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
            <div className={`${selectedActivity.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
              {selectedActivity.icon}
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Activities Coming Soon!
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              We're preparing exciting activities for you. Ask questions using the chat button below!
            </p>
          </div>
        </div>

        {/* Floating Chat Button */}
        <button
          onClick={() => setIsMobileChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center z-30"
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        {/* Mobile Activity Selector Modal */}
        {isMobileActivitySelectorOpen && (
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileActivitySelectorOpen(false)}>
            <div
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[70vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="font-bold text-lg">Select Activity</h2>
                <button onClick={() => setIsMobileActivitySelectorOpen(false)}>
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {activities.map((activity, index) => {
                  const isLocked = isActivityLocked(index);
                  return (
                    <button
                      key={activity.id}
                      onClick={() => isLocked ? navigate('/login') : handleActivitySelect(activity)}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg relative ${
                        selectedActivity.id === activity.id
                          ? 'bg-primary/10 border-2 border-primary'
                          : 'bg-gray-50 border-2 border-transparent'
                      } ${isLocked ? 'opacity-60' : ''}`}
                    >
                      <div className={`${activity.color} text-white p-3 rounded-full`}>
                        {activity.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-bold text-sm">{activity.name}</h3>
                        <p className="text-xs text-gray-500">{activity.description}</p>
                      </div>
                      {isLocked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[1px] rounded-lg">
                          <Lock className="w-6 h-6 text-gray-600" />
                        </div>
                      )}
                    </button>
                  );
                })}

                {!isAuthenticated && (
                  <div className="pt-4 mt-2 border-t border-gray-100">
                    <Link to="/login">
                      <Button variant="primary" className="w-full">Sign In for More</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Chat Modal */}
        {isMobileChatOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            {/* Chat Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <h2 className="font-bold text-lg">Ask Questions</h2>
              <button onClick={() => setIsMobileChatOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No messages yet.<br />Ask a question to get started!</p>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${
                        message.sender === 'student' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.sender === 'team' && (
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-lg p-3 ${
                          message.sender === 'student'
                            ? 'bg-primary text-white'
                            : 'bg-white border border-gray-200 shadow-sm'
                        }`}
                      >
                        <p className="text-xs font-semibold mb-1 opacity-75">
                          {message.senderName}
                        </p>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'student' ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {formatMessageTime(message.timestamp)}
                        </p>
                      </div>
                      {message.sender === 'student' && (
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 resize-none border-2 border-gray-200 rounded-lg p-3 text-sm focus:border-primary focus:outline-none"
                  rows={2}
                />
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleSendMessage}
                  disabled={newMessage.trim() === ''}
                  className="self-end"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
});

UnifiedActivities.displayName = 'UnifiedActivities';

export default UnifiedActivities;
