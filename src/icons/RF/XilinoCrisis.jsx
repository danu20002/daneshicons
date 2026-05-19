import React from 'react';

export const iconData = {
  "id": "XilinoCrisis",
  "name": "XilinoCrisis",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.06 6.36 L 20.94 6.36 L 20.94 17.64 L 3.06 17.64 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.06 6.36 L 7.22 2.20 L 25.09 2.20 L 20.94 6.36"
      }
    ],
    [
      "path",
      {
        "d": "M 20.94 6.36 L 25.09 2.20 L 25.09 13.48 L 20.94 17.64"
      }
    ]
  ]
};

export const XilinoCrisis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.06 6.36 L 20.94 6.36 L 20.94 17.64 L 3.06 17.64 Z" />
      <path d="M 3.06 6.36 L 7.22 2.20 L 25.09 2.20 L 20.94 6.36" />
      <path d="M 20.94 6.36 L 25.09 2.20 L 25.09 13.48 L 20.94 17.64" />
      {children}
    </svg>
  );
});

export default XilinoCrisis;
