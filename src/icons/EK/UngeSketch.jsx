import React from 'react';

export const iconData = {
  "id": "UngeSketch",
  "name": "UngeSketch",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.35 3.51 C 15.44 8.61, 16.93 6.77, 14.46 18.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 4.43 C 4.47 18.09, 17.02 15.36, 14.48 15.52"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 9.80 C 13.39 17.82, 14.52 15.67, 19.01 19.85"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 4.35 C 13.97 9.51, 15.16 8.83, 17.65 14.48"
      }
    ],
    [
      "path",
      {
        "d": "M 8.47 9.59 C 6.95 15.29, 13.31 8.67, 19.44 16.78"
      }
    ],
    [
      "path",
      {
        "d": "M 8.54 9.27 C 14.00 12.96, 13.22 15.84, 15.42 19.09"
      }
    ]
  ]
};

export const UngeSketch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.35 3.51 C 15.44 8.61, 16.93 6.77, 14.46 18.00" />
      <path d="M 7.78 4.43 C 4.47 18.09, 17.02 15.36, 14.48 15.52" />
      <path d="M 4.83 9.80 C 13.39 17.82, 14.52 15.67, 19.01 19.85" />
      <path d="M 4.91 4.35 C 13.97 9.51, 15.16 8.83, 17.65 14.48" />
      <path d="M 8.47 9.59 C 6.95 15.29, 13.31 8.67, 19.44 16.78" />
      <path d="M 8.54 9.27 C 14.00 12.96, 13.22 15.84, 15.42 19.09" />
      {children}
    </svg>
  );
});

export default UngeSketch;
