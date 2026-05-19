import React from 'react';

export const iconData = {
  "id": "EtherNext",
  "name": "EtherNext",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.58 12.00 L 19.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.58 L 12.00 19.42"
      }
    ],
    [
      "path",
      {
        "d": "M 2.74 12.00 a 9.26 9.26 0 1 0 18.52 0 a 9.26 9.26 0 1 0 -18.52 0"
      }
    ]
  ]
};

export const EtherNext = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.58 12.00 L 19.42 12.00" />
      <path d="M 12.00 4.58 L 12.00 19.42" />
      <path d="M 2.74 12.00 a 9.26 9.26 0 1 0 18.52 0 a 9.26 9.26 0 1 0 -18.52 0" />
      {children}
    </svg>
  );
});

export default EtherNext;
