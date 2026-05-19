import React from 'react';

export const iconData = {
  "id": "SynchroEditor",
  "name": "SynchroEditor",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.15 12.00 a 7.85 7.85 0 1 0 15.70 0 a 7.85 7.85 0 1 0 -15.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.48 12.00 a 5.52 5.52 0 1 1 11.05 0 a 5.52 5.52 0 1 1 -11.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.35 12.00 L 21.35 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.58 17.75 L 17.83 19.31"
      }
    ],
    [
      "path",
      {
        "d": "M 10.36 19.17 L 9.92 21.12"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 15.19 L 3.58 16.06"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 8.81 L 3.58 7.94"
      }
    ],
    [
      "path",
      {
        "d": "M 10.36 4.83 L 9.92 2.88"
      }
    ],
    [
      "path",
      {
        "d": "M 16.58 6.25 L 17.83 4.69"
      }
    ]
  ]
};

export const SynchroEditor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.15 12.00 a 7.85 7.85 0 1 0 15.70 0 a 7.85 7.85 0 1 0 -15.70 0" />
      <path d="M 6.48 12.00 a 5.52 5.52 0 1 1 11.05 0 a 5.52 5.52 0 1 1 -11.05 0" />
      <path d="M 19.35 12.00 L 21.35 12.00" />
      <path d="M 16.58 17.75 L 17.83 19.31" />
      <path d="M 10.36 19.17 L 9.92 21.12" />
      <path d="M 5.38 15.19 L 3.58 16.06" />
      <path d="M 5.38 8.81 L 3.58 7.94" />
      <path d="M 10.36 4.83 L 9.92 2.88" />
      <path d="M 16.58 6.25 L 17.83 4.69" />
      {children}
    </svg>
  );
});

export default SynchroEditor;
