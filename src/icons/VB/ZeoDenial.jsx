import React from 'react';

export const iconData = {
  "id": "ZeoDenial",
  "name": "ZeoDenial",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.60 17.98 L 8.80 11.66 L 6.02 4.60 L 12.34 8.80 L 19.40 6.02 L 15.20 12.34 L 17.98 19.40 L 11.66 15.20 Z"
      }
    ]
  ]
};

export const ZeoDenial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.60 17.98 L 8.80 11.66 L 6.02 4.60 L 12.34 8.80 L 19.40 6.02 L 15.20 12.34 L 17.98 19.40 L 11.66 15.20 Z" />
      {children}
    </svg>
  );
});

export default ZeoDenial;
