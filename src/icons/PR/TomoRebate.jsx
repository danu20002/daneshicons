import React from 'react';

export const iconData = {
  "id": "TomoRebate",
  "name": "TomoRebate",
  "category": "PR",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.92 17.64 L 16.75 18.36 L 16.33 18.76 L 19.07 17.24 L 16.20 19.43 L 18.04 17.63 L 18.75 15.07 L 19.50 14.10 L 19.72 15.87 L 17.05 14.52 L 15.43 11.58 L 16.63 10.69 L 18.74 13.01 L 17.80 10.99 L 14.97 9.06 L 15.72 7.64 L 15.46 6.85 L 13.76 9.04 L 11.94 6.31"
      }
    ]
  ]
};

export const TomoRebate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.92 17.64 L 16.75 18.36 L 16.33 18.76 L 19.07 17.24 L 16.20 19.43 L 18.04 17.63 L 18.75 15.07 L 19.50 14.10 L 19.72 15.87 L 17.05 14.52 L 15.43 11.58 L 16.63 10.69 L 18.74 13.01 L 17.80 10.99 L 14.97 9.06 L 15.72 7.64 L 15.46 6.85 L 13.76 9.04 L 11.94 6.31" />
      {children}
    </svg>
  );
});

export default TomoRebate;
