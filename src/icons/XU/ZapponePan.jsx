import React from 'react';

export const iconData = {
  "id": "ZapponePan",
  "name": "ZapponePan",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 5.99 L 19.94 5.99 L 19.94 18.01 L 4.06 18.01 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 5.99 L 7.31 2.74 L 23.19 2.74 L 19.94 5.99"
      }
    ],
    [
      "path",
      {
        "d": "M 19.94 5.99 L 23.19 2.74 L 23.19 14.76 L 19.94 18.01"
      }
    ]
  ]
};

export const ZapponePan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 5.99 L 19.94 5.99 L 19.94 18.01 L 4.06 18.01 Z" />
      <path d="M 4.06 5.99 L 7.31 2.74 L 23.19 2.74 L 19.94 5.99" />
      <path d="M 19.94 5.99 L 23.19 2.74 L 23.19 14.76 L 19.94 18.01" />
      {children}
    </svg>
  );
});

export default ZapponePan;
