import React from 'react';

export const iconData = {
  "id": "PantoEquinox",
  "name": "PantoEquinox",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.94 9.47 L 6.28 3.65"
      }
    ],
    [
      "path",
      {
        "d": "M 19.66 17.58 A 3.55 3.90 19 0 1 4.19 13.87"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 19.03 L 6.45 5.16"
      }
    ]
  ]
};

export const PantoEquinox = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.94 9.47 L 6.28 3.65" />
      <path d="M 19.66 17.58 A 3.55 3.90 19 0 1 4.19 13.87" />
      <path d="M 17.90 19.03 L 6.45 5.16" />
      {children}
    </svg>
  );
});

export default PantoEquinox;
