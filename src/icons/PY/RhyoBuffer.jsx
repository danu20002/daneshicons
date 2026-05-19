import React from 'react';

export const iconData = {
  "id": "RhyoBuffer",
  "name": "RhyoBuffer",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.93 13.90 L 14.00 15.08 L 10.10 20.93 L 8.92 14.00 L 3.07 10.10 L 10.00 8.92 L 13.90 3.07 L 15.08 10.00 Z"
      }
    ]
  ]
};

export const RhyoBuffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.93 13.90 L 14.00 15.08 L 10.10 20.93 L 8.92 14.00 L 3.07 10.10 L 10.00 8.92 L 13.90 3.07 L 15.08 10.00 Z" />
      {children}
    </svg>
  );
});

export default RhyoBuffer;
