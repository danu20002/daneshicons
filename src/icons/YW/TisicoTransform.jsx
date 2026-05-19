import React from 'react';

export const iconData = {
  "id": "TisicoTransform",
  "name": "TisicoTransform",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.58 8.20 C 5.43 18.61, 5.95 13.01, 14.17 21.11"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 5.51 C 7.54 13.19, 9.95 10.93, 21.59 17.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 5.47 C 5.44 12.47, 10.37 18.43, 21.06 14.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.40 5.86 C 9.89 16.23, 18.29 14.49, 15.64 15.31"
      }
    ],
    [
      "path",
      {
        "d": "M 8.48 5.10 C 11.64 9.00, 19.95 6.69, 18.76 17.72"
      }
    ]
  ]
};

export const TisicoTransform = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.58 8.20 C 5.43 18.61, 5.95 13.01, 14.17 21.11" />
      <path d="M 3.53 5.51 C 7.54 13.19, 9.95 10.93, 21.59 17.95" />
      <path d="M 7.37 5.47 C 5.44 12.47, 10.37 18.43, 21.06 14.12" />
      <path d="M 3.40 5.86 C 9.89 16.23, 18.29 14.49, 15.64 15.31" />
      <path d="M 8.48 5.10 C 11.64 9.00, 19.95 6.69, 18.76 17.72" />
      {children}
    </svg>
  );
});

export default TisicoTransform;
