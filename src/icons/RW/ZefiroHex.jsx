import React from 'react';

export const iconData = {
  "id": "ZefiroHex",
  "name": "ZefiroHex",
  "category": "RW",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.25 19.65 L 13.71 16.82 L 13.20 15.28 L 12.42 13.07 L 14.70 15.07 L 17.42 14.74 L 15.81 11.86 L 18.27 10.17 L 19.93 8.87 L 17.83 10.13 L 19.27 8.96 L 18.41 7.83 L 17.68 5.38 L 18.46 2.67 L 20.02 1.51 L 20.36 2.94 L 18.93 1.00 L 21.54 1.00 L 18.83 1.00 L 16.92 2.66 L 15.88 2.60 L 15.41 1.08 L 16.85 3.59 L 18.74 2.50 L 19.45 1.00 L 18.31 3.87 L 20.30 2.92 L 17.73 3.05 L 19.22 2.63"
      }
    ]
  ]
};

export const ZefiroHex = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.25 19.65 L 13.71 16.82 L 13.20 15.28 L 12.42 13.07 L 14.70 15.07 L 17.42 14.74 L 15.81 11.86 L 18.27 10.17 L 19.93 8.87 L 17.83 10.13 L 19.27 8.96 L 18.41 7.83 L 17.68 5.38 L 18.46 2.67 L 20.02 1.51 L 20.36 2.94 L 18.93 1.00 L 21.54 1.00 L 18.83 1.00 L 16.92 2.66 L 15.88 2.60 L 15.41 1.08 L 16.85 3.59 L 18.74 2.50 L 19.45 1.00 L 18.31 3.87 L 20.30 2.92 L 17.73 3.05 L 19.22 2.63" />
      {children}
    </svg>
  );
});

export default ZefiroHex;
