import React from 'react';

export const iconData = {
  "id": "XantoCattle",
  "name": "XantoCattle",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.10 4.52 L 20.19 9.61 L 19.48 16.10 L 14.39 20.19 L 7.90 19.48 L 3.81 14.39 L 4.52 7.90 L 9.61 3.81 Z"
      }
    ]
  ]
};

export const XantoCattle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.10 4.52 L 20.19 9.61 L 19.48 16.10 L 14.39 20.19 L 7.90 19.48 L 3.81 14.39 L 4.52 7.90 L 9.61 3.81 Z" />
      {children}
    </svg>
  );
});

export default XantoCattle;
