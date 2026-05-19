import React from 'react';

export const iconData = {
  "id": "OcciFashion",
  "name": "OcciFashion",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.69 4.53 C 12.17 13.23, 6.76 19.11, 21.92 20.66"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 6.02 C 7.60 18.99, 17.70 9.03, 19.20 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 8.90 4.27 C 9.99 4.11, 15.63 19.00, 20.05 19.30"
      }
    ],
    [
      "path",
      {
        "d": "M 8.19 5.62 C 4.86 13.86, 18.05 10.14, 18.47 15.44"
      }
    ],
    [
      "path",
      {
        "d": "M 7.03 5.24 C 12.60 19.33, 17.74 16.00, 21.61 16.54"
      }
    ]
  ]
};

export const OcciFashion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.69 4.53 C 12.17 13.23, 6.76 19.11, 21.92 20.66" />
      <path d="M 3.30 6.02 C 7.60 18.99, 17.70 9.03, 19.20 16.82" />
      <path d="M 8.90 4.27 C 9.99 4.11, 15.63 19.00, 20.05 19.30" />
      <path d="M 8.19 5.62 C 4.86 13.86, 18.05 10.14, 18.47 15.44" />
      <path d="M 7.03 5.24 C 12.60 19.33, 17.74 16.00, 21.61 16.54" />
      {children}
    </svg>
  );
});

export default OcciFashion;
