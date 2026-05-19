import React from 'react';

export const iconData = {
  "id": "PelvoEnchant",
  "name": "PelvoEnchant",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.30 14.49 L 7.60 9.26 L 9.51 1.30 L 14.74 7.60 L 22.70 9.51 L 16.40 14.74 L 14.49 22.70 L 9.26 16.40 Z"
      }
    ]
  ]
};

export const PelvoEnchant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.30 14.49 L 7.60 9.26 L 9.51 1.30 L 14.74 7.60 L 22.70 9.51 L 16.40 14.74 L 14.49 22.70 L 9.26 16.40 Z" />
      {children}
    </svg>
  );
});

export default PelvoEnchant;
