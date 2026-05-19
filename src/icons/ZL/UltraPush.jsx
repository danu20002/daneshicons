import React from 'react';

export const iconData = {
  "id": "UltraPush",
  "name": "UltraPush",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.94 21.16 L 12.06 16.72 L 8.31 21.27 L 8.71 15.39 L 2.84 15.94 L 7.28 12.06 L 2.73 8.31 L 8.61 8.71 L 8.06 2.84 L 11.94 7.28 L 15.69 2.73 L 15.29 8.61 L 21.16 8.06 L 16.72 11.94 L 21.27 15.69 L 15.39 15.29 Z"
      }
    ]
  ]
};

export const UltraPush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.94 21.16 L 12.06 16.72 L 8.31 21.27 L 8.71 15.39 L 2.84 15.94 L 7.28 12.06 L 2.73 8.31 L 8.61 8.71 L 8.06 2.84 L 11.94 7.28 L 15.69 2.73 L 15.29 8.61 L 21.16 8.06 L 16.72 11.94 L 21.27 15.69 L 15.39 15.29 Z" />
      {children}
    </svg>
  );
});

export default UltraPush;
