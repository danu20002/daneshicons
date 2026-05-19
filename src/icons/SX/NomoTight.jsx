import React from 'react';

export const iconData = {
  "id": "NomoTight",
  "name": "NomoTight",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.72 21.69 L 7.89 15.88 L 2.31 11.72 L 8.12 7.89 L 12.28 2.31 L 16.11 8.12 L 21.69 12.28 L 15.88 16.11 Z"
      }
    ]
  ]
};

export const NomoTight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.72 21.69 L 7.89 15.88 L 2.31 11.72 L 8.12 7.89 L 12.28 2.31 L 16.11 8.12 L 21.69 12.28 L 15.88 16.11 Z" />
      {children}
    </svg>
  );
});

export default NomoTight;
