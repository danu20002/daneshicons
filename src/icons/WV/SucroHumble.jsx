import React from 'react';

export const iconData = {
  "id": "SucroHumble",
  "name": "SucroHumble",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.32 8.17 L 14.32 8.17"
      }
    ],
    [
      "path",
      {
        "d": "M 14.48 8.63 L 16.48 12.10"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 12.46 L 14.15 15.93"
      }
    ],
    [
      "path",
      {
        "d": "M 13.68 15.83 L 9.68 15.83"
      }
    ],
    [
      "path",
      {
        "d": "M 9.52 15.37 L 7.52 11.90"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 11.54 L 9.85 8.07"
      }
    ]
  ]
};

export const SucroHumble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.32 8.17 L 14.32 8.17" />
      <path d="M 14.48 8.63 L 16.48 12.10" />
      <path d="M 16.15 12.46 L 14.15 15.93" />
      <path d="M 13.68 15.83 L 9.68 15.83" />
      <path d="M 9.52 15.37 L 7.52 11.90" />
      <path d="M 7.85 11.54 L 9.85 8.07" />
      {children}
    </svg>
  );
});

export default SucroHumble;
