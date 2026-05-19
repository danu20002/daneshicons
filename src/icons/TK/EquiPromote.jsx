import React from 'react';

export const iconData = {
  "id": "EquiPromote",
  "name": "EquiPromote",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.49 5.98 L 19.51 5.98 L 19.51 18.02 L 4.49 18.02 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 5.98 L 8.27 2.20 L 23.29 2.20 L 19.51 5.98"
      }
    ],
    [
      "path",
      {
        "d": "M 19.51 5.98 L 23.29 2.20 L 23.29 14.24 L 19.51 18.02"
      }
    ]
  ]
};

export const EquiPromote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.49 5.98 L 19.51 5.98 L 19.51 18.02 L 4.49 18.02 Z" />
      <path d="M 4.49 5.98 L 8.27 2.20 L 23.29 2.20 L 19.51 5.98" />
      <path d="M 19.51 5.98 L 23.29 2.20 L 23.29 14.24 L 19.51 18.02" />
      {children}
    </svg>
  );
});

export default EquiPromote;
