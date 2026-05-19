import React from 'react';

export const iconData = {
  "id": "FidoZenith",
  "name": "FidoZenith",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.03 12.00 Q 15.41 13.11 19.31 17.31"
      }
    ],
    [
      "path",
      {
        "d": "M 19.31 17.31 Q 14.11 14.90 14.79 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 14.79 20.59 Q 12.00 15.58 9.21 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 9.21 20.59 Q 9.89 14.90 4.69 17.31"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 17.31 Q 8.59 13.11 2.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.97 12.00 Q 8.59 10.89 4.69 6.69"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 6.69 Q 9.89 9.10 9.21 3.41"
      }
    ],
    [
      "path",
      {
        "d": "M 9.21 3.41 Q 12.00 8.42 14.79 3.41"
      }
    ],
    [
      "path",
      {
        "d": "M 14.79 3.41 Q 14.11 9.10 19.31 6.69"
      }
    ],
    [
      "path",
      {
        "d": "M 19.31 6.69 Q 15.41 10.89 21.03 12.00"
      }
    ]
  ]
};

export const FidoZenith = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.03 12.00 Q 15.41 13.11 19.31 17.31" />
      <path d="M 19.31 17.31 Q 14.11 14.90 14.79 20.59" />
      <path d="M 14.79 20.59 Q 12.00 15.58 9.21 20.59" />
      <path d="M 9.21 20.59 Q 9.89 14.90 4.69 17.31" />
      <path d="M 4.69 17.31 Q 8.59 13.11 2.97 12.00" />
      <path d="M 2.97 12.00 Q 8.59 10.89 4.69 6.69" />
      <path d="M 4.69 6.69 Q 9.89 9.10 9.21 3.41" />
      <path d="M 9.21 3.41 Q 12.00 8.42 14.79 3.41" />
      <path d="M 14.79 3.41 Q 14.11 9.10 19.31 6.69" />
      <path d="M 19.31 6.69 Q 15.41 10.89 21.03 12.00" />
      {children}
    </svg>
  );
});

export default FidoZenith;
