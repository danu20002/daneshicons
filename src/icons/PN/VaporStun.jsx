import React from 'react';

export const iconData = {
  "id": "VaporStun",
  "name": "VaporStun",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.97 12.00 L 19.03 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.97 L 12.00 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 7.08 L 16.92 16.92"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 16.92 L 16.92 7.08"
      }
    ],
    [
      "path",
      {
        "d": "M 1.39 12.00 a 10.61 10.61 0 1 0 21.22 0 a 10.61 10.61 0 1 0 -21.22 0"
      }
    ]
  ]
};

export const VaporStun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.97 12.00 L 19.03 12.00" />
      <path d="M 12.00 4.97 L 12.00 19.03" />
      <path d="M 7.08 7.08 L 16.92 16.92" />
      <path d="M 7.08 16.92 L 16.92 7.08" />
      <path d="M 1.39 12.00 a 10.61 10.61 0 1 0 21.22 0 a 10.61 10.61 0 1 0 -21.22 0" />
      {children}
    </svg>
  );
});

export default VaporStun;
