import React from 'react';

export const iconData = {
  "id": "ZoticoNeed",
  "name": "ZoticoNeed",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.15 4.29 L 15.43 4.53 L 19.71 9.15 L 19.47 15.43 L 14.85 19.71 L 8.57 19.47 L 4.29 14.85 L 4.53 8.57 Z"
      }
    ]
  ]
};

export const ZoticoNeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.15 4.29 L 15.43 4.53 L 19.71 9.15 L 19.47 15.43 L 14.85 19.71 L 8.57 19.47 L 4.29 14.85 L 4.53 8.57 Z" />
      {children}
    </svg>
  );
});

export default ZoticoNeed;
