import React from 'react';
import Slideshow, { SlideImage } from './Slideshow';

interface FullScreenSectionProps {
  heading: string;
  content: string | React.ReactNode;
  images: (string | SlideImage)[];
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
}

const FullScreenSection: React.FC<FullScreenSectionProps> = ({
  heading,
  content,
  images,
  imagePosition = 'left',
  backgroundColor = 'bg-white'
}) => {
  return (
    <section className={`h-screen w-full flex items-center justify-center ${backgroundColor} snap-start`}>
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Content Side */}
        <div
          className={`w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4 md:p-12 ${
            imagePosition === 'right' ? 'md:order-1' : 'md:order-2'
          }`}
        >
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-5xl font-bold mb-6">
              {heading}
            </h2>
            <div className="text-sm md:text-lg text-gray-700 leading-relaxed">
              {content}
            </div>
          </div>
        </div>

        {/* Slideshow Side */}
        <div
          className={`w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4 md:p-12 ${
            imagePosition === 'right' ? 'md:order-2' : 'md:order-1'
          }`}
        >
          <div className="w-full h-[80%] max-w-2xl">
            <Slideshow images={images} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullScreenSection;
