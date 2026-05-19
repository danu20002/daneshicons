import React from 'react';

export const iconData = {
  "id": "TrichinoHunt",
  "name": "TrichinoHunt",
  "category": "YL",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.99 5.98 L 15.63 5.72 L 16.91 3.97 L 16.20 4.11 L 17.25 1.56 L 17.70 1.00 L 18.29 1.00 L 17.23 1.10 L 16.13 1.53 L 16.55 1.00 L 14.12 1.00 L 13.30 1.00 L 12.81 1.00 L 10.59 2.69 L 12.81 1.00 L 15.09 3.87 L 15.05 6.14 L 17.28 5.01 L 18.30 5.84 L 20.85 6.29 L 22.23 9.10"
      }
    ]
  ]
};

export const TrichinoHunt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.99 5.98 L 15.63 5.72 L 16.91 3.97 L 16.20 4.11 L 17.25 1.56 L 17.70 1.00 L 18.29 1.00 L 17.23 1.10 L 16.13 1.53 L 16.55 1.00 L 14.12 1.00 L 13.30 1.00 L 12.81 1.00 L 10.59 2.69 L 12.81 1.00 L 15.09 3.87 L 15.05 6.14 L 17.28 5.01 L 18.30 5.84 L 20.85 6.29 L 22.23 9.10" />
      {children}
    </svg>
  );
});

export default TrichinoHunt;
