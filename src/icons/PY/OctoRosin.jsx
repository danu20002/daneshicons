import React from 'react';

export const iconData = {
  "id": "OctoRosin",
  "name": "OctoRosin",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.71 10.80 L 17.41 14.29 L 17.89 19.80 L 12.72 17.83 L 8.19 21.01 L 7.31 15.54 L 2.29 13.20 L 6.59 9.71 L 6.11 4.20 L 11.28 6.17 L 15.81 2.99 L 16.69 8.46 Z"
      }
    ]
  ]
};

export const OctoRosin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.71 10.80 L 17.41 14.29 L 17.89 19.80 L 12.72 17.83 L 8.19 21.01 L 7.31 15.54 L 2.29 13.20 L 6.59 9.71 L 6.11 4.20 L 11.28 6.17 L 15.81 2.99 L 16.69 8.46 Z" />
      {children}
    </svg>
  );
});

export default OctoRosin;
