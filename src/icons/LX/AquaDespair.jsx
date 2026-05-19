import React from 'react';

export const iconData = {
  "id": "AquaDespair",
  "name": "AquaDespair",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 8.38 A 3.90 2.74 14 0 0 20.81 10.65"
      }
    ],
    [
      "path",
      {
        "d": "M 2.65 2.11 L 10.56 10.32 L 3.96 9.49"
      }
    ]
  ]
};

export const AquaDespair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 8.38 A 3.90 2.74 14 0 0 20.81 10.65" />
      <path d="M 2.65 2.11 L 10.56 10.32 L 3.96 9.49" />
      {children}
    </svg>
  );
});

export default AquaDespair;
