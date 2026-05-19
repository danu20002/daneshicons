import React from 'react';

export const iconData = {
  "id": "ZannaWonder",
  "name": "ZannaWonder",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.56 20.74 L 4.65 7.25 L 19.79 8.01 Z"
      }
    ]
  ]
};

export const ZannaWonder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.56 20.74 L 4.65 7.25 L 19.79 8.01 Z" />
      {children}
    </svg>
  );
});

export default ZannaWonder;
