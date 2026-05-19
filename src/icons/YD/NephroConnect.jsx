import React from 'react';

export const iconData = {
  "id": "NephroConnect",
  "name": "NephroConnect",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.86 2.04 C 4.03 19.60, 17.49 11.83, 16.06 14.34"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 6.02 C 8.68 19.39, 9.41 6.64, 17.46 21.53"
      }
    ],
    [
      "path",
      {
        "d": "M 8.36 8.77 C 11.25 9.00, 15.72 15.90, 20.71 19.31"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 9.70 C 11.09 4.99, 8.62 6.03, 14.93 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 4.29 C 13.60 5.31, 19.12 6.21, 21.73 19.53"
      }
    ],
    [
      "path",
      {
        "d": "M 6.75 9.56 C 7.65 19.11, 12.42 6.01, 21.00 18.03"
      }
    ]
  ]
};

export const NephroConnect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.86 2.04 C 4.03 19.60, 17.49 11.83, 16.06 14.34" />
      <path d="M 6.54 6.02 C 8.68 19.39, 9.41 6.64, 17.46 21.53" />
      <path d="M 8.36 8.77 C 11.25 9.00, 15.72 15.90, 20.71 19.31" />
      <path d="M 8.25 9.70 C 11.09 4.99, 8.62 6.03, 14.93 18.33" />
      <path d="M 5.51 4.29 C 13.60 5.31, 19.12 6.21, 21.73 19.53" />
      <path d="M 6.75 9.56 C 7.65 19.11, 12.42 6.01, 21.00 18.03" />
      {children}
    </svg>
  );
});

export default NephroConnect;
