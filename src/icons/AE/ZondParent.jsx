import React from 'react';

export const iconData = {
  "id": "ZondParent",
  "name": "ZondParent",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.52 10.81 L 10.52 10.81"
      }
    ],
    [
      "path",
      {
        "d": "M 10.29 6.66 L 12.29 10.12"
      }
    ],
    [
      "path",
      {
        "d": "M 15.77 7.85 L 13.77 11.31"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 13.19 L 13.48 13.19"
      }
    ],
    [
      "path",
      {
        "d": "M 13.71 17.34 L 11.71 13.88"
      }
    ],
    [
      "path",
      {
        "d": "M 8.23 16.15 L 10.23 12.69"
      }
    ]
  ]
};

export const ZondParent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.52 10.81 L 10.52 10.81" />
      <path d="M 10.29 6.66 L 12.29 10.12" />
      <path d="M 15.77 7.85 L 13.77 11.31" />
      <path d="M 17.48 13.19 L 13.48 13.19" />
      <path d="M 13.71 17.34 L 11.71 13.88" />
      <path d="M 8.23 16.15 L 10.23 12.69" />
      {children}
    </svg>
  );
});

export default ZondParent;
