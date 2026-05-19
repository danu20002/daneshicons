import React from 'react';

export const iconData = {
  "id": "PavoGown",
  "name": "PavoGown",
  "category": "XS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 11.13 L 2.27 12.43 L 4.21 14.57 L 3.24 11.95 L 3.51 12.07 L 1.65 11.73 L 2.56 10.08 L 1.00 12.53 L 1.00 12.48 L 1.00 12.76 L 2.33 12.31 L 1.00 11.75 L 3.56 13.50 L 1.25 10.77 L 1.00 11.66 L 3.90 9.71 L 6.24 12.20 L 3.52 10.11 L 3.12 10.74 L 4.81 8.87 L 2.89 9.21"
      }
    ],
    [
      "path",
      {
        "d": "M 17.64 17.87 L 19.97 18.15 L 22.38 20.90 L 23.00 22.92 L 23.00 22.59 L 22.72 20.23 L 21.59 19.73 L 18.98 20.67 L 17.49 21.74 L 14.57 19.86 L 11.72 17.68 L 13.97 16.83 L 13.98 13.93 L 16.25 12.83 L 16.82 12.01 L 16.96 10.97 L 18.70 10.67 L 20.17 9.21 L 20.49 6.35 L 20.40 3.93 L 20.31 2.17 L 18.18 2.73 L 15.52 1.55 L 16.45 1.00 L 17.91 3.76 L 17.09 1.00 L 18.57 1.00"
      }
    ]
  ]
};

export const PavoGown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 11.13 L 2.27 12.43 L 4.21 14.57 L 3.24 11.95 L 3.51 12.07 L 1.65 11.73 L 2.56 10.08 L 1.00 12.53 L 1.00 12.48 L 1.00 12.76 L 2.33 12.31 L 1.00 11.75 L 3.56 13.50 L 1.25 10.77 L 1.00 11.66 L 3.90 9.71 L 6.24 12.20 L 3.52 10.11 L 3.12 10.74 L 4.81 8.87 L 2.89 9.21" />
      <path d="M 17.64 17.87 L 19.97 18.15 L 22.38 20.90 L 23.00 22.92 L 23.00 22.59 L 22.72 20.23 L 21.59 19.73 L 18.98 20.67 L 17.49 21.74 L 14.57 19.86 L 11.72 17.68 L 13.97 16.83 L 13.98 13.93 L 16.25 12.83 L 16.82 12.01 L 16.96 10.97 L 18.70 10.67 L 20.17 9.21 L 20.49 6.35 L 20.40 3.93 L 20.31 2.17 L 18.18 2.73 L 15.52 1.55 L 16.45 1.00 L 17.91 3.76 L 17.09 1.00 L 18.57 1.00" />
      {children}
    </svg>
  );
});

export default PavoGown;
