import React from 'react';

export const iconData = {
  "id": "RigoTenant",
  "name": "RigoTenant",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.81 18.48 L 7.32 18.57 L 4.30 9.58 L 11.92 3.93 L 19.65 9.43 Z"
      }
    ]
  ]
};

export const RigoTenant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.81 18.48 L 7.32 18.57 L 4.30 9.58 L 11.92 3.93 L 19.65 9.43 Z" />
      {children}
    </svg>
  );
});

export default RigoTenant;
