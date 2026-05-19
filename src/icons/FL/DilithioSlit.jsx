import React from 'react';

export const iconData = {
  "id": "DilithioSlit",
  "name": "DilithioSlit",
  "category": "FL",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.94 13.02 L 7.13 11.64 L 4.89 12.36 L 3.77 13.17 L 1.07 13.30 L 1.47 13.20 L 1.00 12.18 L 1.00 11.64 L 2.72 10.56 L 4.77 8.57 L 4.97 10.38 L 7.54 7.74 L 5.57 5.58 L 4.63 4.78 L 7.45 2.68 L 6.78 1.00 L 9.01 3.82 L 7.66 3.71 L 6.20 4.57 L 3.89 3.69 L 3.95 2.96 L 1.58 1.00 L 1.00 2.77"
      }
    ],
    [
      "path",
      {
        "d": "M 18.10 19.70 L 16.61 18.67 L 19.06 18.95 L 21.20 18.83 L 23.00 21.36 L 23.00 20.05 L 23.00 22.14 L 23.00 22.78 L 21.58 23.00 L 20.04 21.47 L 18.01 23.00 L 20.62 21.04 L 20.47 21.01 L 21.24 19.88 L 21.91 21.78 L 21.29 21.19"
      }
    ]
  ]
};

export const DilithioSlit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.94 13.02 L 7.13 11.64 L 4.89 12.36 L 3.77 13.17 L 1.07 13.30 L 1.47 13.20 L 1.00 12.18 L 1.00 11.64 L 2.72 10.56 L 4.77 8.57 L 4.97 10.38 L 7.54 7.74 L 5.57 5.58 L 4.63 4.78 L 7.45 2.68 L 6.78 1.00 L 9.01 3.82 L 7.66 3.71 L 6.20 4.57 L 3.89 3.69 L 3.95 2.96 L 1.58 1.00 L 1.00 2.77" />
      <path d="M 18.10 19.70 L 16.61 18.67 L 19.06 18.95 L 21.20 18.83 L 23.00 21.36 L 23.00 20.05 L 23.00 22.14 L 23.00 22.78 L 21.58 23.00 L 20.04 21.47 L 18.01 23.00 L 20.62 21.04 L 20.47 21.01 L 21.24 19.88 L 21.91 21.78 L 21.29 21.19" />
      {children}
    </svg>
  );
});

export default DilithioSlit;
