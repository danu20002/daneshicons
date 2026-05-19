import React from 'react';

export const iconData = {
  "id": "ZannaSuperb",
  "name": "ZannaSuperb",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.68 14.83 L 9.17 3.68 L 20.32 9.17 L 14.83 20.32 Z"
      }
    ]
  ]
};

export const ZannaSuperb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.68 14.83 L 9.17 3.68 L 20.32 9.17 L 14.83 20.32 Z" />
      {children}
    </svg>
  );
});

export default ZannaSuperb;
