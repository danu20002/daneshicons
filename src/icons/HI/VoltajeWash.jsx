import React from 'react';

export const iconData = {
  "id": "VoltajeWash",
  "name": "VoltajeWash",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.29 4.67 C 15.56 12.82, 11.40 13.25, 20.76 17.84"
      }
    ],
    [
      "path",
      {
        "d": "M 9.23 8.11 C 9.24 11.26, 16.97 14.00, 14.16 16.78"
      }
    ],
    [
      "path",
      {
        "d": "M 2.23 8.62 C 19.53 19.20, 11.27 17.76, 15.78 20.68"
      }
    ]
  ]
};

export const VoltajeWash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.29 4.67 C 15.56 12.82, 11.40 13.25, 20.76 17.84" />
      <path d="M 9.23 8.11 C 9.24 11.26, 16.97 14.00, 14.16 16.78" />
      <path d="M 2.23 8.62 C 19.53 19.20, 11.27 17.76, 15.78 20.68" />
      {children}
    </svg>
  );
});

export default VoltajeWash;
