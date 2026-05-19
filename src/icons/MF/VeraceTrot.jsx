import React from 'react';

export const iconData = {
  "id": "VeraceTrot",
  "name": "VeraceTrot",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.08 21.67 L 3.08 8.10 L 19.84 6.23 Z"
      }
    ]
  ]
};

export const VeraceTrot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.08 21.67 L 3.08 8.10 L 19.84 6.23 Z" />
      {children}
    </svg>
  );
});

export default VeraceTrot;
