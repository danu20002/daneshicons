import React from 'react';

export const iconData = {
  "id": "EtherSync",
  "name": "EtherSync",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.48 15.15 A 6.02 3.98 138 0 1 20.20 6.77"
      }
    ],
    [
      "path",
      {
        "d": "M 9.39 18.30 A 4.81 3.42 51 0 0 21.79 21.67"
      }
    ],
    [
      "path",
      {
        "d": "M 10.86 14.84 A 2.74 6.49 92 0 0 15.94 6.67"
      }
    ]
  ]
};

export const EtherSync = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.48 15.15 A 6.02 3.98 138 0 1 20.20 6.77" />
      <path d="M 9.39 18.30 A 4.81 3.42 51 0 0 21.79 21.67" />
      <path d="M 10.86 14.84 A 2.74 6.49 92 0 0 15.94 6.67" />
      {children}
    </svg>
  );
});

export default EtherSync;
