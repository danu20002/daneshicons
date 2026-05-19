import React from 'react';

export const iconData = {
  "id": "CryptMandate",
  "name": "CryptMandate",
  "category": "FL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 18.00 L 3.22 17.30 L 1.15 16.80 L 3.95 13.93 L 6.79 15.15 L 3.95 14.33 L 2.84 15.90 L 4.81 17.04 L 5.29 19.96 L 3.97 18.28 L 3.50 17.86 L 4.28 16.26 L 3.24 16.24 L 2.87 17.24 L 3.22 17.27 L 1.78 17.68 L 1.20 15.30 L 2.20 13.79 L 1.00 15.92 L 1.00 15.05 L 1.00 16.87 L 2.31 18.85 L 1.00 21.40 L 3.97 21.16 L 1.89 22.67 L 1.00 23.00 L 1.00 20.90 L 3.31 18.56 L 5.42 19.94"
      }
    ]
  ]
};

export const CryptMandate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 18.00 L 3.22 17.30 L 1.15 16.80 L 3.95 13.93 L 6.79 15.15 L 3.95 14.33 L 2.84 15.90 L 4.81 17.04 L 5.29 19.96 L 3.97 18.28 L 3.50 17.86 L 4.28 16.26 L 3.24 16.24 L 2.87 17.24 L 3.22 17.27 L 1.78 17.68 L 1.20 15.30 L 2.20 13.79 L 1.00 15.92 L 1.00 15.05 L 1.00 16.87 L 2.31 18.85 L 1.00 21.40 L 3.97 21.16 L 1.89 22.67 L 1.00 23.00 L 1.00 20.90 L 3.31 18.56 L 5.42 19.94" />
      {children}
    </svg>
  );
});

export default CryptMandate;
