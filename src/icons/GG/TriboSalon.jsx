import React from 'react';

export const iconData = {
  "id": "TriboSalon",
  "name": "TriboSalon",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 6.49 L 19.71 6.49 L 19.71 17.51 L 4.29 17.51 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 6.49 L 8.88 1.90 L 24.29 1.90 L 19.71 6.49"
      }
    ],
    [
      "path",
      {
        "d": "M 19.71 6.49 L 24.29 1.90 L 24.29 12.92 L 19.71 17.51"
      }
    ]
  ]
};

export const TriboSalon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 6.49 L 19.71 6.49 L 19.71 17.51 L 4.29 17.51 Z" />
      <path d="M 4.29 6.49 L 8.88 1.90 L 24.29 1.90 L 19.71 6.49" />
      <path d="M 19.71 6.49 L 24.29 1.90 L 24.29 12.92 L 19.71 17.51" />
      {children}
    </svg>
  );
});

export default TriboSalon;
