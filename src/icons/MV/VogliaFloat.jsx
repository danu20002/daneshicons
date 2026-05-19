import React from 'react';

export const iconData = {
  "id": "VogliaFloat",
  "name": "VogliaFloat",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 6.21 L 20.73 6.21 L 20.73 17.79 L 3.27 17.79 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 6.21 L 6.45 3.04 L 23.90 3.04 L 20.73 6.21"
      }
    ],
    [
      "path",
      {
        "d": "M 20.73 6.21 L 23.90 3.04 L 23.90 14.61 L 20.73 17.79"
      }
    ]
  ]
};

export const VogliaFloat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 6.21 L 20.73 6.21 L 20.73 17.79 L 3.27 17.79 Z" />
      <path d="M 3.27 6.21 L 6.45 3.04 L 23.90 3.04 L 20.73 6.21" />
      <path d="M 20.73 6.21 L 23.90 3.04 L 23.90 14.61 L 20.73 17.79" />
      {children}
    </svg>
  );
});

export default VogliaFloat;
