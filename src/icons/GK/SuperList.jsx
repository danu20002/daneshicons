import React from 'react';

export const iconData = {
  "id": "SuperList",
  "name": "SuperList",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.18 3.82 L 21.45 9.88 L 20.18 17.18 L 14.12 21.45 L 6.82 20.18 L 2.55 14.12 L 3.82 6.82 L 9.88 2.55 Z"
      }
    ]
  ]
};

export const SuperList = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.18 3.82 L 21.45 9.88 L 20.18 17.18 L 14.12 21.45 L 6.82 20.18 L 2.55 14.12 L 3.82 6.82 L 9.88 2.55 Z" />
      {children}
    </svg>
  );
});

export default SuperList;
