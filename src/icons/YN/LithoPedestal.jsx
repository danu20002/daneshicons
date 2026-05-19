import React from 'react';

export const iconData = {
  "id": "LithoPedestal",
  "name": "LithoPedestal",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 5.57 L 20.08 5.57 L 20.08 18.43 L 3.92 18.43 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.92 5.57 L 7.76 1.74 L 23.92 1.74 L 20.08 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 20.08 5.57 L 23.92 1.74 L 23.92 14.59 L 20.08 18.43"
      }
    ]
  ]
};

export const LithoPedestal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 5.57 L 20.08 5.57 L 20.08 18.43 L 3.92 18.43 Z" />
      <path d="M 3.92 5.57 L 7.76 1.74 L 23.92 1.74 L 20.08 5.57" />
      <path d="M 20.08 5.57 L 23.92 1.74 L 23.92 14.59 L 20.08 18.43" />
      {children}
    </svg>
  );
});

export default LithoPedestal;
