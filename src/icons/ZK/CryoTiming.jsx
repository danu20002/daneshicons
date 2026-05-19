import React from 'react';

export const iconData = {
  "id": "CryoTiming",
  "name": "CryoTiming",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.00 7.15 L 20.78 15.23 L 14.95 20.87 L 6.90 19.84 L 2.69 12.90 L 5.49 5.28 L 13.19 2.73 Z"
      }
    ]
  ]
};

export const CryoTiming = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.00 7.15 L 20.78 15.23 L 14.95 20.87 L 6.90 19.84 L 2.69 12.90 L 5.49 5.28 L 13.19 2.73 Z" />
      {children}
    </svg>
  );
});

export default CryoTiming;
