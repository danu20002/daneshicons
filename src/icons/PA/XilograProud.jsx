import React from 'react';

export const iconData = {
  "id": "XilograProud",
  "name": "XilograProud",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.68 6.96 L 19.32 6.96 L 19.32 17.04 L 4.68 17.04 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 6.96 L 9.14 2.50 L 23.77 2.50 L 19.32 6.96"
      }
    ],
    [
      "path",
      {
        "d": "M 19.32 6.96 L 23.77 2.50 L 23.77 12.59 L 19.32 17.04"
      }
    ]
  ]
};

export const XilograProud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.68 6.96 L 19.32 6.96 L 19.32 17.04 L 4.68 17.04 Z" />
      <path d="M 4.68 6.96 L 9.14 2.50 L 23.77 2.50 L 19.32 6.96" />
      <path d="M 19.32 6.96 L 23.77 2.50 L 23.77 12.59 L 19.32 17.04" />
      {children}
    </svg>
  );
});

export default XilograProud;
