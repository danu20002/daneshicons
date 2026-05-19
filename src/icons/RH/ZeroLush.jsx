import React from 'react';

export const iconData = {
  "id": "ZeroLush",
  "name": "ZeroLush",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.41 3.19 L 20.43 15.02 L 5.17 17.78 Z"
      }
    ]
  ]
};

export const ZeroLush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.41 3.19 L 20.43 15.02 L 5.17 17.78 Z" />
      {children}
    </svg>
  );
});

export default ZeroLush;
