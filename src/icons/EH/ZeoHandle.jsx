import React from 'react';

export const iconData = {
  "id": "ZeoHandle",
  "name": "ZeoHandle",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.28 19.24 L 8.88 12.87 L 3.35 8.80 L 10.21 9.31 L 12.37 2.78 L 14.01 9.46 L 20.88 9.51 L 15.04 13.12 L 17.12 19.68 L 11.87 15.23 Z"
      }
    ]
  ]
};

export const ZeoHandle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.28 19.24 L 8.88 12.87 L 3.35 8.80 L 10.21 9.31 L 12.37 2.78 L 14.01 9.46 L 20.88 9.51 L 15.04 13.12 L 17.12 19.68 L 11.87 15.23 Z" />
      {children}
    </svg>
  );
});

export default ZeoHandle;
