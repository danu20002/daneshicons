import React from 'react';

export const iconData = {
  "id": "ZannaWrath",
  "name": "ZannaWrath",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.96 5.84 L 20.04 5.84 L 20.04 18.16 L 3.96 18.16 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 5.84 L 7.78 2.01 L 23.87 2.01 L 20.04 5.84"
      }
    ],
    [
      "path",
      {
        "d": "M 20.04 5.84 L 23.87 2.01 L 23.87 14.34 L 20.04 18.16"
      }
    ]
  ]
};

export const ZannaWrath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.96 5.84 L 20.04 5.84 L 20.04 18.16 L 3.96 18.16 Z" />
      <path d="M 3.96 5.84 L 7.78 2.01 L 23.87 2.01 L 20.04 5.84" />
      <path d="M 20.04 5.84 L 23.87 2.01 L 23.87 14.34 L 20.04 18.16" />
      {children}
    </svg>
  );
});

export default ZannaWrath;
