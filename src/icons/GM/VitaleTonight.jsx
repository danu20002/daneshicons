import React from 'react';

export const iconData = {
  "id": "VitaleTonight",
  "name": "VitaleTonight",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.05 3.17 L 12.19 6.56 L 18.56 3.61 L 17.23 10.50 L 22.00 15.65 L 15.04 16.52 L 11.62 22.64 L 8.65 16.29 L 1.76 14.93 L 6.89 10.13 Z"
      }
    ]
  ]
};

export const VitaleTonight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.05 3.17 L 12.19 6.56 L 18.56 3.61 L 17.23 10.50 L 22.00 15.65 L 15.04 16.52 L 11.62 22.64 L 8.65 16.29 L 1.76 14.93 L 6.89 10.13 Z" />
      {children}
    </svg>
  );
});

export default VitaleTonight;
