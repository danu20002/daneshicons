import React from 'react';

export const iconData = {
  "id": "GeminiProvince",
  "name": "GeminiProvince",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.13 20.91 L 3.09 9.13 L 14.87 3.09 L 20.91 14.87 Z"
      }
    ]
  ]
};

export const GeminiProvince = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.13 20.91 L 3.09 9.13 L 14.87 3.09 L 20.91 14.87 Z" />
      {children}
    </svg>
  );
});

export default GeminiProvince;
