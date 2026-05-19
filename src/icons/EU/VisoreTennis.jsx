import React from 'react';

export const iconData = {
  "id": "VisoreTennis",
  "name": "VisoreTennis",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 5.82 L 20.95 5.82 L 20.95 18.18 L 3.05 18.18 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.05 5.82 L 8.03 0.84 L 25.94 0.84 L 20.95 5.82"
      }
    ],
    [
      "path",
      {
        "d": "M 20.95 5.82 L 25.94 0.84 L 25.94 13.20 L 20.95 18.18"
      }
    ]
  ]
};

export const VisoreTennis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 5.82 L 20.95 5.82 L 20.95 18.18 L 3.05 18.18 Z" />
      <path d="M 3.05 5.82 L 8.03 0.84 L 25.94 0.84 L 20.95 5.82" />
      <path d="M 20.95 5.82 L 25.94 0.84 L 25.94 13.20 L 20.95 18.18" />
      {children}
    </svg>
  );
});

export default VisoreTennis;
