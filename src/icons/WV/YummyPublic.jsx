import React from 'react';

export const iconData = {
  "id": "YummyPublic",
  "name": "YummyPublic",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.04 9.29 L 15.04 9.29"
      }
    ],
    [
      "path",
      {
        "d": "M 13.87 9.81 L 15.87 13.27"
      }
    ],
    [
      "path",
      {
        "d": "M 14.83 12.52 L 12.83 15.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.96 14.71 L 8.96 14.71"
      }
    ],
    [
      "path",
      {
        "d": "M 10.13 14.19 L 8.13 10.73"
      }
    ],
    [
      "path",
      {
        "d": "M 9.17 11.48 L 11.17 8.02"
      }
    ]
  ]
};

export const YummyPublic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.04 9.29 L 15.04 9.29" />
      <path d="M 13.87 9.81 L 15.87 13.27" />
      <path d="M 14.83 12.52 L 12.83 15.98" />
      <path d="M 12.96 14.71 L 8.96 14.71" />
      <path d="M 10.13 14.19 L 8.13 10.73" />
      <path d="M 9.17 11.48 L 11.17 8.02" />
      {children}
    </svg>
  );
});

export default YummyPublic;
