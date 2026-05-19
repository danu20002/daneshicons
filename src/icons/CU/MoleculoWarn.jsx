import React from 'react';

export const iconData = {
  "id": "MoleculoWarn",
  "name": "MoleculoWarn",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.21 16.89 L 13.22 14.85 L 9.88 21.32 L 9.67 14.04 L 2.48 12.87 L 9.34 10.41 L 8.23 3.22 L 12.69 8.98 L 19.19 5.70 L 15.08 11.72 Z"
      }
    ]
  ]
};

export const MoleculoWarn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.21 16.89 L 13.22 14.85 L 9.88 21.32 L 9.67 14.04 L 2.48 12.87 L 9.34 10.41 L 8.23 3.22 L 12.69 8.98 L 19.19 5.70 L 15.08 11.72 Z" />
      {children}
    </svg>
  );
});

export default MoleculoWarn;
