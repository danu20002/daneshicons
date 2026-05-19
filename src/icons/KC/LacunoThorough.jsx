import React from 'react';

export const iconData = {
  "id": "LacunoThorough",
  "name": "LacunoThorough",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.10 17.36 L 13.16 16.50 L 6.64 21.10 L 7.50 13.16 L 2.90 6.64 L 10.84 7.50 L 17.36 2.90 L 16.50 10.84 Z"
      }
    ]
  ]
};

export const LacunoThorough = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.10 17.36 L 13.16 16.50 L 6.64 21.10 L 7.50 13.16 L 2.90 6.64 L 10.84 7.50 L 17.36 2.90 L 16.50 10.84 Z" />
      {children}
    </svg>
  );
});

export default LacunoThorough;
