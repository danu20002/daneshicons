import React from 'react';

export const iconData = {
  "id": "VateRune",
  "name": "VateRune",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.47 21.02 L 6.99 6.08"
      }
    ],
    [
      "path",
      {
        "d": "M 18.50 16.97 A 3.55 2.80 115 0 1 20.45 8.70"
      }
    ],
    [
      "path",
      {
        "d": "M 11.72 8.75 A 6.74 4.85 28 0 0 4.41 2.03"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 18.07 C 20.56 4.49, 3.77 17.11, 14.85 14.95"
      }
    ]
  ]
};

export const VateRune = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.47 21.02 L 6.99 6.08" />
      <path d="M 18.50 16.97 A 3.55 2.80 115 0 1 20.45 8.70" />
      <path d="M 11.72 8.75 A 6.74 4.85 28 0 0 4.41 2.03" />
      <path d="M 6.30 18.07 C 20.56 4.49, 3.77 17.11, 14.85 14.95" />
      {children}
    </svg>
  );
});

export default VateRune;
