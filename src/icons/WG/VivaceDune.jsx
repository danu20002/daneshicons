import React from 'react';

export const iconData = {
  "id": "VivaceDune",
  "name": "VivaceDune",
  "category": "WG",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.96 15.29 L 17.47 15.26 L 20.00 15.43 L 17.27 17.78 L 14.39 18.59 L 12.84 21.57 L 14.05 22.27 L 16.31 23.00 L 17.39 23.00 L 17.65 21.47 L 15.41 22.74 L 13.48 23.00 L 11.20 20.19 L 10.77 19.32 L 9.36 16.67 L 7.42 14.88 L 8.94 17.40 L 9.28 17.87 L 8.60 16.31 L 11.30 14.79 L 9.17 15.56 L 8.13 13.12 L 6.01 15.44 L 3.92 14.27 L 1.28 14.09 L 1.00 13.31 L 2.75 12.48"
      }
    ]
  ]
};

export const VivaceDune = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.96 15.29 L 17.47 15.26 L 20.00 15.43 L 17.27 17.78 L 14.39 18.59 L 12.84 21.57 L 14.05 22.27 L 16.31 23.00 L 17.39 23.00 L 17.65 21.47 L 15.41 22.74 L 13.48 23.00 L 11.20 20.19 L 10.77 19.32 L 9.36 16.67 L 7.42 14.88 L 8.94 17.40 L 9.28 17.87 L 8.60 16.31 L 11.30 14.79 L 9.17 15.56 L 8.13 13.12 L 6.01 15.44 L 3.92 14.27 L 1.28 14.09 L 1.00 13.31 L 2.75 12.48" />
      {children}
    </svg>
  );
});

export default VivaceDune;
