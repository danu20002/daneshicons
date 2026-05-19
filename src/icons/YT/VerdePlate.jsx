import React from 'react';

export const iconData = {
  "id": "VerdePlate",
  "name": "VerdePlate",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.28 21.44 L 9.50 15.29 L 2.56 13.28 L 8.71 9.50 L 10.72 2.56 L 14.50 8.71 L 21.44 10.72 L 15.29 14.50 Z"
      }
    ]
  ]
};

export const VerdePlate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.28 21.44 L 9.50 15.29 L 2.56 13.28 L 8.71 9.50 L 10.72 2.56 L 14.50 8.71 L 21.44 10.72 L 15.29 14.50 Z" />
      {children}
    </svg>
  );
});

export default VerdePlate;
