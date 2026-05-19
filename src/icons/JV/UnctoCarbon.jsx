import React from 'react';

export const iconData = {
  "id": "UnctoCarbon",
  "name": "UnctoCarbon",
  "category": "JV",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.89 4.54 L 13.93 4.35 L 13.59 2.19 L 12.43 4.39 L 10.82 3.59 L 12.85 3.99 L 13.65 3.06 L 14.64 1.03 L 16.92 2.57 L 19.63 4.20 L 18.28 6.75 L 18.22 6.92 L 20.15 5.51 L 19.06 7.83 L 21.40 7.46 L 20.03 4.56 L 22.57 2.44"
      }
    ],
    [
      "path",
      {
        "d": "M 11.77 17.21 L 13.19 15.84 L 10.64 13.15 L 11.27 15.02 L 9.37 16.79 L 11.78 17.72 L 12.15 16.66 L 9.48 18.84 L 10.33 16.35 L 8.83 19.32 L 7.74 20.37 L 7.34 20.11 L 9.03 17.15 L 10.17 14.74 L 7.56 16.62 L 4.94 19.53 L 2.09 20.67 L 1.64 23.00 L 1.00 21.31"
      }
    ]
  ]
};

export const UnctoCarbon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.89 4.54 L 13.93 4.35 L 13.59 2.19 L 12.43 4.39 L 10.82 3.59 L 12.85 3.99 L 13.65 3.06 L 14.64 1.03 L 16.92 2.57 L 19.63 4.20 L 18.28 6.75 L 18.22 6.92 L 20.15 5.51 L 19.06 7.83 L 21.40 7.46 L 20.03 4.56 L 22.57 2.44" />
      <path d="M 11.77 17.21 L 13.19 15.84 L 10.64 13.15 L 11.27 15.02 L 9.37 16.79 L 11.78 17.72 L 12.15 16.66 L 9.48 18.84 L 10.33 16.35 L 8.83 19.32 L 7.74 20.37 L 7.34 20.11 L 9.03 17.15 L 10.17 14.74 L 7.56 16.62 L 4.94 19.53 L 2.09 20.67 L 1.64 23.00 L 1.00 21.31" />
      {children}
    </svg>
  );
});

export default UnctoCarbon;
