import React from 'react';

export const iconData = {
  "id": "SomaCamp",
  "name": "SomaCamp",
  "category": "LI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.42 12.00 a 9.58 9.58 0 1 0 19.16 0 a 9.58 9.58 0 1 0 -19.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.42 12.00 a 9.58 2.8740424268413336 0 1 0 19.16 0 a 9.58 2.8740424268413336 0 1 0 -19.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.42 A 2 2 0 0 0 12.00 21.58"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.42 A 2 2 0 0 1 12.00 21.58"
      }
    ]
  ]
};

export const SomaCamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.42 12.00 a 9.58 9.58 0 1 0 19.16 0 a 9.58 9.58 0 1 0 -19.16 0" />
      <path d="M 2.42 12.00 a 9.58 2.8740424268413336 0 1 0 19.16 0 a 9.58 2.8740424268413336 0 1 0 -19.16 0" />
      <path d="M 12.00 2.42 A 2 2 0 0 0 12.00 21.58" />
      <path d="M 12.00 2.42 A 2 2 0 0 1 12.00 21.58" />
      {children}
    </svg>
  );
});

export default SomaCamp;
