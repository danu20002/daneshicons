import React from 'react';

export const iconData = {
  "id": "LensoMud",
  "name": "LensoMud",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.26 12.00 L 19.74 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.26 L 12.00 19.74"
      }
    ],
    [
      "path",
      {
        "d": "M 2.74 12.00 a 9.26 9.26 0 1 0 18.53 0 a 9.26 9.26 0 1 0 -18.53 0"
      }
    ]
  ]
};

export const LensoMud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.26 12.00 L 19.74 12.00" />
      <path d="M 12.00 4.26 L 12.00 19.74" />
      <path d="M 2.74 12.00 a 9.26 9.26 0 1 0 18.53 0 a 9.26 9.26 0 1 0 -18.53 0" />
      {children}
    </svg>
  );
});

export default LensoMud;
