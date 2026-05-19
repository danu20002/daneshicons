import React from 'react';

export const iconData = {
  "id": "MaltoDual",
  "name": "MaltoDual",
  "category": "RD",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.09 16.49 L 19.09 15.95 L 21.35 13.68 L 23.00 15.10 L 23.00 17.57 L 23.00 18.26 L 23.00 17.30 L 23.00 19.49 L 23.00 17.39 L 21.00 16.96 L 18.59 15.72 L 20.47 15.82 L 20.80 17.47 L 17.84 20.38 L 20.20 21.88 L 18.83 20.29 L 17.32 22.53 L 17.74 20.79 L 16.00 22.78 L 18.05 23.00 L 18.26 23.00 L 16.16 23.00 L 17.72 23.00 L 19.78 23.00 L 22.47 23.00 L 23.00 21.64 L 23.00 19.87 L 21.33 16.90 L 21.08 15.11 L 23.00 17.20 L 23.00 18.22 L 20.82 21.12 L 23.00 20.03 L 23.00 17.60 L 22.00 20.27"
      }
    ]
  ]
};

export const MaltoDual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.09 16.49 L 19.09 15.95 L 21.35 13.68 L 23.00 15.10 L 23.00 17.57 L 23.00 18.26 L 23.00 17.30 L 23.00 19.49 L 23.00 17.39 L 21.00 16.96 L 18.59 15.72 L 20.47 15.82 L 20.80 17.47 L 17.84 20.38 L 20.20 21.88 L 18.83 20.29 L 17.32 22.53 L 17.74 20.79 L 16.00 22.78 L 18.05 23.00 L 18.26 23.00 L 16.16 23.00 L 17.72 23.00 L 19.78 23.00 L 22.47 23.00 L 23.00 21.64 L 23.00 19.87 L 21.33 16.90 L 21.08 15.11 L 23.00 17.20 L 23.00 18.22 L 20.82 21.12 L 23.00 20.03 L 23.00 17.60 L 22.00 20.27" />
      {children}
    </svg>
  );
});

export default MaltoDual;
