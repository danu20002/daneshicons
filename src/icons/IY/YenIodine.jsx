import React from 'react';

export const iconData = {
  "id": "YenIodine",
  "name": "YenIodine",
  "category": "IY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.88 11.56 L 11.88 11.56"
      }
    ],
    [
      "path",
      {
        "d": "M 12.44 7.88 L 12.44 11.88"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 12.44 L 12.12 12.44"
      }
    ],
    [
      "path",
      {
        "d": "M 11.56 16.12 L 11.56 12.12"
      }
    ]
  ]
};

export const YenIodine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.88 11.56 L 11.88 11.56" />
      <path d="M 12.44 7.88 L 12.44 11.88" />
      <path d="M 16.12 12.44 L 12.12 12.44" />
      <path d="M 11.56 16.12 L 11.56 12.12" />
      {children}
    </svg>
  );
});

export default YenIodine;
