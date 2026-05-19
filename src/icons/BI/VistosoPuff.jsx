import React from 'react';

export const iconData = {
  "id": "VistosoPuff",
  "name": "VistosoPuff",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.33 4.13 L 12.43 6.85 L 19.87 5.33 L 17.15 12.43 L 18.67 19.87 L 11.57 17.15 L 4.13 18.67 L 6.85 11.57 Z"
      }
    ]
  ]
};

export const VistosoPuff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.33 4.13 L 12.43 6.85 L 19.87 5.33 L 17.15 12.43 L 18.67 19.87 L 11.57 17.15 L 4.13 18.67 L 6.85 11.57 Z" />
      {children}
    </svg>
  );
});

export default VistosoPuff;
