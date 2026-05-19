import React from 'react';

export const iconData = {
  "id": "GyroNeedle",
  "name": "GyroNeedle",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.48 12.35 L 14.54 16.76 L 6.46 20.91 L 6.61 11.82 L 7.06 2.75 L 14.85 7.42 Z"
      }
    ]
  ]
};

export const GyroNeedle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.48 12.35 L 14.54 16.76 L 6.46 20.91 L 6.61 11.82 L 7.06 2.75 L 14.85 7.42 Z" />
      {children}
    </svg>
  );
});

export default GyroNeedle;
