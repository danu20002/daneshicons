import React from 'react';

export const iconData = {
  "id": "TumuloInstall",
  "name": "TumuloInstall",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.25 9.62 L 15.25 9.62"
      }
    ],
    [
      "path",
      {
        "d": "M 13.69 10.16 L 15.69 13.62"
      }
    ],
    [
      "path",
      {
        "d": "M 14.44 12.54 L 12.44 16.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.75 14.38 L 8.75 14.38"
      }
    ],
    [
      "path",
      {
        "d": "M 10.31 13.84 L 8.31 10.38"
      }
    ],
    [
      "path",
      {
        "d": "M 9.56 11.46 L 11.56 8.00"
      }
    ]
  ]
};

export const TumuloInstall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.25 9.62 L 15.25 9.62" />
      <path d="M 13.69 10.16 L 15.69 13.62" />
      <path d="M 14.44 12.54 L 12.44 16.00" />
      <path d="M 12.75 14.38 L 8.75 14.38" />
      <path d="M 10.31 13.84 L 8.31 10.38" />
      <path d="M 9.56 11.46 L 11.56 8.00" />
      {children}
    </svg>
  );
});

export default TumuloInstall;
