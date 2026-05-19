import React from 'react';

export const iconData = {
  "id": "NavioFlag",
  "name": "NavioFlag",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.41 2.17 L 20.22 6.57 L 20.81 16.40 L 12.59 21.83 L 3.78 17.43 L 3.19 7.60 Z"
      }
    ]
  ]
};

export const NavioFlag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.41 2.17 L 20.22 6.57 L 20.81 16.40 L 12.59 21.83 L 3.78 17.43 L 3.19 7.60 Z" />
      {children}
    </svg>
  );
});

export default NavioFlag;
