import React from 'react';

export const iconData = {
  "id": "FantoFox",
  "name": "FantoFox",
  "category": "ES",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.18 8.90 L 8.40 8.68 L 9.07 11.12 L 10.28 9.25 L 8.13 11.57 L 10.81 11.79 L 13.04 13.22 L 14.97 15.23 L 13.94 12.95 L 11.90 9.99 L 11.07 8.78 L 8.94 6.56 L 9.60 4.06 L 11.13 6.38 L 11.91 8.08 L 11.33 10.68 L 10.07 9.13 L 11.67 10.63 L 14.55 12.38 L 16.10 10.85 L 18.89 12.84 L 17.01 15.21 L 15.35 17.10 L 13.32 15.91 L 11.68 13.88 L 9.20 11.32 L 7.55 9.13 L 6.68 10.46 L 3.98 10.41 L 1.65 11.96 L 1.00 13.46 L 3.47 14.97"
      }
    ]
  ]
};

export const FantoFox = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.18 8.90 L 8.40 8.68 L 9.07 11.12 L 10.28 9.25 L 8.13 11.57 L 10.81 11.79 L 13.04 13.22 L 14.97 15.23 L 13.94 12.95 L 11.90 9.99 L 11.07 8.78 L 8.94 6.56 L 9.60 4.06 L 11.13 6.38 L 11.91 8.08 L 11.33 10.68 L 10.07 9.13 L 11.67 10.63 L 14.55 12.38 L 16.10 10.85 L 18.89 12.84 L 17.01 15.21 L 15.35 17.10 L 13.32 15.91 L 11.68 13.88 L 9.20 11.32 L 7.55 9.13 L 6.68 10.46 L 3.98 10.41 L 1.65 11.96 L 1.00 13.46 L 3.47 14.97" />
      {children}
    </svg>
  );
});

export default FantoFox;
