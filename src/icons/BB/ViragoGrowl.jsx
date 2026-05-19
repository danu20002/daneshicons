import React from 'react';

export const iconData = {
  "id": "ViragoGrowl",
  "name": "ViragoGrowl",
  "category": "BB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.58 13.17 L 14.54 11.26 L 17.19 11.21 L 16.99 10.47 L 15.00 13.16 L 17.37 11.55 L 18.60 12.06 L 19.74 14.27 L 17.66 12.99 L 16.13 12.95 L 17.45 15.94 L 17.68 15.14 L 19.76 16.79 L 22.00 19.41 L 20.30 18.11 L 18.28 19.52 L 20.67 21.60 L 23.00 23.00 L 23.00 23.00 L 22.51 20.37 L 23.00 21.55 L 21.43 18.91 L 20.21 21.36 L 20.28 20.63"
      }
    ]
  ]
};

export const ViragoGrowl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.58 13.17 L 14.54 11.26 L 17.19 11.21 L 16.99 10.47 L 15.00 13.16 L 17.37 11.55 L 18.60 12.06 L 19.74 14.27 L 17.66 12.99 L 16.13 12.95 L 17.45 15.94 L 17.68 15.14 L 19.76 16.79 L 22.00 19.41 L 20.30 18.11 L 18.28 19.52 L 20.67 21.60 L 23.00 23.00 L 23.00 23.00 L 22.51 20.37 L 23.00 21.55 L 21.43 18.91 L 20.21 21.36 L 20.28 20.63" />
      {children}
    </svg>
  );
});

export default ViragoGrowl;
