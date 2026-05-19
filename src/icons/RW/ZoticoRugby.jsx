import React from 'react';

export const iconData = {
  "id": "ZoticoRugby",
  "name": "ZoticoRugby",
  "category": "RW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.05 12.81 L 9.56 10.07 L 10.99 7.43 L 8.69 8.30 L 10.96 6.05 L 12.67 6.60 L 15.55 6.44 L 18.54 9.05 L 17.17 8.40 L 17.15 6.72 L 20.01 6.93 L 18.69 4.81 L 18.00 4.10 L 16.05 6.56 L 15.16 4.37 L 16.85 1.92 L 15.51 2.88 L 17.55 1.55 L 19.60 2.57 L 20.56 3.47 L 22.02 1.69 L 21.90 2.55 L 22.71 1.09 L 23.00 2.92 L 23.00 5.84 L 21.44 6.83 L 23.00 8.59 L 20.88 10.59 L 20.85 8.44 L 18.65 10.77 L 18.92 11.81 L 19.30 13.81 L 16.97 12.59"
      }
    ]
  ]
};

export const ZoticoRugby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.05 12.81 L 9.56 10.07 L 10.99 7.43 L 8.69 8.30 L 10.96 6.05 L 12.67 6.60 L 15.55 6.44 L 18.54 9.05 L 17.17 8.40 L 17.15 6.72 L 20.01 6.93 L 18.69 4.81 L 18.00 4.10 L 16.05 6.56 L 15.16 4.37 L 16.85 1.92 L 15.51 2.88 L 17.55 1.55 L 19.60 2.57 L 20.56 3.47 L 22.02 1.69 L 21.90 2.55 L 22.71 1.09 L 23.00 2.92 L 23.00 5.84 L 21.44 6.83 L 23.00 8.59 L 20.88 10.59 L 20.85 8.44 L 18.65 10.77 L 18.92 11.81 L 19.30 13.81 L 16.97 12.59" />
      {children}
    </svg>
  );
});

export default ZoticoRugby;
