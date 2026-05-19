import React from 'react';

export const iconData = {
  "id": "CryoCross",
  "name": "CryoCross",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.70 7.06 L 10.95 7.84 L 16.94 3.70 L 16.16 10.95 L 20.30 16.94 L 13.05 16.16 L 7.06 20.30 L 7.84 13.05 Z"
      }
    ]
  ]
};

export const CryoCross = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.70 7.06 L 10.95 7.84 L 16.94 3.70 L 16.16 10.95 L 20.30 16.94 L 13.05 16.16 L 7.06 20.30 L 7.84 13.05 Z" />
      {children}
    </svg>
  );
});

export default CryoCross;
