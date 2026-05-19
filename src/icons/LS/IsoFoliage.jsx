import React from 'react';

export const iconData = {
  "id": "IsoFoliage",
  "name": "IsoFoliage",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.04 6.02 C 13.37 19.53, 5.92 8.76, 19.05 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 8.65 C 18.16 11.00, 16.30 18.66, 15.44 15.29"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 8.08 C 17.08 19.64, 14.51 18.46, 20.92 20.82"
      }
    ]
  ]
};

export const IsoFoliage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.04 6.02 C 13.37 19.53, 5.92 8.76, 19.05 19.51" />
      <path d="M 5.06 8.65 C 18.16 11.00, 16.30 18.66, 15.44 15.29" />
      <path d="M 3.35 8.08 C 17.08 19.64, 14.51 18.46, 20.92 20.82" />
      {children}
    </svg>
  );
});

export default IsoFoliage;
