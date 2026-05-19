import React from 'react';

export const iconData = {
  "id": "YenPath",
  "name": "YenPath",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.02 17.75 L 13.50 17.73 L 8.70 20.45 L 7.01 15.20 L 2.95 11.47 L 7.42 8.25 L 9.70 3.23 L 14.15 6.48 L 19.63 7.10 L 17.92 12.34 Z"
      }
    ]
  ]
};

export const YenPath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.02 17.75 L 13.50 17.73 L 8.70 20.45 L 7.01 15.20 L 2.95 11.47 L 7.42 8.25 L 9.70 3.23 L 14.15 6.48 L 19.63 7.10 L 17.92 12.34 Z" />
      {children}
    </svg>
  );
});

export default YenPath;
