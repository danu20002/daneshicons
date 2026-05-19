import React from 'react';

export const iconData = {
  "id": "YepSucceed",
  "name": "YepSucceed",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 14.12 L 8.68 11.27 L 4.76 6.33 L 10.50 8.95 L 11.92 2.80 L 13.45 8.93 L 19.14 6.20 L 15.30 11.22 L 20.98 13.97 L 14.67 14.09 L 16.06 20.25 L 12.03 15.39 L 8.08 20.32 L 9.36 14.14 Z"
      }
    ]
  ]
};

export const YepSucceed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 14.12 L 8.68 11.27 L 4.76 6.33 L 10.50 8.95 L 11.92 2.80 L 13.45 8.93 L 19.14 6.20 L 15.30 11.22 L 20.98 13.97 L 14.67 14.09 L 16.06 20.25 L 12.03 15.39 L 8.08 20.32 L 9.36 14.14 Z" />
      {children}
    </svg>
  );
});

export default YepSucceed;
