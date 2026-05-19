import React from 'react';

export const iconData = {
  "id": "HomoLobby",
  "name": "HomoLobby",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.92 12.00 Q 14.92 12.78 19.73 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 19.73 16.46 Q 14.14 14.14 16.46 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 16.46 19.73 Q 12.78 14.92 12.00 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.92 Q 11.22 14.92 7.54 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 19.73 Q 9.86 14.14 4.27 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 16.46 Q 9.08 12.78 3.08 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.08 12.00 Q 9.08 11.22 4.27 7.54"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 7.54 Q 9.86 9.86 7.54 4.27"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 4.27 Q 11.22 9.08 12.00 3.08"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.08 Q 12.78 9.08 16.46 4.27"
      }
    ],
    [
      "path",
      {
        "d": "M 16.46 4.27 Q 14.14 9.86 19.73 7.54"
      }
    ],
    [
      "path",
      {
        "d": "M 19.73 7.54 Q 14.92 11.22 20.92 12.00"
      }
    ]
  ]
};

export const HomoLobby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.92 12.00 Q 14.92 12.78 19.73 16.46" />
      <path d="M 19.73 16.46 Q 14.14 14.14 16.46 19.73" />
      <path d="M 16.46 19.73 Q 12.78 14.92 12.00 20.92" />
      <path d="M 12.00 20.92 Q 11.22 14.92 7.54 19.73" />
      <path d="M 7.54 19.73 Q 9.86 14.14 4.27 16.46" />
      <path d="M 4.27 16.46 Q 9.08 12.78 3.08 12.00" />
      <path d="M 3.08 12.00 Q 9.08 11.22 4.27 7.54" />
      <path d="M 4.27 7.54 Q 9.86 9.86 7.54 4.27" />
      <path d="M 7.54 4.27 Q 11.22 9.08 12.00 3.08" />
      <path d="M 12.00 3.08 Q 12.78 9.08 16.46 4.27" />
      <path d="M 16.46 4.27 Q 14.14 9.86 19.73 7.54" />
      <path d="M 19.73 7.54 Q 14.92 11.22 20.92 12.00" />
      {children}
    </svg>
  );
});

export default HomoLobby;
