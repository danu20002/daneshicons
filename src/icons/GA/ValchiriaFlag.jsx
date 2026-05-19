import React from 'react';

export const iconData = {
  "id": "ValchiriaFlag",
  "name": "ValchiriaFlag",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.39 7.48 L 13.39 7.48"
      }
    ],
    [
      "path",
      {
        "d": "M 14.60 7.48 L 16.60 10.94"
      }
    ],
    [
      "path",
      {
        "d": "M 17.22 11.99 L 15.22 15.46"
      }
    ],
    [
      "path",
      {
        "d": "M 14.61 16.52 L 10.61 16.52"
      }
    ],
    [
      "path",
      {
        "d": "M 9.40 16.52 L 7.40 13.06"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 12.01 L 8.78 8.54"
      }
    ]
  ]
};

export const ValchiriaFlag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.39 7.48 L 13.39 7.48" />
      <path d="M 14.60 7.48 L 16.60 10.94" />
      <path d="M 17.22 11.99 L 15.22 15.46" />
      <path d="M 14.61 16.52 L 10.61 16.52" />
      <path d="M 9.40 16.52 L 7.40 13.06" />
      <path d="M 6.78 12.01 L 8.78 8.54" />
      {children}
    </svg>
  );
});

export default ValchiriaFlag;
