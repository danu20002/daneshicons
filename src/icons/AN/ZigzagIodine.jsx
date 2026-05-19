import React from 'react';

export const iconData = {
  "id": "ZigzagIodine",
  "name": "ZigzagIodine",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.01 10.79 L 15.62 19.24 L 6.23 17.68 L 4.81 8.27 L 13.33 4.01 Z"
      }
    ]
  ]
};

export const ZigzagIodine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.01 10.79 L 15.62 19.24 L 6.23 17.68 L 4.81 8.27 L 13.33 4.01 Z" />
      {children}
    </svg>
  );
});

export default ZigzagIodine;
