import React from 'react';

export const iconData = {
  "id": "ThecoMirth",
  "name": "ThecoMirth",
  "category": "ES",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.91 9.84 L 3.16 10.17 L 2.07 7.95 L 1.43 5.56 L 1.71 4.86 L 2.04 7.20 L 1.00 8.43 L 1.00 11.17 L 3.09 8.92 L 5.11 10.24 L 4.35 8.39 L 3.26 5.65 L 1.00 6.95 L 1.00 4.81 L 1.57 6.52 L 2.01 5.82 L 1.00 4.70 L 2.58 6.46 L 4.44 3.99 L 6.22 2.03 L 7.49 3.45 L 5.37 2.49 L 8.32 5.42 L 5.76 7.15 L 5.43 8.89 L 5.41 10.97 L 5.06 11.30 L 4.94 11.01 L 4.30 12.48 L 6.85 12.99 L 5.78 14.97 L 7.96 15.50 L 7.00 16.04 L 9.19 14.11 L 8.18 16.21 L 10.93 18.47"
      }
    ]
  ]
};

export const ThecoMirth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.91 9.84 L 3.16 10.17 L 2.07 7.95 L 1.43 5.56 L 1.71 4.86 L 2.04 7.20 L 1.00 8.43 L 1.00 11.17 L 3.09 8.92 L 5.11 10.24 L 4.35 8.39 L 3.26 5.65 L 1.00 6.95 L 1.00 4.81 L 1.57 6.52 L 2.01 5.82 L 1.00 4.70 L 2.58 6.46 L 4.44 3.99 L 6.22 2.03 L 7.49 3.45 L 5.37 2.49 L 8.32 5.42 L 5.76 7.15 L 5.43 8.89 L 5.41 10.97 L 5.06 11.30 L 4.94 11.01 L 4.30 12.48 L 6.85 12.99 L 5.78 14.97 L 7.96 15.50 L 7.00 16.04 L 9.19 14.11 L 8.18 16.21 L 10.93 18.47" />
      {children}
    </svg>
  );
});

export default ThecoMirth;
