import React from 'react';

export const iconData = {
  "id": "ZebraGive",
  "name": "ZebraGive",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.01 21.35 L 10.43 15.94 L 2.65 16.01 L 8.06 10.43 L 7.99 2.65 L 13.57 8.06 L 21.35 7.99 L 15.94 13.57 Z"
      }
    ]
  ]
};

export const ZebraGive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.01 21.35 L 10.43 15.94 L 2.65 16.01 L 8.06 10.43 L 7.99 2.65 L 13.57 8.06 L 21.35 7.99 L 15.94 13.57 Z" />
      {children}
    </svg>
  );
});

export default ZebraGive;
