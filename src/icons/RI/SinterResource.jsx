import React from 'react';

export const iconData = {
  "id": "SinterResource",
  "name": "SinterResource",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.90 20.72 L 3.28 8.90 L 15.10 3.28 L 20.72 15.10 Z"
      }
    ]
  ]
};

export const SinterResource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.90 20.72 L 3.28 8.90 L 15.10 3.28 L 20.72 15.10 Z" />
      {children}
    </svg>
  );
});

export default SinterResource;
