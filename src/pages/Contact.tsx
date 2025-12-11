import React, { useState } from 'react';
import contactData from '../config/contact';
import env from '../config/env';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building2,
  GraduationCap
} from 'lucide-react';
import { Button, Input, Textarea, Card, SuccessMessage, IconBox } from '../components/ui';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  mobile: '',
  message: '',
  inquiryType: 'general'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    const transformedData = {
      name: formData.name,
      email: formData.email,
      mobile_number: formData.mobile,
      description: formData.message,
      category: formData.inquiryType
    }
    try {
      const response = await fetch(env.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transformedData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error('Form submission failed. Server error:', errorData);
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Network or server error:', error);
      alert('An error occurred. Please check your network connection.');
    }
  };

  const locationInformation ={
    title: "STEAM Buds Office and Lab",
    address: contactData.address,
    coordinates: contactData.coordinates,
    details:{
      nearBy:`Located near by ${contactData.address.landmark}`,
      hours:`Open ${contactData.hours} for visits and consultations`,
      facility:"1000 sq ft innovation lab with the latest equipment and tools"
    },
    googleMapsLink: contactData.googleMapsLink,

  }


  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: contactData.email,
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: contactData.mobile,
      subtitle: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: contactData.fullAddress,
      subtitle: "Schedule a visit to our lab"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: contactData.hoursDetail.days,
      subtitle: contactData.hoursDetail.time
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'student-session', label: 'Student Session' },
    { value: 'school-partnership', label: 'School Partnership' },
    { value: 'support', label: 'Technical Support' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electric-blue-50 to-hot-pink-50 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-6">
            Get in <span className="bg-gradient-to-r from-electric-blue-600 to-hot-pink-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey with STEAM Buds? We'd love to hear from you.
            Reach out to discuss how we can help inspire the next generation of innovators.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold font-display text-gray-800 mb-6">Send us a Message</h2>

                {isSubmitted ? (
                  <SuccessMessage
                    title="Message Sent Successfully!"
                    message="Thank you for reaching out. We'll get back to you within 24 hours."
                  />
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What can we help you with?
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            className={`px-4 py-2 rounded-lg border font-medium transition-colors duration-200 focus:outline-none ${formData.inquiryType === type.value ? 'bg-electric-blue-600 text-white border-electric-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-electric-blue-50'}`}
                            onClick={() => setFormData(prev => ({ ...prev, inquiryType: type.value }))}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        iconLeft={<User className="h-4 w-4" />}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        iconLeft={<Mail className="h-4 w-4" />}
                        required
                      />
                    </div>

                    {/* Mobile Number */}
                    <Input
                      label="Mobile Number"
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Your mobile number"
                    />

                    {/* Message */}
                    <Textarea
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell us more about your requirements, questions, or how we can help..."
                      required
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      iconRight={<Send className="h-5 w-5" />}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card variant="gradient">
                <h3 className="text-xl font-bold font-display text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <IconBox
                        icon={<info.icon className="h-5 w-5" />}
                        color="gradient"
                        className="mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{info.title}</h4>
                        <p className="text-gray-700 text-sm">{info.details}</p>
                        <p className="text-gray-500 text-xs mt-1">{info.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Links */}
              <Card>
                <h3 className="text-xl font-bold font-display text-gray-800 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="flex items-center p-4 bg-electric-blue-50 hover:bg-electric-blue-100 rounded-lg transition-all duration-300 hover:border-cyber-purple-300 group"
                  >
                    <div className="bg-electric-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 group-hover:text-electric-blue-600">Student Sessions</div>
                      <div className="text-sm text-gray-600">Enroll your child</div>
                    </div>
                  </a>
                  
                  <a 
                    href="/contact"
                    className="flex items-center p-4 bg-hot-pink-50 hover:bg-hot-pink-100 rounded-lg transition-all duration-300 hover:border-cyber-purple-300 group"
                  >
                    <div className="bg-hot-pink-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 group-hover:text-hot-pink-600">School Partnership</div>
                      <div className="text-sm text-gray-600">Have quality faculty</div>
                    </div>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              Visit STEAM Buds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Delhi, our state-of-the-art facility is open for visits
            </p>
          </div>
          <div className="rounded-xl overflow-hidden h-96 w-full flex items-center justify-center">
            <iframe
              title={locationInformation.title}
              src={locationInformation.googleMapsLink}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-electric-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-electric-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy to Find</h3>
              <p className="text-gray-600 text-sm">{locationInformation.details.nearBy}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-hot-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-hot-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Flexible Hours</h3>
              <p className="text-gray-600 text-sm">{locationInformation.details.hours}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyber-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-cyber-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Modern Facility</h3>
              <p className="text-gray-600 text-sm">{locationInformation.details.facility}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
