import React from 'react';

export const iconData = {
  "id": "VaranoPacket",
  "name": "VaranoPacket",
  "category": "FC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.96 12.00 a 2.04 2.04 0 1 0 4.08 0 a 2.04 2.04 0 1 0 -4.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 12.00 a 4.98 4.98 0 1 0 9.96 0 a 4.98 4.98 0 1 0 -9.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 12.00 a 7.63 7.63 0 1 0 15.27 0 a 7.63 7.63 0 1 0 -15.27 0"
      }
    ]
  ]
};

export const VaranoPacket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.96 12.00 a 2.04 2.04 0 1 0 4.08 0 a 2.04 2.04 0 1 0 -4.08 0" />
      <path d="M 7.02 12.00 a 4.98 4.98 0 1 0 9.96 0 a 4.98 4.98 0 1 0 -9.96 0" />
      <path d="M 4.37 12.00 a 7.63 7.63 0 1 0 15.27 0 a 7.63 7.63 0 1 0 -15.27 0" />
      {children}
    </svg>
  );
});

export default VaranoPacket;
