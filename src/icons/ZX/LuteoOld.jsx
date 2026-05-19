import React from 'react';

export const iconData = {
  "id": "LuteoOld",
  "name": "LuteoOld",
  "category": "ZX",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.27 12.63 L 16.51 12.28 L 17.37 10.43 L 15.23 8.19 L 12.65 5.85 L 11.77 4.00 L 13.37 3.48 L 13.47 1.00 L 11.50 1.00 L 12.20 1.00 L 11.96 1.00 L 11.61 1.00 L 11.27 1.00 L 10.87 1.00 L 13.56 3.28 L 10.66 3.61 L 9.52 3.50 L 6.92 3.62 L 5.01 4.27 L 7.63 3.79 L 8.51 2.99 L 8.06 1.19 L 9.43 1.00 L 8.30 1.25 L 5.78 1.00 L 4.45 1.00 L 4.52 2.59"
      }
    ]
  ]
};

export const LuteoOld = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.27 12.63 L 16.51 12.28 L 17.37 10.43 L 15.23 8.19 L 12.65 5.85 L 11.77 4.00 L 13.37 3.48 L 13.47 1.00 L 11.50 1.00 L 12.20 1.00 L 11.96 1.00 L 11.61 1.00 L 11.27 1.00 L 10.87 1.00 L 13.56 3.28 L 10.66 3.61 L 9.52 3.50 L 6.92 3.62 L 5.01 4.27 L 7.63 3.79 L 8.51 2.99 L 8.06 1.19 L 9.43 1.00 L 8.30 1.25 L 5.78 1.00 L 4.45 1.00 L 4.52 2.59" />
      {children}
    </svg>
  );
});

export default LuteoOld;
