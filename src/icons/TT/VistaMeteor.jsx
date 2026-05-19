import React from 'react';

export const iconData = {
  "id": "VistaMeteor",
  "name": "VistaMeteor",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.69 6.62 C 10.80 10.60, 5.55 19.45, 20.19 17.87"
      }
    ],
    [
      "path",
      {
        "d": "M 8.35 9.97 C 13.27 12.11, 19.72 7.20, 20.07 20.51"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 5.30 C 17.87 10.85, 8.34 11.03, 15.07 18.41"
      }
    ]
  ]
};

export const VistaMeteor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.69 6.62 C 10.80 10.60, 5.55 19.45, 20.19 17.87" />
      <path d="M 8.35 9.97 C 13.27 12.11, 19.72 7.20, 20.07 20.51" />
      <path d="M 6.85 5.30 C 17.87 10.85, 8.34 11.03, 15.07 18.41" />
      {children}
    </svg>
  );
});

export default VistaMeteor;
