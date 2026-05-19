import React from 'react';

export const iconData = {
  "id": "XantoDivide",
  "name": "XantoDivide",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.81 18.69 L 8.80 4.16 L 20.39 13.15 Z"
      }
    ]
  ]
};

export const XantoDivide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.81 18.69 L 8.80 4.16 L 20.39 13.15 Z" />
      {children}
    </svg>
  );
});

export default XantoDivide;
