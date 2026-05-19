import React from 'react';

export const iconData = {
  "id": "ViveriEthics",
  "name": "ViveriEthics",
  "category": "GX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.95 20.42 L 9.49 22.49 L 7.11 23.00 L 9.09 23.00 L 7.22 23.00 L 9.09 23.00 L 8.49 23.00 L 11.42 23.00 L 10.16 20.94 L 9.96 19.50 L 12.84 20.44 L 14.14 19.11 L 11.74 19.77 L 9.75 22.56 L 7.99 23.00 L 6.41 23.00 L 4.53 23.00 L 4.27 23.00 L 1.78 20.82 L 3.52 19.99 L 3.64 21.31 L 5.36 20.82 L 4.63 23.00 L 1.72 23.00 L 1.00 23.00 L 1.00 23.00 L 2.38 21.38 L 1.00 23.00 L 1.00 22.80"
      }
    ]
  ]
};

export const ViveriEthics = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.95 20.42 L 9.49 22.49 L 7.11 23.00 L 9.09 23.00 L 7.22 23.00 L 9.09 23.00 L 8.49 23.00 L 11.42 23.00 L 10.16 20.94 L 9.96 19.50 L 12.84 20.44 L 14.14 19.11 L 11.74 19.77 L 9.75 22.56 L 7.99 23.00 L 6.41 23.00 L 4.53 23.00 L 4.27 23.00 L 1.78 20.82 L 3.52 19.99 L 3.64 21.31 L 5.36 20.82 L 4.63 23.00 L 1.72 23.00 L 1.00 23.00 L 1.00 23.00 L 2.38 21.38 L 1.00 23.00 L 1.00 22.80" />
      {children}
    </svg>
  );
});

export default ViveriEthics;
