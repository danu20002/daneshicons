import React from 'react';

export const iconData = {
  "id": "MirageOnline",
  "name": "MirageOnline",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 5.27 L 20.13 5.27 L 20.13 18.73 L 3.87 18.73 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 5.27 L 6.89 2.24 L 23.16 2.24 L 20.13 5.27"
      }
    ],
    [
      "path",
      {
        "d": "M 20.13 5.27 L 23.16 2.24 L 23.16 15.71 L 20.13 18.73"
      }
    ]
  ]
};

export const MirageOnline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 5.27 L 20.13 5.27 L 20.13 18.73 L 3.87 18.73 Z" />
      <path d="M 3.87 5.27 L 6.89 2.24 L 23.16 2.24 L 20.13 5.27" />
      <path d="M 20.13 5.27 L 23.16 2.24 L 23.16 15.71 L 20.13 18.73" />
      {children}
    </svg>
  );
});

export default MirageOnline;
