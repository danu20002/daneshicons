import React from 'react';

export const iconData = {
  "id": "RetroCarnival",
  "name": "RetroCarnival",
  "category": "ZE",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.38 14.44 L 20.80 14.30 L 19.74 14.44 L 17.90 17.24 L 20.72 18.90 L 17.73 21.57 L 16.89 23.00 L 15.72 23.00 L 13.16 23.00 L 10.28 22.52 L 7.72 20.11 L 5.33 19.31 L 6.12 21.16 L 8.70 22.65 L 8.01 23.00 L 7.29 23.00 L 5.67 23.00 L 3.57 20.28 L 5.33 18.83 L 4.02 19.74 L 3.44 17.21 L 1.00 19.15 L 1.00 21.40 L 1.00 20.32 L 1.00 20.67 L 1.13 20.01 L 1.00 19.26 L 3.81 20.74 L 2.54 23.00 L 1.00 23.00"
      }
    ]
  ]
};

export const RetroCarnival = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.38 14.44 L 20.80 14.30 L 19.74 14.44 L 17.90 17.24 L 20.72 18.90 L 17.73 21.57 L 16.89 23.00 L 15.72 23.00 L 13.16 23.00 L 10.28 22.52 L 7.72 20.11 L 5.33 19.31 L 6.12 21.16 L 8.70 22.65 L 8.01 23.00 L 7.29 23.00 L 5.67 23.00 L 3.57 20.28 L 5.33 18.83 L 4.02 19.74 L 3.44 17.21 L 1.00 19.15 L 1.00 21.40 L 1.00 20.32 L 1.00 20.67 L 1.13 20.01 L 1.00 19.26 L 3.81 20.74 L 2.54 23.00 L 1.00 23.00" />
      {children}
    </svg>
  );
});

export default RetroCarnival;
