import React from 'react';

export const iconData = {
  "id": "UranoPillar",
  "name": "UranoPillar",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.76 12.00 L 18.24 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.76 L 12.00 18.24"
      }
    ],
    [
      "path",
      {
        "d": "M 2.57 12.00 a 9.43 9.43 0 1 0 18.85 0 a 9.43 9.43 0 1 0 -18.85 0"
      }
    ]
  ]
};

export const UranoPillar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.76 12.00 L 18.24 12.00" />
      <path d="M 12.00 5.76 L 12.00 18.24" />
      <path d="M 2.57 12.00 a 9.43 9.43 0 1 0 18.85 0 a 9.43 9.43 0 1 0 -18.85 0" />
      {children}
    </svg>
  );
});

export default UranoPillar;
