import React from 'react';

export const iconData = {
  "id": "ViticcioPellet",
  "name": "ViticcioPellet",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.87 15.34 Q 20.20 6.53 7.40 3.72"
      }
    ],
    [
      "path",
      {
        "d": "M 19.97 7.65 L 16.93 4.05"
      }
    ]
  ]
};

export const ViticcioPellet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.87 15.34 Q 20.20 6.53 7.40 3.72" />
      <path d="M 19.97 7.65 L 16.93 4.05" />
      {children}
    </svg>
  );
});

export default ViticcioPellet;
