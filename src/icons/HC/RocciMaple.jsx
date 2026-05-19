import React from 'react';

export const iconData = {
  "id": "RocciMaple",
  "name": "RocciMaple",
  "category": "HC",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.94 7.35 L 18.88 18.11 L 8.31 20.43 L 2.84 11.10 L 10.03 3.01 Z"
      }
    ]
  ]
};

export const RocciMaple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.94 7.35 L 18.88 18.11 L 8.31 20.43 L 2.84 11.10 L 10.03 3.01 Z" />
      {children}
    </svg>
  );
});

export default RocciMaple;
