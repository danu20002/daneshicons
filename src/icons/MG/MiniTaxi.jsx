import React from 'react';

export const iconData = {
  "id": "MiniTaxi",
  "name": "MiniTaxi",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.95 21.36 L 3.08 14.85 L 6.54 4.40 L 17.54 4.46 L 20.89 14.94 Z"
      }
    ]
  ]
};

export const MiniTaxi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.95 21.36 L 3.08 14.85 L 6.54 4.40 L 17.54 4.46 L 20.89 14.94 Z" />
      {children}
    </svg>
  );
});

export default MiniTaxi;
