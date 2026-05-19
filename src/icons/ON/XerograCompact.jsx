import React from 'react';

export const iconData = {
  "id": "XerograCompact",
  "name": "XerograCompact",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.73 3.00 L 13.40 8.51 L 19.86 7.06 L 15.75 12.25 L 19.13 17.95 L 12.92 15.64 L 8.55 20.62 L 8.82 14.00 L 2.73 11.38 L 9.12 9.60 Z"
      }
    ]
  ]
};

export const XerograCompact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.73 3.00 L 13.40 8.51 L 19.86 7.06 L 15.75 12.25 L 19.13 17.95 L 12.92 15.64 L 8.55 20.62 L 8.82 14.00 L 2.73 11.38 L 9.12 9.60 Z" />
      {children}
    </svg>
  );
});

export default XerograCompact;
