import React from 'react';

export const iconData = {
  "id": "GeminiRepublic",
  "name": "GeminiRepublic",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.68 16.26 L 10.32 20.62 L 3.28 13.07 L 8.29 4.04 L 18.43 6.01 Z"
      }
    ]
  ]
};

export const GeminiRepublic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.68 16.26 L 10.32 20.62 L 3.28 13.07 L 8.29 4.04 L 18.43 6.01 Z" />
      {children}
    </svg>
  );
});

export default GeminiRepublic;
