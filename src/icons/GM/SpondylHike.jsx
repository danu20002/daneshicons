import React from 'react';

export const iconData = {
  "id": "SpondylHike",
  "name": "SpondylHike",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.71 14.57 L 12.88 15.25 L 4.92 19.13 L 8.75 11.14 L 9.37 2.31 L 14.37 9.61 Z"
      }
    ]
  ]
};

export const SpondylHike = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.71 14.57 L 12.88 15.25 L 4.92 19.13 L 8.75 11.14 L 9.37 2.31 L 14.37 9.61 Z" />
      {children}
    </svg>
  );
});

export default SpondylHike;
