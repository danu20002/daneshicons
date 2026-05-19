import React from 'react';

export const iconData = {
  "id": "ZapponeWake",
  "name": "ZapponeWake",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.94 9.32 L 14.94 9.32"
      }
    ],
    [
      "path",
      {
        "d": "M 14.22 10.17 L 15.46 13.97"
      }
    ],
    [
      "path",
      {
        "d": "M 14.43 13.55 L 11.19 15.90"
      }
    ],
    [
      "path",
      {
        "d": "M 11.28 14.79 L 8.05 12.44"
      }
    ],
    [
      "path",
      {
        "d": "M 9.13 12.18 L 10.36 8.37"
      }
    ]
  ]
};

export const ZapponeWake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.94 9.32 L 14.94 9.32" />
      <path d="M 14.22 10.17 L 15.46 13.97" />
      <path d="M 14.43 13.55 L 11.19 15.90" />
      <path d="M 11.28 14.79 L 8.05 12.44" />
      <path d="M 9.13 12.18 L 10.36 8.37" />
      {children}
    </svg>
  );
});

export default ZapponeWake;
