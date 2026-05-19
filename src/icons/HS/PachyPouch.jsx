import React from 'react';

export const iconData = {
  "id": "PachyPouch",
  "name": "PachyPouch",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.91 5.92 L 19.09 5.92 L 19.09 18.08 L 4.91 18.08 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 5.92 L 9.87 0.97 L 24.04 0.97 L 19.09 5.92"
      }
    ],
    [
      "path",
      {
        "d": "M 19.09 5.92 L 24.04 0.97 L 24.04 13.12 L 19.09 18.08"
      }
    ]
  ]
};

export const PachyPouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.91 5.92 L 19.09 5.92 L 19.09 18.08 L 4.91 18.08 Z" />
      <path d="M 4.91 5.92 L 9.87 0.97 L 24.04 0.97 L 19.09 5.92" />
      <path d="M 19.09 5.92 L 24.04 0.97 L 24.04 13.12 L 19.09 18.08" />
      {children}
    </svg>
  );
});

export default PachyPouch;
