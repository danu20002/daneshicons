import React from 'react';

export const iconData = {
  "id": "UrbanoJewel",
  "name": "UrbanoJewel",
  "category": "LH",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.47 6.74 L 18.80 4.94 L 20.94 7.08 L 19.24 7.93 L 18.13 9.26 L 19.96 8.25 L 21.56 9.14 L 22.08 11.15 L 21.33 8.24 L 20.67 8.03 L 22.21 9.83 L 23.00 10.72 L 21.58 8.89 L 19.63 8.32 L 18.74 9.13 L 17.87 7.19 L 19.98 7.73 L 20.68 4.77 L 19.71 6.34 L 19.11 4.53 L 17.40 6.59 L 20.14 3.88 L 21.40 6.49 L 18.78 3.76 L 19.34 5.03 L 16.65 6.63 L 14.72 4.42 L 14.62 5.65"
      }
    ],
    [
      "path",
      {
        "d": "M 19.97 3.34 L 21.87 3.57 L 18.96 2.60 L 18.59 1.84 L 16.66 1.00 L 14.48 1.00 L 15.53 3.79 L 13.86 3.56 L 16.13 4.07 L 16.46 3.70 L 13.67 5.32 L 14.21 4.67 L 16.96 6.37 L 16.57 7.63 L 17.13 9.91 L 15.99 11.91 L 13.99 10.15 L 11.64 13.12 L 10.88 13.01 L 9.83 11.20 L 10.06 11.17 L 11.93 10.91"
      }
    ]
  ]
};

export const UrbanoJewel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.47 6.74 L 18.80 4.94 L 20.94 7.08 L 19.24 7.93 L 18.13 9.26 L 19.96 8.25 L 21.56 9.14 L 22.08 11.15 L 21.33 8.24 L 20.67 8.03 L 22.21 9.83 L 23.00 10.72 L 21.58 8.89 L 19.63 8.32 L 18.74 9.13 L 17.87 7.19 L 19.98 7.73 L 20.68 4.77 L 19.71 6.34 L 19.11 4.53 L 17.40 6.59 L 20.14 3.88 L 21.40 6.49 L 18.78 3.76 L 19.34 5.03 L 16.65 6.63 L 14.72 4.42 L 14.62 5.65" />
      <path d="M 19.97 3.34 L 21.87 3.57 L 18.96 2.60 L 18.59 1.84 L 16.66 1.00 L 14.48 1.00 L 15.53 3.79 L 13.86 3.56 L 16.13 4.07 L 16.46 3.70 L 13.67 5.32 L 14.21 4.67 L 16.96 6.37 L 16.57 7.63 L 17.13 9.91 L 15.99 11.91 L 13.99 10.15 L 11.64 13.12 L 10.88 13.01 L 9.83 11.20 L 10.06 11.17 L 11.93 10.91" />
      {children}
    </svg>
  );
});

export default UrbanoJewel;
