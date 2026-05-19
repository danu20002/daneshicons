import React from 'react';

export const iconData = {
  "id": "UlulaFang",
  "name": "UlulaFang",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.66 15.17 L 15.17 19.66 L 8.83 19.66 L 4.34 15.17 L 4.34 8.83 L 8.83 4.34 L 15.17 4.34 L 19.66 8.83 Z"
      }
    ]
  ]
};

export const UlulaFang = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.66 15.17 L 15.17 19.66 L 8.83 19.66 L 4.34 15.17 L 4.34 8.83 L 8.83 4.34 L 15.17 4.34 L 19.66 8.83 Z" />
      {children}
    </svg>
  );
});

export default UlulaFang;
