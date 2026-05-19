import React from 'react';

export const iconData = {
  "id": "TortiStaff",
  "name": "TortiStaff",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.03 3.36 L 14.88 10.38 L 22.51 11.33 L 15.06 13.24 L 19.08 19.80 L 12.94 15.17 L 10.31 22.40 L 10.11 14.71 L 2.82 17.17 L 8.70 12.21 L 2.24 8.04 L 9.78 9.55 L 9.01 1.90 L 12.53 8.74 Z"
      }
    ]
  ]
};

export const TortiStaff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.03 3.36 L 14.88 10.38 L 22.51 11.33 L 15.06 13.24 L 19.08 19.80 L 12.94 15.17 L 10.31 22.40 L 10.11 14.71 L 2.82 17.17 L 8.70 12.21 L 2.24 8.04 L 9.78 9.55 L 9.01 1.90 L 12.53 8.74 Z" />
      {children}
    </svg>
  );
});

export default TortiStaff;
