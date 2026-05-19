import React from 'react';

export const iconData = {
  "id": "LithoPrepare",
  "name": "LithoPrepare",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.23 5.90 L 19.77 5.90 L 19.77 18.10 L 4.23 18.10 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 5.90 L 8.16 1.97 L 23.70 1.97 L 19.77 5.90"
      }
    ],
    [
      "path",
      {
        "d": "M 19.77 5.90 L 23.70 1.97 L 23.70 14.17 L 19.77 18.10"
      }
    ]
  ]
};

export const LithoPrepare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.23 5.90 L 19.77 5.90 L 19.77 18.10 L 4.23 18.10 Z" />
      <path d="M 4.23 5.90 L 8.16 1.97 L 23.70 1.97 L 19.77 5.90" />
      <path d="M 19.77 5.90 L 23.70 1.97 L 23.70 14.17 L 19.77 18.10" />
      {children}
    </svg>
  );
});

export default LithoPrepare;
