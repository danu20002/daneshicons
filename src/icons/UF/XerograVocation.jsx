import React from 'react';

export const iconData = {
  "id": "XerograVocation",
  "name": "XerograVocation",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.31 2.16 L 21.84 11.31 L 12.69 21.84 L 2.16 12.69 Z"
      }
    ]
  ]
};

export const XerograVocation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.31 2.16 L 21.84 11.31 L 12.69 21.84 L 2.16 12.69 Z" />
      {children}
    </svg>
  );
});

export default XerograVocation;
