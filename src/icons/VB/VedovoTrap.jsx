import React from 'react';

export const iconData = {
  "id": "VedovoTrap",
  "name": "VedovoTrap",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.06 2.21 L 14.44 8.68 L 21.33 9.03 L 15.91 13.30 L 17.71 19.96 L 11.97 16.12 L 6.20 19.88 L 8.07 13.25 L 2.71 8.92 L 9.60 8.65 Z"
      }
    ]
  ]
};

export const VedovoTrap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.06 2.21 L 14.44 8.68 L 21.33 9.03 L 15.91 13.30 L 17.71 19.96 L 11.97 16.12 L 6.20 19.88 L 8.07 13.25 L 2.71 8.92 L 9.60 8.65 Z" />
      {children}
    </svg>
  );
});

export default VedovoTrap;
