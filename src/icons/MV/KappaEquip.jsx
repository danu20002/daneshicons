import React from 'react';

export const iconData = {
  "id": "KappaEquip",
  "name": "KappaEquip",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 5.42 L 20.81 5.42 L 20.81 18.58 L 3.19 18.58 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.19 5.42 L 7.69 0.93 L 25.30 0.93 L 20.81 5.42"
      }
    ],
    [
      "path",
      {
        "d": "M 20.81 5.42 L 25.30 0.93 L 25.30 14.08 L 20.81 18.58"
      }
    ]
  ]
};

export const KappaEquip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 5.42 L 20.81 5.42 L 20.81 18.58 L 3.19 18.58 Z" />
      <path d="M 3.19 5.42 L 7.69 0.93 L 25.30 0.93 L 20.81 5.42" />
      <path d="M 20.81 5.42 L 25.30 0.93 L 25.30 14.08 L 20.81 18.58" />
      {children}
    </svg>
  );
});

export default KappaEquip;
