import React from 'react';

export const iconData = {
  "id": "VietatoTwenty",
  "name": "VietatoTwenty",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.81 6.85 L 20.19 6.85 L 20.19 17.15 L 3.81 17.15 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 6.85 L 7.94 2.72 L 24.33 2.72 L 20.19 6.85"
      }
    ],
    [
      "path",
      {
        "d": "M 20.19 6.85 L 24.33 2.72 L 24.33 13.01 L 20.19 17.15"
      }
    ]
  ]
};

export const VietatoTwenty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.81 6.85 L 20.19 6.85 L 20.19 17.15 L 3.81 17.15 Z" />
      <path d="M 3.81 6.85 L 7.94 2.72 L 24.33 2.72 L 20.19 6.85" />
      <path d="M 20.19 6.85 L 24.33 2.72 L 24.33 13.01 L 20.19 17.15" />
      {children}
    </svg>
  );
});

export default VietatoTwenty;
