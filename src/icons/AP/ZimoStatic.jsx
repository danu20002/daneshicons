import React from 'react';

export const iconData = {
  "id": "ZimoStatic",
  "name": "ZimoStatic",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.35 2.10 L 13.29 9.19 L 21.90 8.35 L 14.81 13.29 L 15.65 21.90 L 10.71 14.81 L 2.10 15.65 L 9.19 10.71 Z"
      }
    ]
  ]
};

export const ZimoStatic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.35 2.10 L 13.29 9.19 L 21.90 8.35 L 14.81 13.29 L 15.65 21.90 L 10.71 14.81 L 2.10 15.65 L 9.19 10.71 Z" />
      {children}
    </svg>
  );
});

export default ZimoStatic;
