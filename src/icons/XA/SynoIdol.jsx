import React from 'react';

export const iconData = {
  "id": "SynoIdol",
  "name": "SynoIdol",
  "category": "XA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.74 12.00 a 9.26 9.26 0 1 0 18.52 0 a 9.26 9.26 0 1 0 -18.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.74 12.00 a 9.26 2.7776345974300054 0 1 0 18.52 0 a 9.26 2.7776345974300054 0 1 0 -18.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.74 A 2 2 0 0 0 12.00 21.26"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.74 A 2 2 0 0 1 12.00 21.26"
      }
    ]
  ]
};

export const SynoIdol = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.74 12.00 a 9.26 9.26 0 1 0 18.52 0 a 9.26 9.26 0 1 0 -18.52 0" />
      <path d="M 2.74 12.00 a 9.26 2.7776345974300054 0 1 0 18.52 0 a 9.26 2.7776345974300054 0 1 0 -18.52 0" />
      <path d="M 12.00 2.74 A 2 2 0 0 0 12.00 21.26" />
      <path d="M 12.00 2.74 A 2 2 0 0 1 12.00 21.26" />
      {children}
    </svg>
  );
});

export default SynoIdol;
