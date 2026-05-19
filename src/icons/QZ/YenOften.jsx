import React from 'react';

export const iconData = {
  "id": "YenOften",
  "name": "YenOften",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.41 9.56 L 15.41 9.56"
      }
    ],
    [
      "path",
      {
        "d": "M 13.82 10.27 L 15.82 13.73"
      }
    ],
    [
      "path",
      {
        "d": "M 14.41 12.71 L 12.41 16.17"
      }
    ],
    [
      "path",
      {
        "d": "M 12.59 14.44 L 8.59 14.44"
      }
    ],
    [
      "path",
      {
        "d": "M 10.18 13.73 L 8.18 10.27"
      }
    ],
    [
      "path",
      {
        "d": "M 9.59 11.29 L 11.59 7.83"
      }
    ]
  ]
};

export const YenOften = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.41 9.56 L 15.41 9.56" />
      <path d="M 13.82 10.27 L 15.82 13.73" />
      <path d="M 14.41 12.71 L 12.41 16.17" />
      <path d="M 12.59 14.44 L 8.59 14.44" />
      <path d="M 10.18 13.73 L 8.18 10.27" />
      <path d="M 9.59 11.29 L 11.59 7.83" />
      {children}
    </svg>
  );
});

export default YenOften;
