import React from 'react';

export const iconData = {
  "id": "ExoDew",
  "name": "ExoDew",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.98 1.24 L 13.32 9.12 L 20.81 5.74 L 15.16 11.70 L 21.83 16.50 L 13.84 14.58 L 13.02 22.76 L 10.68 14.88 L 3.19 18.26 L 8.84 12.30 L 2.17 7.50 L 10.16 9.42 Z"
      }
    ]
  ]
};

export const ExoDew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.98 1.24 L 13.32 9.12 L 20.81 5.74 L 15.16 11.70 L 21.83 16.50 L 13.84 14.58 L 13.02 22.76 L 10.68 14.88 L 3.19 18.26 L 8.84 12.30 L 2.17 7.50 L 10.16 9.42 Z" />
      {children}
    </svg>
  );
});

export default ExoDew;
