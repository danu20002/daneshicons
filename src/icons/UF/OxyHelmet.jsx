import React from 'react';

export const iconData = {
  "id": "OxyHelmet",
  "name": "OxyHelmet",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.22 4.91 L 16.64 3.36 L 21.65 13.75 L 13.32 21.72 L 3.16 16.26 Z"
      }
    ]
  ]
};

export const OxyHelmet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.22 4.91 L 16.64 3.36 L 21.65 13.75 L 13.32 21.72 L 3.16 16.26 Z" />
      {children}
    </svg>
  );
});

export default OxyHelmet;
