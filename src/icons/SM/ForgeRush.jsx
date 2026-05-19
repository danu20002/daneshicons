import React from 'react';

export const iconData = {
  "id": "ForgeRush",
  "name": "ForgeRush",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.29 8.25 L 20.10 16.98 L 18.77 8.21 L 13.68 15.63 L 9.32 6.32 L 13.28 3.83 L 12.62 5.10 L 11.98 3.96"
      }
    ],
    [
      "path",
      {
        "d": "M 16.85 18.21 L 18.36 13.34 L 17.32 8.00"
      }
    ]
  ]
};

export const ForgeRush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.29 8.25 L 20.10 16.98 L 18.77 8.21 L 13.68 15.63 L 9.32 6.32 L 13.28 3.83 L 12.62 5.10 L 11.98 3.96" />
      <path d="M 16.85 18.21 L 18.36 13.34 L 17.32 8.00" />
      {children}
    </svg>
  );
});

export default ForgeRush;
