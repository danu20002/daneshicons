import React from 'react';

export const iconData = {
  "id": "PartiFist",
  "name": "PartiFist",
  "category": "SP",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.60 3.13 L 11.92 3.14 L 9.15 3.06 L 9.58 3.04 L 10.37 2.18 L 12.47 2.22 L 13.31 2.04 L 13.06 1.00 L 11.53 3.53 L 13.88 1.00 L 13.58 1.00 L 15.54 1.05 L 13.55 3.59 L 15.34 6.22 L 18.19 4.66 L 15.96 2.74 L 15.39 3.39 L 16.87 1.89 L 14.62 1.00 L 15.05 1.00 L 15.03 2.55 L 16.68 2.19 L 19.35 5.14 L 21.22 2.87 L 18.93 1.00 L 16.72 1.00 L 15.47 1.00 L 16.09 2.68 L 17.86 2.35 L 15.16 2.70 L 17.12 3.76 L 20.06 3.60"
      }
    ]
  ]
};

export const PartiFist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.60 3.13 L 11.92 3.14 L 9.15 3.06 L 9.58 3.04 L 10.37 2.18 L 12.47 2.22 L 13.31 2.04 L 13.06 1.00 L 11.53 3.53 L 13.88 1.00 L 13.58 1.00 L 15.54 1.05 L 13.55 3.59 L 15.34 6.22 L 18.19 4.66 L 15.96 2.74 L 15.39 3.39 L 16.87 1.89 L 14.62 1.00 L 15.05 1.00 L 15.03 2.55 L 16.68 2.19 L 19.35 5.14 L 21.22 2.87 L 18.93 1.00 L 16.72 1.00 L 15.47 1.00 L 16.09 2.68 L 17.86 2.35 L 15.16 2.70 L 17.12 3.76 L 20.06 3.60" />
      {children}
    </svg>
  );
});

export default PartiFist;
