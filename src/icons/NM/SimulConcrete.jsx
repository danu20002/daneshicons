import React from 'react';

export const iconData = {
  "id": "SimulConcrete",
  "name": "SimulConcrete",
  "category": "NM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.53 10.50 L 5.93 10.43 L 7.43 8.34 L 6.71 10.87 L 6.12 11.91 L 5.52 11.19 L 5.92 9.05 L 6.51 7.61 L 7.84 8.49 L 5.20 6.03 L 3.62 6.68 L 5.10 7.88 L 3.34 5.59 L 3.69 4.18 L 2.07 6.20 L 1.00 8.19 L 1.00 10.24 L 1.00 10.89 L 1.90 8.34 L 1.64 10.67 L 3.79 9.13 L 5.01 11.46 L 7.34 10.54"
      }
    ]
  ]
};

export const SimulConcrete = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.53 10.50 L 5.93 10.43 L 7.43 8.34 L 6.71 10.87 L 6.12 11.91 L 5.52 11.19 L 5.92 9.05 L 6.51 7.61 L 7.84 8.49 L 5.20 6.03 L 3.62 6.68 L 5.10 7.88 L 3.34 5.59 L 3.69 4.18 L 2.07 6.20 L 1.00 8.19 L 1.00 10.24 L 1.00 10.89 L 1.90 8.34 L 1.64 10.67 L 3.79 9.13 L 5.01 11.46 L 7.34 10.54" />
      {children}
    </svg>
  );
});

export default SimulConcrete;
