import React from 'react';

export const iconData = {
  "id": "GeminiSteak",
  "name": "GeminiSteak",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.93 6.45 L 19.07 6.45 L 19.07 17.55 L 4.93 17.55 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 6.45 L 8.64 2.73 L 22.79 2.73 L 19.07 6.45"
      }
    ],
    [
      "path",
      {
        "d": "M 19.07 6.45 L 22.79 2.73 L 22.79 13.84 L 19.07 17.55"
      }
    ]
  ]
};

export const GeminiSteak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.93 6.45 L 19.07 6.45 L 19.07 17.55 L 4.93 17.55 Z" />
      <path d="M 4.93 6.45 L 8.64 2.73 L 22.79 2.73 L 19.07 6.45" />
      <path d="M 19.07 6.45 L 22.79 2.73 L 22.79 13.84 L 19.07 17.55" />
      {children}
    </svg>
  );
});

export default GeminiSteak;
