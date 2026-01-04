import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, Badge } from './ui';

export interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    badge: string;
    badgeColor: string;
    readTime?: string;
  };
  onClick: () => void;
  imageHeight?: string;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onClick,
  imageHeight = "h-32",
  className = ""
}) => {
  return (
    <Card
      variant="hover"
      className={`flex flex-col gap-3 cursor-pointer group bg-white ${className}`}
      onClick={onClick}
    >
      <div className={`w-full ${imageHeight} rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center`}>
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <Badge variant="outline" color={article.badgeColor as any} className="mb-2 w-fit text-xs">
          {article.badge}
        </Badge>
        <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors text-gray-900">
          {article.title}
        </h3>
        <p className="text-xs text-gray-600 line-clamp-2 mb-3">{article.description}</p>
        <div className={`flex items-center ${article.readTime ? 'justify-between' : 'justify-end'} text-xs text-primary font-medium pt-2 border-t border-gray-100 mt-auto`}>
          {article.readTime && <span className="text-gray-500">{article.readTime}</span>}
          <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
            Read <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ArticleCard;
