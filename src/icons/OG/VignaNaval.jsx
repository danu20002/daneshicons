import React from 'react';

export const iconData = {
  "id": "VignaNaval",
  "name": "VignaNaval",
  "category": "OG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.63 12.00 a 8.37 8.37 0 1 0 16.74 0 a 8.37 8.37 0 1 0 -16.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 7.81 a 7.25 2.174842870097732 0 1 0 14.50 0 a 7.25 2.174842870097732 0 1 0 -14.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 12.00 a 8.37 2.5112922329921274 0 1 0 16.74 0 a 8.37 2.5112922329921274 0 1 0 -16.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 16.19 a 7.25 2.174842870097732 0 1 0 14.50 0 a 7.25 2.174842870097732 0 1 0 -14.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 6.08 A 2 2 0 0 0 17.92 17.92"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 6.08 A 2 2 0 0 1 17.92 17.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.63 A 2 2 0 0 0 12.00 20.37"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.63 A 2 2 0 0 1 12.00 20.37"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 6.08 A 2 2 0 0 0 6.08 17.92"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 6.08 A 2 2 0 0 1 6.08 17.92"
      }
    ]
  ]
};

export const VignaNaval = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.63 12.00 a 8.37 8.37 0 1 0 16.74 0 a 8.37 8.37 0 1 0 -16.74 0" />
      <path d="M 4.75 7.81 a 7.25 2.174842870097732 0 1 0 14.50 0 a 7.25 2.174842870097732 0 1 0 -14.50 0" />
      <path d="M 3.63 12.00 a 8.37 2.5112922329921274 0 1 0 16.74 0 a 8.37 2.5112922329921274 0 1 0 -16.74 0" />
      <path d="M 4.75 16.19 a 7.25 2.174842870097732 0 1 0 14.50 0 a 7.25 2.174842870097732 0 1 0 -14.50 0" />
      <path d="M 17.92 6.08 A 2 2 0 0 0 17.92 17.92" />
      <path d="M 17.92 6.08 A 2 2 0 0 1 17.92 17.92" />
      <path d="M 12.00 3.63 A 2 2 0 0 0 12.00 20.37" />
      <path d="M 12.00 3.63 A 2 2 0 0 1 12.00 20.37" />
      <path d="M 6.08 6.08 A 2 2 0 0 0 6.08 17.92" />
      <path d="M 6.08 6.08 A 2 2 0 0 1 6.08 17.92" />
      {children}
    </svg>
  );
});

export default VignaNaval;
