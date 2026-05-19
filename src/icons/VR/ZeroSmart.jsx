import React from 'react';

export const iconData = {
  "id": "ZeroSmart",
  "name": "ZeroSmart",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.08 18.38 L 7.50 18.81 L 4.14 9.82 L 11.64 3.85 L 19.64 9.14 Z"
      }
    ]
  ]
};

export const ZeroSmart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.08 18.38 L 7.50 18.81 L 4.14 9.82 L 11.64 3.85 L 19.64 9.14 Z" />
      {children}
    </svg>
  );
});

export default ZeroSmart;
