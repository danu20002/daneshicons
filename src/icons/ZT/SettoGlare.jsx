import React from 'react';

export const iconData = {
  "id": "SettoGlare",
  "name": "SettoGlare",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.43 12.00 L 19.57 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.43 L 12.00 19.57"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 6.70 L 17.30 17.30"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 17.30 L 17.30 6.70"
      }
    ],
    [
      "path",
      {
        "d": "M 2.80 12.00 a 9.20 9.20 0 1 0 18.39 0 a 9.20 9.20 0 1 0 -18.39 0"
      }
    ]
  ]
};

export const SettoGlare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.43 12.00 L 19.57 12.00" />
      <path d="M 12.00 4.43 L 12.00 19.57" />
      <path d="M 6.70 6.70 L 17.30 17.30" />
      <path d="M 6.70 17.30 L 17.30 6.70" />
      <path d="M 2.80 12.00 a 9.20 9.20 0 1 0 18.39 0 a 9.20 9.20 0 1 0 -18.39 0" />
      {children}
    </svg>
  );
});

export default SettoGlare;
