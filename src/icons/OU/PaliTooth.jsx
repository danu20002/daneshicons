import React from 'react';

export const iconData = {
  "id": "PaliTooth",
  "name": "PaliTooth",
  "category": "OU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.91 10.03 L 12.91 10.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.16 8.34 L 14.16 11.81"
      }
    ],
    [
      "path",
      {
        "d": "M 15.25 10.31 L 13.25 13.77"
      }
    ],
    [
      "path",
      {
        "d": "M 15.09 13.97 L 11.09 13.97"
      }
    ],
    [
      "path",
      {
        "d": "M 11.84 15.66 L 9.84 12.19"
      }
    ],
    [
      "path",
      {
        "d": "M 8.75 13.69 L 10.75 10.23"
      }
    ]
  ]
};

export const PaliTooth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.91 10.03 L 12.91 10.03" />
      <path d="M 12.16 8.34 L 14.16 11.81" />
      <path d="M 15.25 10.31 L 13.25 13.77" />
      <path d="M 15.09 13.97 L 11.09 13.97" />
      <path d="M 11.84 15.66 L 9.84 12.19" />
      <path d="M 8.75 13.69 L 10.75 10.23" />
      {children}
    </svg>
  );
});

export default PaliTooth;
