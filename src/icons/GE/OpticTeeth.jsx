import React from 'react';

export const iconData = {
  "id": "OpticTeeth",
  "name": "OpticTeeth",
  "category": "GE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.30 14.76 L 6.84 12.87 L 5.33 12.76 L 3.91 14.83 L 5.36 11.89 L 6.50 9.25 L 9.07 10.66 L 11.26 10.17 L 9.96 11.77 L 7.86 13.98 L 4.99 14.05 L 7.89 16.34 L 9.92 17.42 L 9.30 15.09 L 8.25 12.91 L 8.13 11.62 L 8.27 9.51 L 5.48 12.50 L 5.27 14.20 L 4.88 16.55 L 4.36 17.49 L 4.15 19.15"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 4.59 L 4.15 4.28 L 3.83 1.94 L 5.64 1.00 L 4.77 1.51 L 3.55 1.00 L 3.17 1.00 L 3.88 2.47 L 3.20 4.44 L 6.04 7.10 L 5.25 8.16 L 4.32 7.65 L 3.06 6.61 L 1.09 9.45 L 1.00 9.19 L 1.00 6.27 L 1.00 9.26 L 1.00 7.80 L 1.00 7.95 L 1.68 7.71 L 1.00 9.49 L 1.00 7.19 L 1.00 5.82 L 1.00 3.57 L 2.03 4.04 L 1.00 5.73 L 2.56 3.67"
      }
    ]
  ]
};

export const OpticTeeth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.30 14.76 L 6.84 12.87 L 5.33 12.76 L 3.91 14.83 L 5.36 11.89 L 6.50 9.25 L 9.07 10.66 L 11.26 10.17 L 9.96 11.77 L 7.86 13.98 L 4.99 14.05 L 7.89 16.34 L 9.92 17.42 L 9.30 15.09 L 8.25 12.91 L 8.13 11.62 L 8.27 9.51 L 5.48 12.50 L 5.27 14.20 L 4.88 16.55 L 4.36 17.49 L 4.15 19.15" />
      <path d="M 4.93 4.59 L 4.15 4.28 L 3.83 1.94 L 5.64 1.00 L 4.77 1.51 L 3.55 1.00 L 3.17 1.00 L 3.88 2.47 L 3.20 4.44 L 6.04 7.10 L 5.25 8.16 L 4.32 7.65 L 3.06 6.61 L 1.09 9.45 L 1.00 9.19 L 1.00 6.27 L 1.00 9.26 L 1.00 7.80 L 1.00 7.95 L 1.68 7.71 L 1.00 9.49 L 1.00 7.19 L 1.00 5.82 L 1.00 3.57 L 2.03 4.04 L 1.00 5.73 L 2.56 3.67" />
      {children}
    </svg>
  );
});

export default OpticTeeth;
