import React from 'react';

export const iconData = {
  "id": "NectoDress",
  "name": "NectoDress",
  "category": "CL",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.17 13.22 L 10.78 21.17 L 2.83 10.78 L 13.22 2.83 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.83 14.57 L 9.43 17.83 L 6.17 9.43 L 14.57 6.17 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.47 13.86 L 10.14 14.47 L 9.53 10.14 L 13.86 9.53 Z"
      }
    ]
  ]
};

export const NectoDress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.17 13.22 L 10.78 21.17 L 2.83 10.78 L 13.22 2.83 Z" />
      <path d="M 17.83 14.57 L 9.43 17.83 L 6.17 9.43 L 14.57 6.17 Z" />
      <path d="M 14.47 13.86 L 10.14 14.47 L 9.53 10.14 L 13.86 9.53 Z" />
      {children}
    </svg>
  );
});

export default NectoDress;
