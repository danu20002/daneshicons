import React from 'react';

export const iconData = {
  "id": "AviRocky",
  "name": "AviRocky",
  "category": "ET",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.17 12.00 a 8.83 8.83 0 1 0 17.67 0 a 8.83 8.83 0 1 0 -17.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 7.58 a 7.65 2.294895336295954 0 1 0 15.30 0 a 7.65 2.294895336295954 0 1 0 -15.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 12.00 a 8.83 2.6499168803449717 0 1 0 17.67 0 a 8.83 2.6499168803449717 0 1 0 -17.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 16.42 a 7.65 2.294895336295954 0 1 0 15.30 0 a 7.65 2.294895336295954 0 1 0 -15.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.42 4.35 A 2 2 0 0 0 16.42 19.65"
      }
    ],
    [
      "path",
      {
        "d": "M 16.42 4.35 A 2 2 0 0 1 16.42 19.65"
      }
    ],
    [
      "path",
      {
        "d": "M 7.58 4.35 A 2 2 0 0 0 7.58 19.65"
      }
    ],
    [
      "path",
      {
        "d": "M 7.58 4.35 A 2 2 0 0 1 7.58 19.65"
      }
    ]
  ]
};

export const AviRocky = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.17 12.00 a 8.83 8.83 0 1 0 17.67 0 a 8.83 8.83 0 1 0 -17.67 0" />
      <path d="M 4.35 7.58 a 7.65 2.294895336295954 0 1 0 15.30 0 a 7.65 2.294895336295954 0 1 0 -15.30 0" />
      <path d="M 3.17 12.00 a 8.83 2.6499168803449717 0 1 0 17.67 0 a 8.83 2.6499168803449717 0 1 0 -17.67 0" />
      <path d="M 4.35 16.42 a 7.65 2.294895336295954 0 1 0 15.30 0 a 7.65 2.294895336295954 0 1 0 -15.30 0" />
      <path d="M 16.42 4.35 A 2 2 0 0 0 16.42 19.65" />
      <path d="M 16.42 4.35 A 2 2 0 0 1 16.42 19.65" />
      <path d="M 7.58 4.35 A 2 2 0 0 0 7.58 19.65" />
      <path d="M 7.58 4.35 A 2 2 0 0 1 7.58 19.65" />
      {children}
    </svg>
  );
});

export default AviRocky;
