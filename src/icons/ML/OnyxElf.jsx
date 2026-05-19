import React from 'react';

export const iconData = {
  "id": "OnyxElf",
  "name": "OnyxElf",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.61 3.14 C 13.84 13.15, 14.12 9.02, 14.79 15.48"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 7.39 C 15.86 13.87, 9.79 17.46, 21.00 14.42"
      }
    ],
    [
      "path",
      {
        "d": "M 2.66 3.17 C 17.44 15.89, 5.80 16.30, 15.38 18.41"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 8.90 C 7.18 9.75, 15.15 18.16, 21.73 17.92"
      }
    ]
  ]
};

export const OnyxElf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.61 3.14 C 13.84 13.15, 14.12 9.02, 14.79 15.48" />
      <path d="M 5.02 7.39 C 15.86 13.87, 9.79 17.46, 21.00 14.42" />
      <path d="M 2.66 3.17 C 17.44 15.89, 5.80 16.30, 15.38 18.41" />
      <path d="M 5.63 8.90 C 7.18 9.75, 15.15 18.16, 21.73 17.92" />
      {children}
    </svg>
  );
});

export default OnyxElf;
