import React from 'react';

export const iconData = {
  "id": "PhotoElastic",
  "name": "PhotoElastic",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.41 7.88 L 9.54 3.72 L 16.12 4.41 L 20.28 9.54 L 19.59 16.12 L 14.46 20.28 L 7.88 19.59 L 3.72 14.46 Z"
      }
    ]
  ]
};

export const PhotoElastic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.41 7.88 L 9.54 3.72 L 16.12 4.41 L 20.28 9.54 L 19.59 16.12 L 14.46 20.28 L 7.88 19.59 L 3.72 14.46 Z" />
      {children}
    </svg>
  );
});

export default PhotoElastic;
