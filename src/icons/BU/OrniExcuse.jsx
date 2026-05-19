import React from 'react';

export const iconData = {
  "id": "OrniExcuse",
  "name": "OrniExcuse",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.82 5.75 L 11.71 3.51 L 13.96 6.21 L 15.02 6.23 L 16.67 6.58 L 18.32 7.24 L 17.45 6.92 L 20.30 7.37 L 20.80 6.28 L 22.13 6.44 L 23.00 7.83 L 23.00 10.67 L 21.20 11.02 L 22.46 13.00 L 23.00 10.35 L 21.78 9.92 L 19.52 8.57 L 19.89 9.50 L 18.79 8.30 L 16.39 7.23 L 18.49 7.93 L 21.14 9.55 L 19.43 11.98 L 19.24 11.77"
      }
    ]
  ]
};

export const OrniExcuse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.82 5.75 L 11.71 3.51 L 13.96 6.21 L 15.02 6.23 L 16.67 6.58 L 18.32 7.24 L 17.45 6.92 L 20.30 7.37 L 20.80 6.28 L 22.13 6.44 L 23.00 7.83 L 23.00 10.67 L 21.20 11.02 L 22.46 13.00 L 23.00 10.35 L 21.78 9.92 L 19.52 8.57 L 19.89 9.50 L 18.79 8.30 L 16.39 7.23 L 18.49 7.93 L 21.14 9.55 L 19.43 11.98 L 19.24 11.77" />
      {children}
    </svg>
  );
});

export default OrniExcuse;
