import React from 'react';

export const iconData = {
  "id": "ZoticoNimble",
  "name": "ZoticoNimble",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.13 7.75 L 15.31 12.17 L 21.64 17.27 L 13.93 14.70 L 13.89 22.83 L 11.10 15.19 L 4.71 20.23 L 8.94 13.28 L 1.03 11.43 L 9.09 10.41 L 5.60 3.07 L 11.43 8.73 L 14.99 1.43 L 14.20 9.52 Z"
      }
    ]
  ]
};

export const ZoticoNimble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.13 7.75 L 15.31 12.17 L 21.64 17.27 L 13.93 14.70 L 13.89 22.83 L 11.10 15.19 L 4.71 20.23 L 8.94 13.28 L 1.03 11.43 L 9.09 10.41 L 5.60 3.07 L 11.43 8.73 L 14.99 1.43 L 14.20 9.52 Z" />
      {children}
    </svg>
  );
});

export default ZoticoNimble;
