import React from 'react';

export const iconData = {
  "id": "VogaWilling",
  "name": "VogaWilling",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.78 3.25 L 12.75 7.58 L 20.75 5.78 L 16.42 12.75 L 18.22 20.75 L 11.25 16.42 L 3.25 18.22 L 7.58 11.25 Z"
      }
    ]
  ]
};

export const VogaWilling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.78 3.25 L 12.75 7.58 L 20.75 5.78 L 16.42 12.75 L 18.22 20.75 L 11.25 16.42 L 3.25 18.22 L 7.58 11.25 Z" />
      {children}
    </svg>
  );
});

export default VogaWilling;
