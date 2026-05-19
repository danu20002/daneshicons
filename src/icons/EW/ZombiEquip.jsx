import React from 'react';

export const iconData = {
  "id": "ZombiEquip",
  "name": "ZombiEquip",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.27 17.30 L 4.88 7.24 L 14.33 3.75 L 20.56 11.67 L 14.96 20.04 Z"
      }
    ]
  ]
};

export const ZombiEquip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.27 17.30 L 4.88 7.24 L 14.33 3.75 L 20.56 11.67 L 14.96 20.04 Z" />
      {children}
    </svg>
  );
});

export default ZombiEquip;
