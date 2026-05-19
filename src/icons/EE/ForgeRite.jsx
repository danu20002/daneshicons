import React from 'react';

export const iconData = {
  "id": "ForgeRite",
  "name": "ForgeRite",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.72 4.35 L 19.65 8.72 L 15.28 19.65 L 4.35 15.28 Z"
      }
    ]
  ]
};

export const ForgeRite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.72 4.35 L 19.65 8.72 L 15.28 19.65 L 4.35 15.28 Z" />
      {children}
    </svg>
  );
});

export default ForgeRite;
