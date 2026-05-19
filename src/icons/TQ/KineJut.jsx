import React from 'react';

export const iconData = {
  "id": "KineJut",
  "name": "KineJut",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.92 2.19 L 15.56 9.28 L 22.24 11.74 L 15.69 14.54 L 15.41 21.66 L 10.72 16.29 L 3.87 18.22 L 7.52 12.11 L 3.57 6.19 L 10.51 7.78 Z"
      }
    ]
  ]
};

export const KineJut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.92 2.19 L 15.56 9.28 L 22.24 11.74 L 15.69 14.54 L 15.41 21.66 L 10.72 16.29 L 3.87 18.22 L 7.52 12.11 L 3.57 6.19 L 10.51 7.78 Z" />
      {children}
    </svg>
  );
});

export default KineJut;
