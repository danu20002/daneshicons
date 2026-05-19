import React from 'react';

export const iconData = {
  "id": "EmeraldFellow",
  "name": "EmeraldFellow",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 8.00 C 8.51 19.34, 15.61 18.42, 14.72 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.37 8.17 C 15.55 14.47, 9.97 14.46, 17.14 19.14"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 7.36 C 5.41 17.17, 11.61 9.20, 18.54 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 3.26 C 8.91 17.19, 7.27 14.13, 16.75 14.16"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 9.53 C 13.70 12.38, 18.37 5.34, 20.23 16.21"
      }
    ]
  ]
};

export const EmeraldFellow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 8.00 C 8.51 19.34, 15.61 18.42, 14.72 20.00" />
      <path d="M 2.37 8.17 C 15.55 14.47, 9.97 14.46, 17.14 19.14" />
      <path d="M 3.17 7.36 C 5.41 17.17, 11.61 9.20, 18.54 18.65" />
      <path d="M 7.64 3.26 C 8.91 17.19, 7.27 14.13, 16.75 14.16" />
      <path d="M 4.92 9.53 C 13.70 12.38, 18.37 5.34, 20.23 16.21" />
      {children}
    </svg>
  );
});

export default EmeraldFellow;
