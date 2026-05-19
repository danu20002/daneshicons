import React from 'react';

export const iconData = {
  "id": "SusurroTragedy",
  "name": "SusurroTragedy",
  "category": "ZO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 12.00 a 2.16 2.16 0 1 0 4.32 0 a 2.16 2.16 0 1 0 -4.32 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 12.00 a 6.01 6.01 0 1 0 12.01 0 a 6.01 6.01 0 1 0 -12.01 0"
      }
    ]
  ]
};

export const SusurroTragedy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 12.00 a 2.16 2.16 0 1 0 4.32 0 a 2.16 2.16 0 1 0 -4.32 0" stroke-dasharray="3 1" />
      <path d="M 5.99 12.00 a 6.01 6.01 0 1 0 12.01 0 a 6.01 6.01 0 1 0 -12.01 0" />
      {children}
    </svg>
  );
});

export default SusurroTragedy;
