import React from 'react';

export const iconData = {
  "id": "TigroTown",
  "name": "TigroTown",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.64 9.20 L 10.03 8.57 L 14.80 1.64 L 15.43 10.03 L 22.36 14.80 L 13.97 15.43 L 9.20 22.36 L 8.57 13.97 Z"
      }
    ]
  ]
};

export const TigroTown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.64 9.20 L 10.03 8.57 L 14.80 1.64 L 15.43 10.03 L 22.36 14.80 L 13.97 15.43 L 9.20 22.36 L 8.57 13.97 Z" />
      {children}
    </svg>
  );
});

export default TigroTown;
