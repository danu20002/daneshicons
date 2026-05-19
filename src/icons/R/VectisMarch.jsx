import React from 'react';

export const iconData = {
  "id": "VectisMarch",
  "name": "VectisMarch",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.96 5.09 L 19.04 5.09 L 19.04 18.91 L 4.96 18.91 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 5.09 L 9.14 0.91 L 23.22 0.91 L 19.04 5.09"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 5.09 L 23.22 0.91 L 23.22 14.73 L 19.04 18.91"
      }
    ]
  ]
};

export const VectisMarch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.96 5.09 L 19.04 5.09 L 19.04 18.91 L 4.96 18.91 Z" />
      <path d="M 4.96 5.09 L 9.14 0.91 L 23.22 0.91 L 19.04 5.09" />
      <path d="M 19.04 5.09 L 23.22 0.91 L 23.22 14.73 L 19.04 18.91" />
      {children}
    </svg>
  );
});

export default VectisMarch;
