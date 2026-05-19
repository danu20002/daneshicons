import React from 'react';

export const iconData = {
  "id": "IgniPoint",
  "name": "IgniPoint",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.59 19.84 L 8.29 13.40 L 2.01 10.36 L 8.93 9.49 L 8.42 2.53 L 12.64 8.08 L 18.41 4.16 L 15.71 10.60 L 21.99 13.64 L 15.07 14.51 L 15.58 21.47 L 11.36 15.92 Z"
      }
    ]
  ]
};

export const IgniPoint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.59 19.84 L 8.29 13.40 L 2.01 10.36 L 8.93 9.49 L 8.42 2.53 L 12.64 8.08 L 18.41 4.16 L 15.71 10.60 L 21.99 13.64 L 15.07 14.51 L 15.58 21.47 L 11.36 15.92 Z" />
      {children}
    </svg>
  );
});

export default IgniPoint;
