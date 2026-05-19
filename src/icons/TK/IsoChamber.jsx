import React from 'react';

export const iconData = {
  "id": "IsoChamber",
  "name": "IsoChamber",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.05 6.35 L 19.95 6.35 L 19.95 17.65 L 4.05 17.65 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 6.35 L 7.61 2.80 L 23.50 2.80 L 19.95 6.35"
      }
    ],
    [
      "path",
      {
        "d": "M 19.95 6.35 L 23.50 2.80 L 23.50 14.09 L 19.95 17.65"
      }
    ]
  ]
};

export const IsoChamber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.05 6.35 L 19.95 6.35 L 19.95 17.65 L 4.05 17.65 Z" />
      <path d="M 4.05 6.35 L 7.61 2.80 L 23.50 2.80 L 19.95 6.35" />
      <path d="M 19.95 6.35 L 23.50 2.80 L 23.50 14.09 L 19.95 17.65" />
      {children}
    </svg>
  );
});

export default IsoChamber;
