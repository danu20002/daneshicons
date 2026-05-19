import React from 'react';

export const iconData = {
  "id": "CryoRuler",
  "name": "CryoRuler",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.43 20.22 L 3.35 14.33 L 4.78 6.69 L 11.65 3.04 L 18.79 6.14 L 20.81 13.65 L 16.20 19.92 Z"
      }
    ]
  ]
};

export const CryoRuler = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.43 20.22 L 3.35 14.33 L 4.78 6.69 L 11.65 3.04 L 18.79 6.14 L 20.81 13.65 L 16.20 19.92 Z" />
      {children}
    </svg>
  );
});

export default CryoRuler;
