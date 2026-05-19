import React from 'react';

export const iconData = {
  "id": "MisoCascade",
  "name": "MisoCascade",
  "category": "XS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.68 13.80 L 20.04 15.36 L 21.58 14.13 L 21.90 15.02 L 20.02 16.88 L 21.07 18.79 L 22.66 19.63 L 20.00 22.06 L 18.31 20.53 L 15.54 23.00 L 14.55 23.00 L 12.64 20.03 L 15.48 18.28 L 18.20 19.61 L 17.04 18.55 L 14.23 19.32 L 13.02 17.64 L 14.83 18.59 L 12.77 19.51 L 12.39 19.14 L 13.86 17.79 L 14.30 16.30 L 16.61 14.99"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 11.71 L 2.66 9.81 L 1.33 9.79 L 1.00 10.37 L 1.00 8.56 L 1.00 10.68 L 1.34 10.35 L 1.00 8.24 L 1.00 5.94 L 1.00 8.91 L 3.20 6.88 L 5.67 5.54 L 2.70 6.81 L 5.04 6.52 L 7.05 4.33 L 4.38 4.53 L 6.86 4.15 L 6.07 3.42 L 8.58 2.18 L 10.66 1.00 L 7.74 3.87"
      }
    ]
  ]
};

export const MisoCascade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.68 13.80 L 20.04 15.36 L 21.58 14.13 L 21.90 15.02 L 20.02 16.88 L 21.07 18.79 L 22.66 19.63 L 20.00 22.06 L 18.31 20.53 L 15.54 23.00 L 14.55 23.00 L 12.64 20.03 L 15.48 18.28 L 18.20 19.61 L 17.04 18.55 L 14.23 19.32 L 13.02 17.64 L 14.83 18.59 L 12.77 19.51 L 12.39 19.14 L 13.86 17.79 L 14.30 16.30 L 16.61 14.99" />
      <path d="M 3.26 11.71 L 2.66 9.81 L 1.33 9.79 L 1.00 10.37 L 1.00 8.56 L 1.00 10.68 L 1.34 10.35 L 1.00 8.24 L 1.00 5.94 L 1.00 8.91 L 3.20 6.88 L 5.67 5.54 L 2.70 6.81 L 5.04 6.52 L 7.05 4.33 L 4.38 4.53 L 6.86 4.15 L 6.07 3.42 L 8.58 2.18 L 10.66 1.00 L 7.74 3.87" />
      {children}
    </svg>
  );
});

export default MisoCascade;
