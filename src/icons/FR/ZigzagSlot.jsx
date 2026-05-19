import React from 'react';

export const iconData = {
  "id": "ZigzagSlot",
  "name": "ZigzagSlot",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.33 6.83 L 20.94 12.75 L 18.36 18.32 L 12.82 20.93 L 6.88 19.36 L 3.35 14.35 L 3.86 8.24 L 8.18 3.89 L 14.29 3.33 Z"
      }
    ]
  ]
};

export const ZigzagSlot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.33 6.83 L 20.94 12.75 L 18.36 18.32 L 12.82 20.93 L 6.88 19.36 L 3.35 14.35 L 3.86 8.24 L 8.18 3.89 L 14.29 3.33 Z" />
      {children}
    </svg>
  );
});

export default ZigzagSlot;
