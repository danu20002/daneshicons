import React from 'react';

export const iconData = {
  "id": "VarioloTrick",
  "name": "VarioloTrick",
  "category": "LY",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.24 12.33 L 11.67 21.24 L 2.76 11.67 L 12.33 2.76 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.86 14.78 L 9.22 17.86 L 6.14 9.22 L 14.78 6.14 Z"
      }
    ]
  ]
};

export const VarioloTrick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.24 12.33 L 11.67 21.24 L 2.76 11.67 L 12.33 2.76 Z" />
      <path d="M 17.86 14.78 L 9.22 17.86 L 6.14 9.22 L 14.78 6.14 Z" />
      {children}
    </svg>
  );
});

export default VarioloTrick;
