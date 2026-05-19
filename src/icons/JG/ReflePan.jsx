import React from 'react';

export const iconData = {
  "id": "ReflePan",
  "name": "ReflePan",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.97 5.13 L 16.98 5.10 L 20.10 14.60 L 12.03 20.51 L 3.92 14.66 Z"
      }
    ]
  ]
};

export const ReflePan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.97 5.13 L 16.98 5.10 L 20.10 14.60 L 12.03 20.51 L 3.92 14.66 Z" />
      {children}
    </svg>
  );
});

export default ReflePan;
