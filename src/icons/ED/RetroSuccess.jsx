import React from 'react';

export const iconData = {
  "id": "RetroSuccess",
  "name": "RetroSuccess",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.71 19.86 L 4.05 13.95 L 6.34 6.09 L 14.29 4.14 L 19.95 10.05 L 17.66 17.91 Z"
      }
    ]
  ]
};

export const RetroSuccess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.71 19.86 L 4.05 13.95 L 6.34 6.09 L 14.29 4.14 L 19.95 10.05 L 17.66 17.91 Z" />
      {children}
    </svg>
  );
});

export default RetroSuccess;
