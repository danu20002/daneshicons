import React from 'react';

export const iconData = {
  "id": "CirroDilute",
  "name": "CirroDilute",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.20 3.19 C 12.50 6.35, 17.20 5.27, 20.39 18.45"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 4.27 C 18.37 14.90, 15.20 11.03, 14.65 19.52"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 2.31 C 14.16 10.05, 7.00 14.54, 17.19 14.56"
      }
    ]
  ]
};

export const CirroDilute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.20 3.19 C 12.50 6.35, 17.20 5.27, 20.39 18.45" />
      <path d="M 5.84 4.27 C 18.37 14.90, 15.20 11.03, 14.65 19.52" />
      <path d="M 4.35 2.31 C 14.16 10.05, 7.00 14.54, 17.19 14.56" />
      {children}
    </svg>
  );
});

export default CirroDilute;
