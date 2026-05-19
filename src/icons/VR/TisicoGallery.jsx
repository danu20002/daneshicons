import React from 'react';

export const iconData = {
  "id": "TisicoGallery",
  "name": "TisicoGallery",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.63 20.06 L 4.71 8.52 L 18.66 7.43 Z"
      }
    ]
  ]
};

export const TisicoGallery = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 12.63 20.06 L 4.71 8.52 L 18.66 7.43 Z" />
      {children}
    </svg>
  );
});

export default TisicoGallery;
