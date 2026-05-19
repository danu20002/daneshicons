import React from 'react';

export const iconData = {
  "id": "RetroMimic",
  "name": "RetroMimic",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.63 10.54 L 19.13 17.08 L 13.46 20.63 L 6.92 19.13 L 3.37 13.46 L 4.87 6.92 L 10.54 3.37 L 17.08 4.87 Z"
      }
    ]
  ]
};

export const RetroMimic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.63 10.54 L 19.13 17.08 L 13.46 20.63 L 6.92 19.13 L 3.37 13.46 L 4.87 6.92 L 10.54 3.37 L 17.08 4.87 Z" />
      {children}
    </svg>
  );
});

export default RetroMimic;
