import React from 'react';

export const iconData = {
  "id": "NavioDeal",
  "name": "NavioDeal",
  "category": "IK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.80 12.00 a 9.20 9.20 0 1 0 18.40 0 a 9.20 9.20 0 1 0 -18.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 7.40 a 7.97 2.390589091148569 0 1 0 15.94 0 a 7.97 2.390589091148569 0 1 0 -15.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.80 12.00 a 9.20 2.760414510592818 0 1 0 18.40 0 a 9.20 2.760414510592818 0 1 0 -18.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 16.60 a 7.97 2.390589091148569 0 1 0 15.94 0 a 7.97 2.390589091148569 0 1 0 -15.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.80 A 2 2 0 0 0 12.00 21.20"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.80 A 2 2 0 0 1 12.00 21.20"
      }
    ]
  ]
};

export const NavioDeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.80 12.00 a 9.20 9.20 0 1 0 18.40 0 a 9.20 9.20 0 1 0 -18.40 0" />
      <path d="M 4.03 7.40 a 7.97 2.390589091148569 0 1 0 15.94 0 a 7.97 2.390589091148569 0 1 0 -15.94 0" />
      <path d="M 2.80 12.00 a 9.20 2.760414510592818 0 1 0 18.40 0 a 9.20 2.760414510592818 0 1 0 -18.40 0" />
      <path d="M 4.03 16.60 a 7.97 2.390589091148569 0 1 0 15.94 0 a 7.97 2.390589091148569 0 1 0 -15.94 0" />
      <path d="M 12.00 2.80 A 2 2 0 0 0 12.00 21.20" />
      <path d="M 12.00 2.80 A 2 2 0 0 1 12.00 21.20" />
      {children}
    </svg>
  );
});

export default NavioDeal;
