import React from 'react';

export const iconData = {
  "id": "MoleculoMaster",
  "name": "MoleculoMaster",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 6.81 L 20.43 6.81 L 20.43 17.19 L 3.57 17.19 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 6.81 L 8.24 2.14 L 25.10 2.14 L 20.43 6.81"
      }
    ],
    [
      "path",
      {
        "d": "M 20.43 6.81 L 25.10 2.14 L 25.10 12.52 L 20.43 17.19"
      }
    ]
  ]
};

export const MoleculoMaster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 6.81 L 20.43 6.81 L 20.43 17.19 L 3.57 17.19 Z" />
      <path d="M 3.57 6.81 L 8.24 2.14 L 25.10 2.14 L 20.43 6.81" />
      <path d="M 20.43 6.81 L 25.10 2.14 L 25.10 12.52 L 20.43 17.19" />
      {children}
    </svg>
  );
});

export default MoleculoMaster;
