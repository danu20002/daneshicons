import React from 'react';

export const iconData = {
  "id": "MirroTram",
  "name": "MirroTram",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 5.67 L 19.96 5.67 L 19.96 18.33 L 4.04 18.33 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 5.67 L 8.13 1.58 L 24.06 1.58 L 19.96 5.67"
      }
    ],
    [
      "path",
      {
        "d": "M 19.96 5.67 L 24.06 1.58 L 24.06 14.23 L 19.96 18.33"
      }
    ]
  ]
};

export const MirroTram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 5.67 L 19.96 5.67 L 19.96 18.33 L 4.04 18.33 Z" />
      <path d="M 4.04 5.67 L 8.13 1.58 L 24.06 1.58 L 19.96 5.67" />
      <path d="M 19.96 5.67 L 24.06 1.58 L 24.06 14.23 L 19.96 18.33" />
      {children}
    </svg>
  );
});

export default MirroTram;
