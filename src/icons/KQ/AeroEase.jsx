import React from 'react';

export const iconData = {
  "id": "AeroEase",
  "name": "AeroEase",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.23 5.51 L 20.77 5.51 L 20.77 18.49 L 3.23 18.49 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 5.51 L 7.74 0.99 L 25.29 0.99 L 20.77 5.51"
      }
    ],
    [
      "path",
      {
        "d": "M 20.77 5.51 L 25.29 0.99 L 25.29 13.98 L 20.77 18.49"
      }
    ]
  ]
};

export const AeroEase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.23 5.51 L 20.77 5.51 L 20.77 18.49 L 3.23 18.49 Z" />
      <path d="M 3.23 5.51 L 7.74 0.99 L 25.29 0.99 L 20.77 5.51" />
      <path d="M 20.77 5.51 L 25.29 0.99 L 25.29 13.98 L 20.77 18.49" />
      {children}
    </svg>
  );
});

export default AeroEase;
