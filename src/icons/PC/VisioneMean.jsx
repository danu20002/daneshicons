import React from 'react';

export const iconData = {
  "id": "VisioneMean",
  "name": "VisioneMean",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 8.80 L 12.49 3.17 L 20.55 9.74 L 16.79 19.44 L 6.41 18.86 Z"
      }
    ]
  ]
};

export const VisioneMean = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 8.80 L 12.49 3.17 L 20.55 9.74 L 16.79 19.44 L 6.41 18.86 Z" />
      {children}
    </svg>
  );
});

export default VisioneMean;
