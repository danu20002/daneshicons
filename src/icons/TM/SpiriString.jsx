import React from 'react';

export const iconData = {
  "id": "SpiriString",
  "name": "SpiriString",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 8.20 L 12.92 2.52 L 21.30 9.94 L 16.83 20.21 L 5.69 19.13 Z"
      }
    ]
  ]
};

export const SpiriString = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 8.20 L 12.92 2.52 L 21.30 9.94 L 16.83 20.21 L 5.69 19.13 Z" />
      {children}
    </svg>
  );
});

export default SpiriString;
