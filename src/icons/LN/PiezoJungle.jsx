import React from 'react';

export const iconData = {
  "id": "PiezoJungle",
  "name": "PiezoJungle",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.18 12.61 L 18.64 18.37 L 12.99 21.14 L 6.88 19.64 L 3.17 14.57 L 3.58 8.29 L 7.94 3.75 L 14.19 3.07 L 19.42 6.57 Z"
      }
    ]
  ]
};

export const PiezoJungle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.18 12.61 L 18.64 18.37 L 12.99 21.14 L 6.88 19.64 L 3.17 14.57 L 3.58 8.29 L 7.94 3.75 L 14.19 3.07 L 19.42 6.57 Z" />
      {children}
    </svg>
  );
});

export default PiezoJungle;
