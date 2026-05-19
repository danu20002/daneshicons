import React from 'react';

export const iconData = {
  "id": "VerucoMarble",
  "name": "VerucoMarble",
  "category": "RY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.91 5.52 L 20.09 5.52 L 20.09 18.48 L 3.91 18.48 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 5.52 L 8.17 1.26 L 24.35 1.26 L 20.09 5.52"
      }
    ],
    [
      "path",
      {
        "d": "M 20.09 5.52 L 24.35 1.26 L 24.35 14.22 L 20.09 18.48"
      }
    ]
  ]
};

export const VerucoMarble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.91 5.52 L 20.09 5.52 L 20.09 18.48 L 3.91 18.48 Z" />
      <path d="M 3.91 5.52 L 8.17 1.26 L 24.35 1.26 L 20.09 5.52" />
      <path d="M 20.09 5.52 L 24.35 1.26 L 24.35 14.22 L 20.09 18.48" />
      {children}
    </svg>
  );
});

export default VerucoMarble;
