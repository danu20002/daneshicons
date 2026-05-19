import React from 'react';

export const iconData = {
  "id": "SarcoGenius",
  "name": "SarcoGenius",
  "category": "GY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.95 12.00 a 9.05 9.05 0 1 0 18.10 0 a 9.05 9.05 0 1 0 -18.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.95 12.00 a 9.05 2.7149319963064045 0 1 0 18.10 0 a 9.05 2.7149319963064045 0 1 0 -18.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.95 A 2 2 0 0 0 12.00 21.05"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.95 A 2 2 0 0 1 12.00 21.05"
      }
    ]
  ]
};

export const SarcoGenius = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.95 12.00 a 9.05 9.05 0 1 0 18.10 0 a 9.05 9.05 0 1 0 -18.10 0" />
      <path d="M 2.95 12.00 a 9.05 2.7149319963064045 0 1 0 18.10 0 a 9.05 2.7149319963064045 0 1 0 -18.10 0" />
      <path d="M 12.00 2.95 A 2 2 0 0 0 12.00 21.05" />
      <path d="M 12.00 2.95 A 2 2 0 0 1 12.00 21.05" />
      {children}
    </svg>
  );
});

export default SarcoGenius;
