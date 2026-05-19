import React from 'react';

export const iconData = {
  "id": "RegulaInherit",
  "name": "RegulaInherit",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.60 18.74 L 4.12 13.65 L 5.26 7.60 L 10.35 4.12 L 16.40 5.26 L 19.88 10.35 L 18.74 16.40 L 13.65 19.88 Z"
      }
    ]
  ]
};

export const RegulaInherit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.60 18.74 L 4.12 13.65 L 5.26 7.60 L 10.35 4.12 L 16.40 5.26 L 19.88 10.35 L 18.74 16.40 L 13.65 19.88 Z" />
      {children}
    </svg>
  );
});

export default RegulaInherit;
