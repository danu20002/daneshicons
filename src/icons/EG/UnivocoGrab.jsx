import React from 'react';

export const iconData = {
  "id": "UnivocoGrab",
  "name": "UnivocoGrab",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.94 12.12 L 15.15 15.22 L 11.88 21.94 L 8.78 15.15 L 2.06 11.88 L 8.85 8.78 L 12.12 2.06 L 15.22 8.85 Z"
      }
    ]
  ]
};

export const UnivocoGrab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.94 12.12 L 15.15 15.22 L 11.88 21.94 L 8.78 15.15 L 2.06 11.88 L 8.85 8.78 L 12.12 2.06 L 15.22 8.85 Z" />
      {children}
    </svg>
  );
});

export default UnivocoGrab;
