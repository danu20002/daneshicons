import React from 'react';

export const iconData = {
  "id": "OlympoRecycle",
  "name": "OlympoRecycle",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.08 5.27 L 19.92 5.27 L 19.92 18.73 L 4.08 18.73 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 5.27 L 8.42 0.93 L 24.27 0.93 L 19.92 5.27"
      }
    ],
    [
      "path",
      {
        "d": "M 19.92 5.27 L 24.27 0.93 L 24.27 14.38 L 19.92 18.73"
      }
    ]
  ]
};

export const OlympoRecycle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.08 5.27 L 19.92 5.27 L 19.92 18.73 L 4.08 18.73 Z" />
      <path d="M 4.08 5.27 L 8.42 0.93 L 24.27 0.93 L 19.92 5.27" />
      <path d="M 19.92 5.27 L 24.27 0.93 L 24.27 14.38 L 19.92 18.73" />
      {children}
    </svg>
  );
});

export default OlympoRecycle;
