import React from 'react';

export const iconData = {
  "id": "OxoFame",
  "name": "OxoFame",
  "category": "DZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.52 4.99 L 4.98 5.70 L 7.45 3.59 L 7.10 3.15 L 8.28 1.29 L 7.15 1.02 L 9.45 1.90 L 7.25 1.63 L 9.21 2.27 L 8.35 4.71 L 6.30 3.75 L 4.94 5.40 L 6.34 6.60 L 9.18 3.77 L 9.60 2.68 L 8.36 1.40 L 8.97 1.00 L 11.00 2.63 L 11.71 1.00 L 9.48 3.57 L 11.62 1.00 L 13.28 3.74 L 13.47 1.36 L 15.61 1.00 L 14.13 1.00 L 11.31 1.00 L 10.30 1.63"
      }
    ]
  ]
};

export const OxoFame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.52 4.99 L 4.98 5.70 L 7.45 3.59 L 7.10 3.15 L 8.28 1.29 L 7.15 1.02 L 9.45 1.90 L 7.25 1.63 L 9.21 2.27 L 8.35 4.71 L 6.30 3.75 L 4.94 5.40 L 6.34 6.60 L 9.18 3.77 L 9.60 2.68 L 8.36 1.40 L 8.97 1.00 L 11.00 2.63 L 11.71 1.00 L 9.48 3.57 L 11.62 1.00 L 13.28 3.74 L 13.47 1.36 L 15.61 1.00 L 14.13 1.00 L 11.31 1.00 L 10.30 1.63" />
      {children}
    </svg>
  );
});

export default OxoFame;
