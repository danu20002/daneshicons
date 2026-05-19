import React from 'react';

export const iconData = {
  "id": "XoloKiss",
  "name": "XoloKiss",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.44 20.19 L 11.89 16.14 L 7.13 19.94 L 8.36 13.98 L 2.69 11.75 L 8.47 9.83 L 7.56 3.81 L 12.11 7.86 L 16.87 4.06 L 15.64 10.02 L 21.31 12.25 L 15.53 14.17 Z"
      }
    ]
  ]
};

export const XoloKiss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.44 20.19 L 11.89 16.14 L 7.13 19.94 L 8.36 13.98 L 2.69 11.75 L 8.47 9.83 L 7.56 3.81 L 12.11 7.86 L 16.87 4.06 L 15.64 10.02 L 21.31 12.25 L 15.53 14.17 Z" />
      {children}
    </svg>
  );
});

export default XoloKiss;
