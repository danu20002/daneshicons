import React from 'react';

export const iconData = {
  "id": "UtopiaHot",
  "name": "UtopiaHot",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.05 3.74 C 13.60 9.40, 15.09 14.82, 15.61 14.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.53 2.12 C 18.55 8.58, 6.06 15.87, 15.42 15.76"
      }
    ],
    [
      "path",
      {
        "d": "M 8.03 5.59 C 19.35 19.66, 17.70 19.58, 21.16 14.57"
      }
    ],
    [
      "path",
      {
        "d": "M 8.54 5.31 C 16.34 10.28, 7.88 10.23, 18.68 19.67"
      }
    ]
  ]
};

export const UtopiaHot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.05 3.74 C 13.60 9.40, 15.09 14.82, 15.61 14.86" />
      <path d="M 4.53 2.12 C 18.55 8.58, 6.06 15.87, 15.42 15.76" />
      <path d="M 8.03 5.59 C 19.35 19.66, 17.70 19.58, 21.16 14.57" />
      <path d="M 8.54 5.31 C 16.34 10.28, 7.88 10.23, 18.68 19.67" />
      {children}
    </svg>
  );
});

export default UtopiaHot;
