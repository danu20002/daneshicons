import React from 'react';

export const iconData = {
  "id": "VindiceIntrigue",
  "name": "VindiceIntrigue",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.55 2.75 A 3.20 4.06 69 0 1 6.31 18.06"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 11.46 C 21.41 18.72, 21.22 18.96, 15.13 8.65"
      }
    ],
    [
      "path",
      {
        "d": "M 21.59 5.32 Q 4.93 11.43 12.36 20.85"
      }
    ]
  ]
};

export const VindiceIntrigue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.55 2.75 A 3.20 4.06 69 0 1 6.31 18.06" />
      <path d="M 3.50 11.46 C 21.41 18.72, 21.22 18.96, 15.13 8.65" />
      <path d="M 21.59 5.32 Q 4.93 11.43 12.36 20.85" />
      {children}
    </svg>
  );
});

export default VindiceIntrigue;
