import React from 'react';

export const iconData = {
  "id": "OdontoMyth",
  "name": "OdontoMyth",
  "category": "SG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.56 12.00 a 2.44 2.44 0 1 0 4.88 0 a 2.44 2.44 0 1 0 -4.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.35 12.00 a 3.65 3.65 0 1 0 7.30 0 a 3.65 3.65 0 1 0 -7.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 12.00 a 5.39 5.39 0 1 0 10.78 0 a 5.39 5.39 0 1 0 -10.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 12.00 a 7.18 7.18 0 1 0 14.37 0 a 7.18 7.18 0 1 0 -14.37 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.29 12.00 a 8.71 8.71 0 1 0 17.42 0 a 8.71 8.71 0 1 0 -17.42 0"
      }
    ]
  ]
};

export const OdontoMyth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.56 12.00 a 2.44 2.44 0 1 0 4.88 0 a 2.44 2.44 0 1 0 -4.88 0" />
      <path d="M 8.35 12.00 a 3.65 3.65 0 1 0 7.30 0 a 3.65 3.65 0 1 0 -7.30 0" />
      <path d="M 6.61 12.00 a 5.39 5.39 0 1 0 10.78 0 a 5.39 5.39 0 1 0 -10.78 0" />
      <path d="M 4.82 12.00 a 7.18 7.18 0 1 0 14.37 0 a 7.18 7.18 0 1 0 -14.37 0" stroke-dasharray="3 2" />
      <path d="M 3.29 12.00 a 8.71 8.71 0 1 0 17.42 0 a 8.71 8.71 0 1 0 -17.42 0" />
      {children}
    </svg>
  );
});

export default OdontoMyth;
