import React from 'react';

export const iconData = {
  "id": "VitaleWelcome",
  "name": "VitaleWelcome",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.21 20.25 L 20.07 12.34"
      }
    ],
    [
      "path",
      {
        "d": "M 9.63 18.68 C 7.35 10.51, 19.71 14.31, 5.21 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 14.80 11.59 C 10.95 7.43, 4.13 4.80, 14.45 21.23"
      }
    ]
  ]
};

export const VitaleWelcome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.21 20.25 L 20.07 12.34" />
      <path d="M 9.63 18.68 C 7.35 10.51, 19.71 14.31, 5.21 18.03" />
      <path d="M 14.80 11.59 C 10.95 7.43, 4.13 4.80, 14.45 21.23" />
      {children}
    </svg>
  );
});

export default VitaleWelcome;
