import React from 'react';

export const iconData = {
  "id": "VietatoRefer",
  "name": "VietatoRefer",
  "category": "OF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.11 4.53 L 5.34 3.81 L 2.74 1.69 L 3.41 1.79 L 4.70 1.00 L 5.18 1.00 L 4.20 1.00 L 3.22 1.00 L 1.30 1.00 L 1.44 3.36 L 1.22 1.48 L 4.15 2.68 L 2.99 1.00 L 5.56 1.00 L 3.74 1.00 L 1.00 1.00 L 3.29 1.00 L 5.16 1.00"
      }
    ],
    [
      "path",
      {
        "d": "M 20.92 14.89 L 19.07 14.63 L 19.22 12.20 L 20.70 13.68 L 23.00 11.19 L 23.00 8.88 L 22.62 8.41 L 23.00 10.61 L 21.92 8.94 L 20.72 6.33 L 23.00 6.23 L 20.77 9.05 L 18.98 8.48 L 19.72 7.60 L 18.27 9.16 L 20.22 9.69 L 23.00 10.94 L 20.85 9.89 L 18.69 8.95 L 19.84 11.45 L 21.46 9.05 L 18.58 6.32 L 20.16 8.83 L 17.73 8.25 L 20.62 9.22 L 19.90 7.79 L 18.10 9.97 L 16.52 11.16 L 14.73 12.87 L 16.10 15.17 L 13.87 12.96"
      }
    ]
  ]
};

export const VietatoRefer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.11 4.53 L 5.34 3.81 L 2.74 1.69 L 3.41 1.79 L 4.70 1.00 L 5.18 1.00 L 4.20 1.00 L 3.22 1.00 L 1.30 1.00 L 1.44 3.36 L 1.22 1.48 L 4.15 2.68 L 2.99 1.00 L 5.56 1.00 L 3.74 1.00 L 1.00 1.00 L 3.29 1.00 L 5.16 1.00" />
      <path d="M 20.92 14.89 L 19.07 14.63 L 19.22 12.20 L 20.70 13.68 L 23.00 11.19 L 23.00 8.88 L 22.62 8.41 L 23.00 10.61 L 21.92 8.94 L 20.72 6.33 L 23.00 6.23 L 20.77 9.05 L 18.98 8.48 L 19.72 7.60 L 18.27 9.16 L 20.22 9.69 L 23.00 10.94 L 20.85 9.89 L 18.69 8.95 L 19.84 11.45 L 21.46 9.05 L 18.58 6.32 L 20.16 8.83 L 17.73 8.25 L 20.62 9.22 L 19.90 7.79 L 18.10 9.97 L 16.52 11.16 L 14.73 12.87 L 16.10 15.17 L 13.87 12.96" />
      {children}
    </svg>
  );
});

export default VietatoRefer;
