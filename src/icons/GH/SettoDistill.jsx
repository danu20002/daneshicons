import React from 'react';

export const iconData = {
  "id": "SettoDistill",
  "name": "SettoDistill",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.35 12.00 a 7.65 7.65 0 1 0 15.30 0 a 7.65 7.65 0 1 0 -15.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 12.00 a 5.22 5.22 0 1 1 10.45 0 a 5.22 5.22 0 1 1 -10.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.15 12.00 L 21.15 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.46 17.59 L 17.71 19.16"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 18.97 L 9.96 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 15.10 L 3.75 15.97"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 8.90 L 3.75 8.03"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 5.03 L 9.96 3.08"
      }
    ],
    [
      "path",
      {
        "d": "M 16.46 6.41 L 17.71 4.84"
      }
    ]
  ]
};

export const SettoDistill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.35 12.00 a 7.65 7.65 0 1 0 15.30 0 a 7.65 7.65 0 1 0 -15.30 0" />
      <path d="M 6.78 12.00 a 5.22 5.22 0 1 1 10.45 0 a 5.22 5.22 0 1 1 -10.45 0" />
      <path d="M 19.15 12.00 L 21.15 12.00" />
      <path d="M 16.46 17.59 L 17.71 19.16" />
      <path d="M 10.41 18.97 L 9.96 20.92" />
      <path d="M 5.56 15.10 L 3.75 15.97" />
      <path d="M 5.56 8.90 L 3.75 8.03" />
      <path d="M 10.41 5.03 L 9.96 3.08" />
      <path d="M 16.46 6.41 L 17.71 4.84" />
      {children}
    </svg>
  );
});

export default SettoDistill;
