import React from 'react';

export const iconData = {
  "id": "VersaleConcrete",
  "name": "VersaleConcrete",
  "category": "XS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.73 18.74 L 8.10 21.50 L 10.91 23.00 L 12.68 23.00 L 11.86 23.00 L 9.56 23.00 L 8.83 23.00 L 9.02 22.06 L 8.44 23.00 L 5.63 22.09 L 4.34 19.80 L 3.07 20.46 L 4.32 20.46 L 5.68 22.47 L 8.62 22.28 L 11.22 22.67 L 12.20 21.78 L 14.21 22.71 L 15.04 23.00 L 16.98 23.00 L 19.42 23.00 L 19.91 22.29 L 21.17 23.00 L 23.00 23.00 L 21.06 23.00 L 23.00 21.44 L 22.53 23.00 L 23.00 21.90 L 23.00 22.64 L 22.88 22.94 L 22.85 23.00 L 21.15 23.00 L 23.00 21.14 L 20.17 20.88 L 18.54 23.00"
      }
    ]
  ]
};

export const VersaleConcrete = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.73 18.74 L 8.10 21.50 L 10.91 23.00 L 12.68 23.00 L 11.86 23.00 L 9.56 23.00 L 8.83 23.00 L 9.02 22.06 L 8.44 23.00 L 5.63 22.09 L 4.34 19.80 L 3.07 20.46 L 4.32 20.46 L 5.68 22.47 L 8.62 22.28 L 11.22 22.67 L 12.20 21.78 L 14.21 22.71 L 15.04 23.00 L 16.98 23.00 L 19.42 23.00 L 19.91 22.29 L 21.17 23.00 L 23.00 23.00 L 21.06 23.00 L 23.00 21.44 L 22.53 23.00 L 23.00 21.90 L 23.00 22.64 L 22.88 22.94 L 22.85 23.00 L 21.15 23.00 L 23.00 21.14 L 20.17 20.88 L 18.54 23.00" />
      {children}
    </svg>
  );
});

export default VersaleConcrete;
