import React from 'react';

export const iconData = {
  "id": "PhysioWoven",
  "name": "PhysioWoven",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.20 22.64 L 10.65 16.07 L 3.88 19.22 L 7.80 12.87 L 1.68 8.58 L 9.15 8.79 L 9.80 1.36 L 13.35 7.93 L 20.12 4.78 L 16.20 11.13 L 22.32 15.42 L 14.85 15.21 Z"
      }
    ]
  ]
};

export const PhysioWoven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.20 22.64 L 10.65 16.07 L 3.88 19.22 L 7.80 12.87 L 1.68 8.58 L 9.15 8.79 L 9.80 1.36 L 13.35 7.93 L 20.12 4.78 L 16.20 11.13 L 22.32 15.42 L 14.85 15.21 Z" />
      {children}
    </svg>
  );
});

export default PhysioWoven;
