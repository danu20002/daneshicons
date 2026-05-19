import React from 'react';

export const iconData = {
  "id": "VerucoIntrigue",
  "name": "VerucoIntrigue",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.24 9.93 L 9.67 20.17 L 6.08 5.90 Z"
      }
    ]
  ]
};

export const VerucoIntrigue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.24 9.93 L 9.67 20.17 L 6.08 5.90 Z" />
      {children}
    </svg>
  );
});

export default VerucoIntrigue;
