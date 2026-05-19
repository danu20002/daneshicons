import React from 'react';

export const iconData = {
  "id": "VillicoSpruce",
  "name": "VillicoSpruce",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.09 11.16 C 21.84 11.68, 5.97 16.10, 9.40 19.14"
      }
    ],
    [
      "path",
      {
        "d": "M 20.21 16.15 A 6.10 5.81 81 0 0 2.49 7.16"
      }
    ]
  ]
};

export const VillicoSpruce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.09 11.16 C 21.84 11.68, 5.97 16.10, 9.40 19.14" />
      <path d="M 20.21 16.15 A 6.10 5.81 81 0 0 2.49 7.16" />
      {children}
    </svg>
  );
});

export default VillicoSpruce;
