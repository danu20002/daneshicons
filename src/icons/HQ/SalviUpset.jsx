import React from 'react';

export const iconData = {
  "id": "SalviUpset",
  "name": "SalviUpset",
  "category": "HQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.45 5.96 L 1.79 3.85 L 3.01 1.00 L 4.08 1.00 L 4.36 1.00 L 4.20 1.00 L 2.19 3.91 L 1.07 6.08 L 1.30 7.01 L 1.00 6.00 L 1.00 7.88 L 3.26 8.93 L 5.23 8.79 L 6.04 7.89 L 7.30 6.59 L 6.76 4.12"
      }
    ],
    [
      "path",
      {
        "d": "M 14.56 12.62 L 15.96 9.64 L 17.69 10.77 L 17.46 11.59 L 19.46 12.82 L 22.10 14.14 L 22.66 16.04 L 23.00 15.18 L 23.00 17.31 L 23.00 19.36 L 21.49 21.67 L 19.38 21.98 L 16.98 22.12 L 18.20 21.76 L 17.51 23.00 L 19.66 23.00 L 18.44 20.86 L 15.96 19.13 L 18.91 20.99 L 20.83 22.13 L 22.26 23.00 L 22.84 23.00 L 23.00 23.00 L 23.00 22.26 L 23.00 23.00 L 20.50 23.00 L 19.26 22.97 L 21.40 22.72 L 20.52 23.00 L 20.04 22.54 L 18.20 21.52 L 19.91 19.38"
      }
    ]
  ]
};

export const SalviUpset = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.45 5.96 L 1.79 3.85 L 3.01 1.00 L 4.08 1.00 L 4.36 1.00 L 4.20 1.00 L 2.19 3.91 L 1.07 6.08 L 1.30 7.01 L 1.00 6.00 L 1.00 7.88 L 3.26 8.93 L 5.23 8.79 L 6.04 7.89 L 7.30 6.59 L 6.76 4.12" />
      <path d="M 14.56 12.62 L 15.96 9.64 L 17.69 10.77 L 17.46 11.59 L 19.46 12.82 L 22.10 14.14 L 22.66 16.04 L 23.00 15.18 L 23.00 17.31 L 23.00 19.36 L 21.49 21.67 L 19.38 21.98 L 16.98 22.12 L 18.20 21.76 L 17.51 23.00 L 19.66 23.00 L 18.44 20.86 L 15.96 19.13 L 18.91 20.99 L 20.83 22.13 L 22.26 23.00 L 22.84 23.00 L 23.00 23.00 L 23.00 22.26 L 23.00 23.00 L 20.50 23.00 L 19.26 22.97 L 21.40 22.72 L 20.52 23.00 L 20.04 22.54 L 18.20 21.52 L 19.91 19.38" />
      {children}
    </svg>
  );
});

export default SalviUpset;
