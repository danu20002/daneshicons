import React from 'react';

export const iconData = {
  "id": "NaturaDetect",
  "name": "NaturaDetect",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.16 22.16 L 10.31 16.05 L 1.84 16.16 L 7.95 10.31 L 7.84 1.84 L 13.69 7.95 L 22.16 7.84 L 16.05 13.69 Z"
      }
    ]
  ]
};

export const NaturaDetect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.16 22.16 L 10.31 16.05 L 1.84 16.16 L 7.95 10.31 L 7.84 1.84 L 13.69 7.95 L 22.16 7.84 L 16.05 13.69 Z" />
      {children}
    </svg>
  );
});

export default NaturaDetect;
