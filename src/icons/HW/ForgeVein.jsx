import React from 'react';

export const iconData = {
  "id": "ForgeVein",
  "name": "ForgeVein",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.32 5.29 L 20.02 14.99 L 11.64 20.55 L 3.75 14.30 L 7.27 4.87 Z"
      }
    ]
  ]
};

export const ForgeVein = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.32 5.29 L 20.02 14.99 L 11.64 20.55 L 3.75 14.30 L 7.27 4.87 Z" />
      {children}
    </svg>
  );
});

export default ForgeVein;
