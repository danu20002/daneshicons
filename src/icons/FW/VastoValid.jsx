import React from 'react';

export const iconData = {
  "id": "VastoValid",
  "name": "VastoValid",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.72 5.79 C 18.84 5.48, 15.93 13.35, 15.57 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 2.02 8.13 C 9.70 8.35, 18.54 17.80, 14.64 18.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 3.48 C 19.67 11.99, 18.83 15.97, 16.94 15.88"
      }
    ]
  ]
};

export const VastoValid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.72 5.79 C 18.84 5.48, 15.93 13.35, 15.57 20.62" />
      <path d="M 2.02 8.13 C 9.70 8.35, 18.54 17.80, 14.64 18.74" />
      <path d="M 5.10 3.48 C 19.67 11.99, 18.83 15.97, 16.94 15.88" />
      {children}
    </svg>
  );
});

export default VastoValid;
