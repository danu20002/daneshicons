import React from 'react';

export const iconData = {
  "id": "GeminiSoothe",
  "name": "GeminiSoothe",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.30 10.11 L 13.89 3.30 L 20.70 13.89 L 10.11 20.70 Z"
      }
    ]
  ]
};

export const GeminiSoothe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.30 10.11 L 13.89 3.30 L 20.70 13.89 L 10.11 20.70 Z" />
      {children}
    </svg>
  );
});

export default GeminiSoothe;
