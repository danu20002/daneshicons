import React from 'react';

export const iconData = {
  "id": "ZeoPave",
  "name": "ZeoPave",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.82 12.95 L 11.05 3.82 L 20.18 11.05 L 12.95 20.18 Z"
      }
    ]
  ]
};

export const ZeoPave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.82 12.95 L 11.05 3.82 L 20.18 11.05 L 12.95 20.18 Z" />
      {children}
    </svg>
  );
});

export default ZeoPave;
