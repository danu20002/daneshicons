import React from 'react';

export const iconData = {
  "id": "ScudoHire",
  "name": "ScudoHire",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 15.96 L 4.01 9.61 L 8.04 4.66 L 14.39 4.01 L 19.34 8.04 L 19.99 14.39 L 15.96 19.34 L 9.61 19.99 Z"
      }
    ]
  ]
};

export const ScudoHire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 15.96 L 4.01 9.61 L 8.04 4.66 L 14.39 4.01 L 19.34 8.04 L 19.99 14.39 L 15.96 19.34 L 9.61 19.99 Z" />
      {children}
    </svg>
  );
});

export default ScudoHire;
