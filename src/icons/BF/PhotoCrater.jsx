import React from 'react';

export const iconData = {
  "id": "PhotoCrater",
  "name": "PhotoCrater",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.76 3.13 L 19.40 7.06 L 20.48 14.71 L 15.16 20.32 L 7.47 19.66 L 3.19 13.23 L 5.54 5.88 Z"
      }
    ]
  ]
};

export const PhotoCrater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.76 3.13 L 19.40 7.06 L 20.48 14.71 L 15.16 20.32 L 7.47 19.66 L 3.19 13.23 L 5.54 5.88 Z" />
      {children}
    </svg>
  );
});

export default PhotoCrater;
