import React from 'react';

interface ImageWithDisclaimerProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

const DISCLAIMER_TEXT =
  'Not reality, but a vision of tomorrow — because every child deserves dignity, not a tree for shade or a hut for shelter.';

export default function ImageWithDisclaimer({
  containerClassName = '',
  className = '',
  ...imgProps
}: ImageWithDisclaimerProps) {
  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <img className={`w-full h-full object-cover ${className}`} {...imgProps} />
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2">
        <p className="text-white text-xs leading-snug italic text-center">
          {DISCLAIMER_TEXT}
        </p>
      </div>
    </div>
  );
}
