import React from 'react';

export const iconData = {
  "id": "TurgidoDitch",
  "name": "TurgidoDitch",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.09 12.57 L 8.55 10.55 L 20.05 16.26 L 7.17 9.17"
      }
    ],
    [
      "path",
      {
        "d": "M 6.37 20.00 Q 20.33 11.23 19.98 18.38"
      }
    ],
    [
      "path",
      {
        "d": "M 11.84 11.71 A 3.55 5.88 165 0 1 2.48 13.59"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 5.56 L 5.42 5.75 L 12.27 8.90"
      }
    ],
    [
      "path",
      {
        "d": "M 10.35 19.56 A 4.34 6.46 81 0 1 13.91 4.27"
      }
    ],
    [
      "path",
      {
        "d": "M 6.22 11.08 A 3.16 6.58 159 0 1 12.88 2.34"
      }
    ]
  ]
};

export const TurgidoDitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.09 12.57 L 8.55 10.55 L 20.05 16.26 L 7.17 9.17" />
      <path d="M 6.37 20.00 Q 20.33 11.23 19.98 18.38" />
      <path d="M 11.84 11.71 A 3.55 5.88 165 0 1 2.48 13.59" />
      <path d="M 13.46 5.56 L 5.42 5.75 L 12.27 8.90" />
      <path d="M 10.35 19.56 A 4.34 6.46 81 0 1 13.91 4.27" />
      <path d="M 6.22 11.08 A 3.16 6.58 159 0 1 12.88 2.34" />
      {children}
    </svg>
  );
});

export default TurgidoDitch;
