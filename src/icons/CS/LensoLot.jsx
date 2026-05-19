import React from 'react';

export const iconData = {
  "id": "LensoLot",
  "name": "LensoLot",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 15.91 L 8.09 4.16 L 19.84 8.09 L 15.91 19.84 Z"
      }
    ]
  ]
};

export const LensoLot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 15.91 L 8.09 4.16 L 19.84 8.09 L 15.91 19.84 Z" />
      {children}
    </svg>
  );
});

export default LensoLot;
