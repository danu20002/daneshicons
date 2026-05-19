import React from 'react';

export const iconData = {
  "id": "VinoTomato",
  "name": "VinoTomato",
  "category": "YM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.82 12.00 a 9.18 9.18 0 1 0 18.35 0 a 9.18 9.18 0 1 0 -18.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.82 12.00 a 9.18 2.7530839811079204 0 1 0 18.35 0 a 9.18 2.7530839811079204 0 1 0 -18.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.82 A 2 2 0 0 0 12.00 21.18"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.82 A 2 2 0 0 1 12.00 21.18"
      }
    ]
  ]
};

export const VinoTomato = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.82 12.00 a 9.18 9.18 0 1 0 18.35 0 a 9.18 9.18 0 1 0 -18.35 0" />
      <path d="M 2.82 12.00 a 9.18 2.7530839811079204 0 1 0 18.35 0 a 9.18 2.7530839811079204 0 1 0 -18.35 0" />
      <path d="M 12.00 2.82 A 2 2 0 0 0 12.00 21.18" />
      <path d="M 12.00 2.82 A 2 2 0 0 1 12.00 21.18" />
      {children}
    </svg>
  );
});

export default VinoTomato;
