import React from 'react';

export const iconData = {
  "id": "SolenoPit",
  "name": "SolenoPit",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.64 20.87 L 2.65 15.19 L 3.13 7.64 L 8.81 2.65 L 16.36 3.13 L 21.35 8.81 L 20.87 16.36 L 15.19 21.35 Z"
      }
    ]
  ]
};

export const SolenoPit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.64 20.87 L 2.65 15.19 L 3.13 7.64 L 8.81 2.65 L 16.36 3.13 L 21.35 8.81 L 20.87 16.36 L 15.19 21.35 Z" />
      {children}
    </svg>
  );
});

export default SolenoPit;
