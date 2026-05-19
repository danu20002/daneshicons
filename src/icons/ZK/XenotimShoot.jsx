import React from 'react';

export const iconData = {
  "id": "XenotimShoot",
  "name": "XenotimShoot",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.17 17.96 L 3.92 9.94 L 9.75 3.97 L 17.83 6.04 L 20.08 14.06 L 14.25 20.03 Z"
      }
    ]
  ]
};

export const XenotimShoot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.17 17.96 L 3.92 9.94 L 9.75 3.97 L 17.83 6.04 L 20.08 14.06 L 14.25 20.03 Z" />
      {children}
    </svg>
  );
});

export default XenotimShoot;
