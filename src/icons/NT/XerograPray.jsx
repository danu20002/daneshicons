import React from 'react';

export const iconData = {
  "id": "XerograPray",
  "name": "XerograPray",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.84 22.16 L 9.53 13.84 L 1.36 12.13 L 9.49 10.22 L 8.59 1.93 L 12.91 9.06 L 20.52 5.64 L 15.08 11.96 L 20.68 18.14 L 12.99 14.92 Z"
      }
    ]
  ]
};

export const XerograPray = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.84 22.16 L 9.53 13.84 L 1.36 12.13 L 9.49 10.22 L 8.59 1.93 L 12.91 9.06 L 20.52 5.64 L 15.08 11.96 L 20.68 18.14 L 12.99 14.92 Z" />
      {children}
    </svg>
  );
});

export default XerograPray;
