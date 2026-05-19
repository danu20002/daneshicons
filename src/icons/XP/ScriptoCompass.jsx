import React from 'react';

export const iconData = {
  "id": "ScriptoCompass",
  "name": "ScriptoCompass",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.23 17.42 A 3.13 3.17 18 0 0 8.23 11.51"
      }
    ],
    [
      "path",
      {
        "d": "M 19.78 12.21 L 6.70 4.94 L 8.05 16.93 L 7.97 13.46 L 13.74 5.00 L 4.04 7.96 L 6.06 7.87 L 6.30 15.13"
      }
    ],
    [
      "path",
      {
        "d": "M 15.18 7.35 Q 10.89 8.53 5.18 6.82"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 12.66 L 19.43 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 19.69 19.15 Q 3.37 16.18 4.74 20.80"
      }
    ],
    [
      "path",
      {
        "d": "M 9.97 17.89 C 19.08 15.96, 11.11 3.23, 14.13 16.02"
      }
    ]
  ]
};

export const ScriptoCompass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.23 17.42 A 3.13 3.17 18 0 0 8.23 11.51" />
      <path d="M 19.78 12.21 L 6.70 4.94 L 8.05 16.93 L 7.97 13.46 L 13.74 5.00 L 4.04 7.96 L 6.06 7.87 L 6.30 15.13" />
      <path d="M 15.18 7.35 Q 10.89 8.53 5.18 6.82" />
      <path d="M 6.70 12.66 L 19.43 17.45" />
      <path d="M 19.69 19.15 Q 3.37 16.18 4.74 20.80" />
      <path d="M 9.97 17.89 C 19.08 15.96, 11.11 3.23, 14.13 16.02" />
      {children}
    </svg>
  );
});

export default ScriptoCompass;
