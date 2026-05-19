import React from 'react';

export const iconData = {
  "id": "RevolFork",
  "name": "RevolFork",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.83 6.39 L 19.17 6.39 L 19.17 17.61 L 4.83 17.61 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 6.39 L 8.25 2.97 L 22.59 2.97 L 19.17 6.39"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 6.39 L 22.59 2.97 L 22.59 14.19 L 19.17 17.61"
      }
    ]
  ]
};

export const RevolFork = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.83 6.39 L 19.17 6.39 L 19.17 17.61 L 4.83 17.61 Z" />
      <path d="M 4.83 6.39 L 8.25 2.97 L 22.59 2.97 L 19.17 6.39" />
      <path d="M 19.17 6.39 L 22.59 2.97 L 22.59 14.19 L 19.17 17.61" />
      {children}
    </svg>
  );
});

export default RevolFork;
