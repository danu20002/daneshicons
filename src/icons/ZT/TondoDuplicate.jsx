import React from 'react';

export const iconData = {
  "id": "TondoDuplicate",
  "name": "TondoDuplicate",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.08 9.71 L 15.08 9.71"
      }
    ],
    [
      "path",
      {
        "d": "M 13.52 10.06 L 15.52 13.53"
      }
    ],
    [
      "path",
      {
        "d": "M 14.44 12.35 L 12.44 15.82"
      }
    ],
    [
      "path",
      {
        "d": "M 12.92 14.29 L 8.92 14.29"
      }
    ],
    [
      "path",
      {
        "d": "M 10.48 13.94 L 8.48 10.47"
      }
    ],
    [
      "path",
      {
        "d": "M 9.56 11.65 L 11.56 8.18"
      }
    ]
  ]
};

export const TondoDuplicate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.08 9.71 L 15.08 9.71" />
      <path d="M 13.52 10.06 L 15.52 13.53" />
      <path d="M 14.44 12.35 L 12.44 15.82" />
      <path d="M 12.92 14.29 L 8.92 14.29" />
      <path d="M 10.48 13.94 L 8.48 10.47" />
      <path d="M 9.56 11.65 L 11.56 8.18" />
      {children}
    </svg>
  );
});

export default TondoDuplicate;
