import React from 'react';

export const iconData = {
  "id": "TiliLab",
  "name": "TiliLab",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.42 10.16 L 11.42 10.16"
      }
    ],
    [
      "path",
      {
        "d": "M 11.30 7.12 L 13.30 10.58"
      }
    ],
    [
      "path",
      {
        "d": "M 15.88 8.95 L 13.88 12.42"
      }
    ],
    [
      "path",
      {
        "d": "M 16.58 13.84 L 12.58 13.84"
      }
    ],
    [
      "path",
      {
        "d": "M 12.70 16.88 L 10.70 13.42"
      }
    ],
    [
      "path",
      {
        "d": "M 8.12 15.05 L 10.12 11.58"
      }
    ]
  ]
};

export const TiliLab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.42 10.16 L 11.42 10.16" />
      <path d="M 11.30 7.12 L 13.30 10.58" />
      <path d="M 15.88 8.95 L 13.88 12.42" />
      <path d="M 16.58 13.84 L 12.58 13.84" />
      <path d="M 12.70 16.88 L 10.70 13.42" />
      <path d="M 8.12 15.05 L 10.12 11.58" />
      {children}
    </svg>
  );
});

export default TiliLab;
