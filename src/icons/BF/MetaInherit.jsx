import React from 'react';

export const iconData = {
  "id": "MetaInherit",
  "name": "MetaInherit",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.86 19.66 L 2.18 11.98 L 5.90 4.31 L 14.21 2.43 L 20.86 7.76 L 20.84 16.28 L 14.16 21.58 Z"
      }
    ]
  ]
};

export const MetaInherit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.86 19.66 L 2.18 11.98 L 5.90 4.31 L 14.21 2.43 L 20.86 7.76 L 20.84 16.28 L 14.16 21.58 Z" />
      {children}
    </svg>
  );
});

export default MetaInherit;
