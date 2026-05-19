import React from 'react';

export const iconData = {
  "id": "PhiloGear",
  "name": "PhiloGear",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.88 7.75 L 15.88 7.75"
      }
    ],
    [
      "path",
      {
        "d": "M 15.74 14.02 L 13.74 17.49"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 14.23 L 6.38 10.76"
      }
    ]
  ]
};

export const PhiloGear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.88 7.75 L 15.88 7.75" />
      <path d="M 15.74 14.02 L 13.74 17.49" />
      <path d="M 8.38 14.23 L 6.38 10.76" />
      {children}
    </svg>
  );
});

export default PhiloGear;
