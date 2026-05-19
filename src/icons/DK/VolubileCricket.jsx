import React from 'react';

export const iconData = {
  "id": "VolubileCricket",
  "name": "VolubileCricket",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.20 3.01 L 19.39 6.81 L 20.19 15.80 L 12.80 20.99 L 4.61 17.19 L 3.81 8.20 Z"
      }
    ]
  ]
};

export const VolubileCricket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.20 3.01 L 19.39 6.81 L 20.19 15.80 L 12.80 20.99 L 4.61 17.19 L 3.81 8.20 Z" />
      {children}
    </svg>
  );
});

export default VolubileCricket;
