import React from 'react';

export const iconData = {
  "id": "ZimoSatisfy",
  "name": "ZimoSatisfy",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.94 7.47 C 5.12 7.31, 7.84 10.99, 17.53 20.08"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 8.80 C 18.21 6.92, 5.82 10.02, 19.57 14.38"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 3.76 C 16.79 19.91, 7.09 10.25, 17.41 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 5.77 C 5.28 5.85, 8.86 11.24, 21.23 17.88"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 5.83 C 15.00 11.89, 14.64 11.81, 19.07 15.10"
      }
    ]
  ]
};

export const ZimoSatisfy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.94 7.47 C 5.12 7.31, 7.84 10.99, 17.53 20.08" />
      <path d="M 3.00 8.80 C 18.21 6.92, 5.82 10.02, 19.57 14.38" />
      <path d="M 5.14 3.76 C 16.79 19.91, 7.09 10.25, 17.41 18.58" />
      <path d="M 7.04 5.77 C 5.28 5.85, 8.86 11.24, 21.23 17.88" />
      <path d="M 3.75 5.83 C 15.00 11.89, 14.64 11.81, 19.07 15.10" />
      {children}
    </svg>
  );
});

export default ZimoSatisfy;
