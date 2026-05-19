import React from 'react';

export const iconData = {
  "id": "TweedFierce",
  "name": "TweedFierce",
  "category": "CN",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.51 5.71 L 12.66 6.78 L 10.09 6.25 L 8.37 7.81 L 9.99 8.18 L 8.91 5.68 L 6.11 4.62 L 6.81 5.68 L 6.66 2.87 L 7.63 1.45 L 5.83 1.00 L 5.20 1.20 L 5.99 3.33 L 7.36 2.16 L 7.67 1.42 L 6.14 3.75 L 5.54 4.86 L 4.30 3.48 L 6.28 2.78 L 4.15 4.28 L 4.21 3.62 L 4.35 2.90 L 2.28 5.81 L 3.28 3.19 L 1.46 4.43 L 1.00 5.66 L 1.00 8.61 L 3.00 9.83 L 4.62 10.20 L 5.72 11.89 L 4.43 9.05"
      }
    ]
  ]
};

export const TweedFierce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.51 5.71 L 12.66 6.78 L 10.09 6.25 L 8.37 7.81 L 9.99 8.18 L 8.91 5.68 L 6.11 4.62 L 6.81 5.68 L 6.66 2.87 L 7.63 1.45 L 5.83 1.00 L 5.20 1.20 L 5.99 3.33 L 7.36 2.16 L 7.67 1.42 L 6.14 3.75 L 5.54 4.86 L 4.30 3.48 L 6.28 2.78 L 4.15 4.28 L 4.21 3.62 L 4.35 2.90 L 2.28 5.81 L 3.28 3.19 L 1.46 4.43 L 1.00 5.66 L 1.00 8.61 L 3.00 9.83 L 4.62 10.20 L 5.72 11.89 L 4.43 9.05" />
      {children}
    </svg>
  );
});

export default TweedFierce;
