import React from 'react';

export const iconData = {
  "id": "PyrrhoIron",
  "name": "PyrrhoIron",
  "category": "GE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.62 16.52 L 9.05 15.65 L 11.25 15.25 L 10.32 16.58 L 11.02 18.34 L 9.84 19.86 L 9.00 22.09 L 10.07 20.20 L 11.64 22.63 L 9.97 23.00 L 10.18 22.93 L 10.90 23.00 L 9.20 22.34 L 9.64 23.00 L 8.35 23.00 L 11.14 21.80 L 12.78 22.64 L 13.31 20.61 L 14.67 21.18 L 16.45 19.26 L 16.90 17.86 L 16.90 16.42 L 19.32 16.59 L 20.76 17.80 L 20.46 18.09 L 22.00 16.06 L 21.43 14.95 L 19.34 15.32 L 20.86 18.16 L 18.33 18.74 L 20.37 17.15"
      }
    ]
  ]
};

export const PyrrhoIron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.62 16.52 L 9.05 15.65 L 11.25 15.25 L 10.32 16.58 L 11.02 18.34 L 9.84 19.86 L 9.00 22.09 L 10.07 20.20 L 11.64 22.63 L 9.97 23.00 L 10.18 22.93 L 10.90 23.00 L 9.20 22.34 L 9.64 23.00 L 8.35 23.00 L 11.14 21.80 L 12.78 22.64 L 13.31 20.61 L 14.67 21.18 L 16.45 19.26 L 16.90 17.86 L 16.90 16.42 L 19.32 16.59 L 20.76 17.80 L 20.46 18.09 L 22.00 16.06 L 21.43 14.95 L 19.34 15.32 L 20.86 18.16 L 18.33 18.74 L 20.37 17.15" />
      {children}
    </svg>
  );
});

export default PyrrhoIron;
