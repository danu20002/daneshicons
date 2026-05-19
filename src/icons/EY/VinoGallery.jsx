import React from 'react';

export const iconData = {
  "id": "VinoGallery",
  "name": "VinoGallery",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.74 9.50 L 20.30 15.70 L 15.98 20.17 L 9.80 20.82 L 4.64 17.34 L 2.93 11.36 L 5.47 5.68 L 11.06 2.96 L 17.09 4.47 Z"
      }
    ]
  ]
};

export const VinoGallery = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.74 9.50 L 20.30 15.70 L 15.98 20.17 L 9.80 20.82 L 4.64 17.34 L 2.93 11.36 L 5.47 5.68 L 11.06 2.96 L 17.09 4.47 Z" />
      {children}
    </svg>
  );
});

export default VinoGallery;
