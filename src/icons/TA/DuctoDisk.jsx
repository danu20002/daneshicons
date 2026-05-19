import React from 'react';

export const iconData = {
  "id": "DuctoDisk",
  "name": "DuctoDisk",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.18 7.55 C 10.80 9.30, 15.54 7.78, 16.56 15.92"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 5.07 C 10.79 8.02, 10.84 14.14, 20.18 17.15"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 6.32 C 13.45 18.03, 16.74 18.15, 15.39 15.37"
      }
    ]
  ]
};

export const DuctoDisk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.18 7.55 C 10.80 9.30, 15.54 7.78, 16.56 15.92" />
      <path d="M 4.86 5.07 C 10.79 8.02, 10.84 14.14, 20.18 17.15" />
      <path d="M 5.44 6.32 C 13.45 18.03, 16.74 18.15, 15.39 15.37" />
      {children}
    </svg>
  );
});

export default DuctoDisk;
