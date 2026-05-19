import React from 'react';

export const iconData = {
  "id": "ToroRetire",
  "name": "ToroRetire",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.60 6.83 L 19.40 6.83 L 19.40 17.17 L 4.60 17.17 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 6.83 L 9.45 1.98 L 24.25 1.98 L 19.40 6.83"
      }
    ],
    [
      "path",
      {
        "d": "M 19.40 6.83 L 24.25 1.98 L 24.25 12.32 L 19.40 17.17"
      }
    ]
  ]
};

export const ToroRetire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.60 6.83 L 19.40 6.83 L 19.40 17.17 L 4.60 17.17 Z" />
      <path d="M 4.60 6.83 L 9.45 1.98 L 24.25 1.98 L 19.40 6.83" />
      <path d="M 19.40 6.83 L 24.25 1.98 L 24.25 12.32 L 19.40 17.17" />
      {children}
    </svg>
  );
});

export default ToroRetire;
