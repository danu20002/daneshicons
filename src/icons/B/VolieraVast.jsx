import React from 'react';

export const iconData = {
  "id": "VolieraVast",
  "name": "VolieraVast",
  "category": "B",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 8.92 L 8.51 4.15 L 15.08 3.98 L 19.85 8.51 L 20.02 15.08 L 15.49 19.85 L 8.92 20.02 L 4.15 15.49 Z"
      }
    ]
  ]
};

export const VolieraVast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 8.92 L 8.51 4.15 L 15.08 3.98 L 19.85 8.51 L 20.02 15.08 L 15.49 19.85 L 8.92 20.02 L 4.15 15.49 Z" />
      {children}
    </svg>
  );
});

export default VolieraVast;
