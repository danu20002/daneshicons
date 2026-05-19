import React from 'react';

export const iconData = {
  "id": "VirgolaReduce",
  "name": "VirgolaReduce",
  "category": "WZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.83 10.13 L 6.20 12.74 L 4.07 13.05 L 4.56 15.62 L 7.06 17.66 L 8.42 18.90 L 10.77 19.93 L 13.61 17.48 L 16.58 16.77 L 14.91 19.49 L 15.84 20.19 L 13.38 21.38 L 14.32 18.81 L 13.97 17.01 L 16.63 19.61 L 13.67 22.51 L 13.50 22.12 L 16.01 23.00 L 16.21 23.00 L 14.27 22.97 L 17.16 20.82 L 14.44 20.11 L 16.93 20.92 L 19.55 22.22 L 19.87 20.44 L 19.94 22.57 L 19.51 23.00 L 18.68 20.75 L 16.57 22.29 L 16.91 23.00 L 19.49 20.38 L 19.75 22.58 L 18.55 23.00"
      }
    ]
  ]
};

export const VirgolaReduce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.83 10.13 L 6.20 12.74 L 4.07 13.05 L 4.56 15.62 L 7.06 17.66 L 8.42 18.90 L 10.77 19.93 L 13.61 17.48 L 16.58 16.77 L 14.91 19.49 L 15.84 20.19 L 13.38 21.38 L 14.32 18.81 L 13.97 17.01 L 16.63 19.61 L 13.67 22.51 L 13.50 22.12 L 16.01 23.00 L 16.21 23.00 L 14.27 22.97 L 17.16 20.82 L 14.44 20.11 L 16.93 20.92 L 19.55 22.22 L 19.87 20.44 L 19.94 22.57 L 19.51 23.00 L 18.68 20.75 L 16.57 22.29 L 16.91 23.00 L 19.49 20.38 L 19.75 22.58 L 18.55 23.00" />
      {children}
    </svg>
  );
});

export default VirgolaReduce;
