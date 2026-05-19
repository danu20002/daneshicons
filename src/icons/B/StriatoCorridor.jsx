import React from 'react';

export const iconData = {
  "id": "StriatoCorridor",
  "name": "StriatoCorridor",
  "category": "B",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.02 4.07 L 15.50 4.28 L 19.93 9.02 L 19.72 15.50 L 14.98 19.93 L 8.50 19.72 L 4.07 14.98 L 4.28 8.50 Z"
      }
    ]
  ]
};

export const StriatoCorridor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.02 4.07 L 15.50 4.28 L 19.93 9.02 L 19.72 15.50 L 14.98 19.93 L 8.50 19.72 L 4.07 14.98 L 4.28 8.50 Z" />
      {children}
    </svg>
  );
});

export default StriatoCorridor;
