import React from 'react';

export const iconData = {
  "id": "VimineWilt",
  "name": "VimineWilt",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.08 10.68 L 12.08 10.68"
      }
    ],
    [
      "path",
      {
        "d": "M 12.04 7.87 L 13.28 11.67"
      }
    ],
    [
      "path",
      {
        "d": "M 15.95 10.76 L 12.71 13.11"
      }
    ],
    [
      "path",
      {
        "d": "M 14.40 15.37 L 11.16 13.02"
      }
    ],
    [
      "path",
      {
        "d": "M 9.54 15.32 L 10.77 11.52"
      }
    ]
  ]
};

export const VimineWilt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.08 10.68 L 12.08 10.68" />
      <path d="M 12.04 7.87 L 13.28 11.67" />
      <path d="M 15.95 10.76 L 12.71 13.11" />
      <path d="M 14.40 15.37 L 11.16 13.02" />
      <path d="M 9.54 15.32 L 10.77 11.52" />
      {children}
    </svg>
  );
});

export default VimineWilt;
