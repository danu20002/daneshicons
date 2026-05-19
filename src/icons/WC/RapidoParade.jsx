import React from 'react';

export const iconData = {
  "id": "RapidoParade",
  "name": "RapidoParade",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.74 7.59 L 12.74 7.59"
      }
    ],
    [
      "path",
      {
        "d": "M 14.19 6.97 L 16.19 10.44"
      }
    ],
    [
      "path",
      {
        "d": "M 17.45 11.38 L 15.45 14.85"
      }
    ],
    [
      "path",
      {
        "d": "M 15.26 16.41 L 11.26 16.41"
      }
    ],
    [
      "path",
      {
        "d": "M 9.81 17.03 L 7.81 13.56"
      }
    ],
    [
      "path",
      {
        "d": "M 6.55 12.62 L 8.55 9.15"
      }
    ]
  ]
};

export const RapidoParade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.74 7.59 L 12.74 7.59" />
      <path d="M 14.19 6.97 L 16.19 10.44" />
      <path d="M 17.45 11.38 L 15.45 14.85" />
      <path d="M 15.26 16.41 L 11.26 16.41" />
      <path d="M 9.81 17.03 L 7.81 13.56" />
      <path d="M 6.55 12.62 L 8.55 9.15" />
      {children}
    </svg>
  );
});

export default RapidoParade;
