import React from 'react';

export const iconData = {
  "id": "XoloRoll",
  "name": "XoloRoll",
  "category": "N",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.35 11.97 8.91 9.41 Q 11.53 8.81 14.15 8.20 Q 15.00 8.75 15.84 9.31 Q 14.98 11.27 14.11 13.24 Q 13.95 13.88 13.78 14.53 Z"
      }
    ]
  ]
};

export const XoloRoll = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.35 11.97 8.91 9.41 Q 11.53 8.81 14.15 8.20 Q 15.00 8.75 15.84 9.31 Q 14.98 11.27 14.11 13.24 Q 13.95 13.88 13.78 14.53 Z" />
      {children}
    </svg>
  );
});

export default XoloRoll;
