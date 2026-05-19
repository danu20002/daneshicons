import React from 'react';

export const iconData = {
  "id": "SpicoMulti",
  "name": "SpicoMulti",
  "category": "WH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.60 12.00 a 8.40 8.40 0 1 0 16.80 0 a 8.40 8.40 0 1 0 -16.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 9.20 a 7.92 2.376571494557515 0 1 0 15.84 0 a 7.92 2.376571494557515 0 1 0 -15.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 14.80 a 7.92 2.3765714945575147 0 1 0 15.84 0 a 7.92 2.3765714945575147 0 1 0 -15.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.60 A 2 2 0 0 0 12.00 20.40"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.60 A 2 2 0 0 1 12.00 20.40"
      }
    ]
  ]
};

export const SpicoMulti = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.60 12.00 a 8.40 8.40 0 1 0 16.80 0 a 8.40 8.40 0 1 0 -16.80 0" />
      <path d="M 4.08 9.20 a 7.92 2.376571494557515 0 1 0 15.84 0 a 7.92 2.376571494557515 0 1 0 -15.84 0" />
      <path d="M 4.08 14.80 a 7.92 2.3765714945575147 0 1 0 15.84 0 a 7.92 2.3765714945575147 0 1 0 -15.84 0" />
      <path d="M 12.00 3.60 A 2 2 0 0 0 12.00 20.40" />
      <path d="M 12.00 3.60 A 2 2 0 0 1 12.00 20.40" />
      {children}
    </svg>
  );
});

export default SpicoMulti;
