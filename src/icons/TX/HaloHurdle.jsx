import React from 'react';

export const iconData = {
  "id": "HaloHurdle",
  "name": "HaloHurdle",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.43 11.10 L 12.43 11.10"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 9.36 L 12.57 12.82"
      }
    ],
    [
      "path",
      {
        "d": "M 13.00 15.55 L 11.00 12.08"
      }
    ]
  ]
};

export const HaloHurdle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.43 11.10 L 12.43 11.10" />
      <path d="M 14.57 9.36 L 12.57 12.82" />
      <path d="M 13.00 15.55 L 11.00 12.08" />
      {children}
    </svg>
  );
});

export default HaloHurdle;
