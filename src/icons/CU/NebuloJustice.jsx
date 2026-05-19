import React from 'react';

export const iconData = {
  "id": "NebuloJustice",
  "name": "NebuloJustice",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.93 4.56 L 16.51 10.75 L 20.91 15.34 L 14.58 15.91 L 11.57 21.50 L 9.08 15.66 L 2.83 14.53 L 7.62 10.35 L 6.76 4.06 L 12.21 7.32 Z"
      }
    ]
  ]
};

export const NebuloJustice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.93 4.56 L 16.51 10.75 L 20.91 15.34 L 14.58 15.91 L 11.57 21.50 L 9.08 15.66 L 2.83 14.53 L 7.62 10.35 L 6.76 4.06 L 12.21 7.32 Z" />
      {children}
    </svg>
  );
});

export default NebuloJustice;
