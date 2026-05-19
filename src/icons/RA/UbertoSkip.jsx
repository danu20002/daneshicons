import React from 'react';

export const iconData = {
  "id": "UbertoSkip",
  "name": "UbertoSkip",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.10 2.97 C 14.90 17.52, 2.74 3.54, 12.21 12.15"
      }
    ],
    [
      "path",
      {
        "d": "M 11.53 5.22 C 19.15 7.87, 2.96 6.34, 20.74 18.51"
      }
    ],
    [
      "path",
      {
        "d": "M 15.16 17.29 L 21.93 13.12"
      }
    ],
    [
      "path",
      {
        "d": "M 12.09 11.59 L 10.06 21.16 L 20.20 19.20 L 11.64 9.92"
      }
    ]
  ]
};

export const UbertoSkip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.10 2.97 C 14.90 17.52, 2.74 3.54, 12.21 12.15" />
      <path d="M 11.53 5.22 C 19.15 7.87, 2.96 6.34, 20.74 18.51" />
      <path d="M 15.16 17.29 L 21.93 13.12" />
      <path d="M 12.09 11.59 L 10.06 21.16 L 20.20 19.20 L 11.64 9.92" />
      {children}
    </svg>
  );
});

export default UbertoSkip;
