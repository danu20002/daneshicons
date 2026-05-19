import React from 'react';

export const iconData = {
  "id": "StiloSlash",
  "name": "StiloSlash",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.74 15.86 L 12.52 16.81 L 4.29 17.64 L 7.58 10.05 L 10.97 2.50 L 15.90 9.15 Z"
      }
    ]
  ]
};

export const StiloSlash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.74 15.86 L 12.52 16.81 L 4.29 17.64 L 7.58 10.05 L 10.97 2.50 L 15.90 9.15 Z" />
      {children}
    </svg>
  );
});

export default StiloSlash;
