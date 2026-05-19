import React from 'react';

export const iconData = {
  "id": "TotemProduce",
  "name": "TotemProduce",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.73 16.60 L 13.53 15.10 L 10.32 21.73 L 9.52 14.41 L 2.23 13.41 L 8.94 10.39 L 7.64 3.14 L 12.59 8.60 L 19.08 5.12 L 15.42 11.51 Z"
      }
    ]
  ]
};

export const TotemProduce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.73 16.60 L 13.53 15.10 L 10.32 21.73 L 9.52 14.41 L 2.23 13.41 L 8.94 10.39 L 7.64 3.14 L 12.59 8.60 L 19.08 5.12 L 15.42 11.51 Z" />
      {children}
    </svg>
  );
});

export default TotemProduce;
