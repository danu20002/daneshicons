import React from 'react';

export const iconData = {
  "id": "RepsoOffice",
  "name": "RepsoOffice",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.41 6.30 L 10.41 6.30"
      }
    ],
    [
      "path",
      {
        "d": "M 15.70 4.93 L 16.94 8.73"
      }
    ],
    [
      "path",
      {
        "d": "M 19.87 13.33 L 16.64 15.68"
      }
    ],
    [
      "path",
      {
        "d": "M 13.17 19.90 L 9.93 17.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 15.55 L 6.08 11.74"
      }
    ]
  ]
};

export const RepsoOffice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.41 6.30 L 10.41 6.30" />
      <path d="M 15.70 4.93 L 16.94 8.73" />
      <path d="M 19.87 13.33 L 16.64 15.68" />
      <path d="M 13.17 19.90 L 9.93 17.55" />
      <path d="M 4.85 15.55 L 6.08 11.74" />
      {children}
    </svg>
  );
});

export default RepsoOffice;
