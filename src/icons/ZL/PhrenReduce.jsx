import React from 'react';

export const iconData = {
  "id": "PhrenReduce",
  "name": "PhrenReduce",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.02 12.23 L 14.88 13.75 L 16.81 20.80 L 11.92 15.37 L 6.79 20.56 L 9.05 13.62 L 1.98 11.77 L 9.12 10.25 L 7.19 3.20 L 12.08 8.63 L 17.21 3.44 L 14.95 10.38 Z"
      }
    ]
  ]
};

export const PhrenReduce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.02 12.23 L 14.88 13.75 L 16.81 20.80 L 11.92 15.37 L 6.79 20.56 L 9.05 13.62 L 1.98 11.77 L 9.12 10.25 L 7.19 3.20 L 12.08 8.63 L 17.21 3.44 L 14.95 10.38 Z" />
      {children}
    </svg>
  );
});

export default PhrenReduce;
