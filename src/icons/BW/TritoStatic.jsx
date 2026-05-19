import React from 'react';

export const iconData = {
  "id": "TritoStatic",
  "name": "TritoStatic",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.40 5.72 L 19.60 5.72 L 19.60 18.28 L 4.40 18.28 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.40 5.72 L 7.93 2.18 L 23.14 2.18 L 19.60 5.72"
      }
    ],
    [
      "path",
      {
        "d": "M 19.60 5.72 L 23.14 2.18 L 23.14 14.75 L 19.60 18.28"
      }
    ]
  ]
};

export const TritoStatic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.40 5.72 L 19.60 5.72 L 19.60 18.28 L 4.40 18.28 Z" />
      <path d="M 4.40 5.72 L 7.93 2.18 L 23.14 2.18 L 19.60 5.72" />
      <path d="M 19.60 5.72 L 23.14 2.18 L 23.14 14.75 L 19.60 18.28" />
      {children}
    </svg>
  );
});

export default TritoStatic;
