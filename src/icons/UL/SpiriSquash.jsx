import React from 'react';

export const iconData = {
  "id": "SpiriSquash",
  "name": "SpiriSquash",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.93 12.00 a 2.07 2.07 0 1 0 4.15 0 a 2.07 2.07 0 1 0 -4.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 12.00 a 4.93 4.93 0 1 0 9.87 0 a 4.93 4.93 0 1 0 -9.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 12.00 a 7.33 7.33 0 1 0 14.67 0 a 7.33 7.33 0 1 0 -14.67 0"
      }
    ]
  ]
};

export const SpiriSquash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.93 12.00 a 2.07 2.07 0 1 0 4.15 0 a 2.07 2.07 0 1 0 -4.15 0" />
      <path d="M 7.07 12.00 a 4.93 4.93 0 1 0 9.87 0 a 4.93 4.93 0 1 0 -9.87 0" />
      <path d="M 4.67 12.00 a 7.33 7.33 0 1 0 14.67 0 a 7.33 7.33 0 1 0 -14.67 0" />
      {children}
    </svg>
  );
});

export default SpiriSquash;
