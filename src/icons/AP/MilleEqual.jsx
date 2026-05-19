import React from 'react';

export const iconData = {
  "id": "MilleEqual",
  "name": "MilleEqual",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.31 20.90 L 9.54 15.01 L 3.81 16.39 L 8.13 12.38 L 3.10 9.31 L 8.99 9.54 L 7.61 3.81 L 11.62 8.13 L 14.69 3.10 L 14.46 8.99 L 20.19 7.61 L 15.87 11.62 L 20.90 14.69 L 15.01 14.46 L 16.39 20.19 L 12.38 15.87 Z"
      }
    ]
  ]
};

export const MilleEqual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.31 20.90 L 9.54 15.01 L 3.81 16.39 L 8.13 12.38 L 3.10 9.31 L 8.99 9.54 L 7.61 3.81 L 11.62 8.13 L 14.69 3.10 L 14.46 8.99 L 20.19 7.61 L 15.87 11.62 L 20.90 14.69 L 15.01 14.46 L 16.39 20.19 L 12.38 15.87 Z" />
      {children}
    </svg>
  );
});

export default MilleEqual;
