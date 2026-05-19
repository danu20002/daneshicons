import React from 'react';

export const iconData = {
  "id": "SeveroDouble",
  "name": "SeveroDouble",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.23 6.30 L 19.77 6.30 L 19.77 17.70 L 4.23 17.70 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 6.30 L 8.11 2.42 L 23.65 2.42 L 19.77 6.30"
      }
    ],
    [
      "path",
      {
        "d": "M 19.77 6.30 L 23.65 2.42 L 23.65 13.81 L 19.77 17.70"
      }
    ]
  ]
};

export const SeveroDouble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.23 6.30 L 19.77 6.30 L 19.77 17.70 L 4.23 17.70 Z" />
      <path d="M 4.23 6.30 L 8.11 2.42 L 23.65 2.42 L 19.77 6.30" />
      <path d="M 19.77 6.30 L 23.65 2.42 L 23.65 13.81 L 19.77 17.70" />
      {children}
    </svg>
  );
});

export default SeveroDouble;
