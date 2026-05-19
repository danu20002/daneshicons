import React from 'react';

export const iconData = {
  "id": "MarmoChamber",
  "name": "MarmoChamber",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.99 6.94 L 20.01 6.94 L 20.01 17.06 L 3.99 17.06 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 6.94 L 8.94 1.99 L 24.96 1.99 L 20.01 6.94"
      }
    ],
    [
      "path",
      {
        "d": "M 20.01 6.94 L 24.96 1.99 L 24.96 12.11 L 20.01 17.06"
      }
    ]
  ]
};

export const MarmoChamber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.99 6.94 L 20.01 6.94 L 20.01 17.06 L 3.99 17.06 Z" />
      <path d="M 3.99 6.94 L 8.94 1.99 L 24.96 1.99 L 20.01 6.94" />
      <path d="M 20.01 6.94 L 24.96 1.99 L 24.96 12.11 L 20.01 17.06" />
      {children}
    </svg>
  );
});

export default MarmoChamber;
