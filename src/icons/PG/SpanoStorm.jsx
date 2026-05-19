import React from 'react';

export const iconData = {
  "id": "SpanoStorm",
  "name": "SpanoStorm",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.13 12.88 L 9.03 10.19 L 7.81 1.94 L 12.81 8.61 L 20.28 4.90 L 15.47 11.72 L 21.31 17.68 L 13.34 15.21 L 9.48 22.61 L 9.36 14.27 Z"
      }
    ]
  ]
};

export const SpanoStorm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.13 12.88 L 9.03 10.19 L 7.81 1.94 L 12.81 8.61 L 20.28 4.90 L 15.47 11.72 L 21.31 17.68 L 13.34 15.21 L 9.48 22.61 L 9.36 14.27 Z" />
      {children}
    </svg>
  );
});

export default SpanoStorm;
