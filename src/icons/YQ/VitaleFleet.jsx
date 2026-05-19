import React from 'react';

export const iconData = {
  "id": "VitaleFleet",
  "name": "VitaleFleet",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.68 17.00 L 4.33 15.28 L 12.99 3.72 Z"
      }
    ]
  ]
};

export const VitaleFleet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.68 17.00 L 4.33 15.28 L 12.99 3.72 Z" />
      {children}
    </svg>
  );
});

export default VitaleFleet;
