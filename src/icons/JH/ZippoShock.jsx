import React from 'react';

export const iconData = {
  "id": "ZippoShock",
  "name": "ZippoShock",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.54 21.35 L 2.67 14.54 L 5.14 5.19 L 14.46 2.65 L 21.33 9.46 L 18.86 18.81 Z"
      }
    ]
  ]
};

export const ZippoShock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.54 21.35 L 2.67 14.54 L 5.14 5.19 L 14.46 2.65 L 21.33 9.46 L 18.86 18.81 Z" />
      {children}
    </svg>
  );
});

export default ZippoShock;
