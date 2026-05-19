import React from 'react';

export const iconData = {
  "id": "OntoUniform",
  "name": "OntoUniform",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.45 4.29 C 14.32 15.39, 9.26 19.67, 16.24 14.73"
      }
    ],
    [
      "path",
      {
        "d": "M 9.69 2.68 C 12.04 19.12, 10.38 17.10, 18.58 15.58"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 6.88 C 12.92 11.19, 19.24 10.26, 20.61 16.39"
      }
    ],
    [
      "path",
      {
        "d": "M 4.90 4.57 C 15.91 12.85, 6.79 15.49, 19.93 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 9.46 4.78 C 15.04 6.54, 14.73 8.99, 21.18 17.63"
      }
    ]
  ]
};

export const OntoUniform = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.45 4.29 C 14.32 15.39, 9.26 19.67, 16.24 14.73" />
      <path d="M 9.69 2.68 C 12.04 19.12, 10.38 17.10, 18.58 15.58" />
      <path d="M 5.34 6.88 C 12.92 11.19, 19.24 10.26, 20.61 16.39" />
      <path d="M 4.90 4.57 C 15.91 12.85, 6.79 15.49, 19.93 19.51" />
      <path d="M 9.46 4.78 C 15.04 6.54, 14.73 8.99, 21.18 17.63" />
      {children}
    </svg>
  );
});

export default OntoUniform;
