import React from 'react';

export const iconData = {
  "id": "HemiClasp",
  "name": "HemiClasp",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.76 9.84 L 14.16 19.76 L 4.24 14.16 L 9.84 4.24 Z"
      }
    ]
  ]
};

export const HemiClasp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.76 9.84 L 14.16 19.76 L 4.24 14.16 L 9.84 4.24 Z" />
      {children}
    </svg>
  );
});

export default HemiClasp;
