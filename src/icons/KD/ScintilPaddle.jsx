import React from 'react';

export const iconData = {
  "id": "ScintilPaddle",
  "name": "ScintilPaddle",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.04 20.81 L 7.26 14.36 L 3.19 9.04 L 9.64 7.26 L 14.96 3.19 L 16.74 9.64 L 20.81 14.96 L 14.36 16.74 Z"
      }
    ]
  ]
};

export const ScintilPaddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.04 20.81 L 7.26 14.36 L 3.19 9.04 L 9.64 7.26 L 14.96 3.19 L 16.74 9.64 L 20.81 14.96 L 14.36 16.74 Z" />
      {children}
    </svg>
  );
});

export default ScintilPaddle;
