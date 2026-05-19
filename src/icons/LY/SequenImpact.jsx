import React from 'react';

export const iconData = {
  "id": "SequenImpact",
  "name": "SequenImpact",
  "category": "LY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.69 12.00 L 16.31 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 12.00 L 12.57 9.07"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 12.00 L 12.57 14.93"
      }
    ]
  ]
};

export const SequenImpact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.69 12.00 L 16.31 12.00" />
      <path d="M 7.69 12.00 L 12.57 9.07" />
      <path d="M 7.69 12.00 L 12.57 14.93" />
      {children}
    </svg>
  );
});

export default SequenImpact;
