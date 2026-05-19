import React from 'react';

export const iconData = {
  "id": "TipoVigorous",
  "name": "TipoVigorous",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.03 12.00 Q 14.96 12.79 19.82 16.52"
      }
    ],
    [
      "path",
      {
        "d": "M 19.82 16.52 Q 14.17 14.17 16.52 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 16.52 19.82 Q 12.79 14.96 12.00 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.03 Q 11.21 14.96 7.48 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 19.82 Q 9.83 14.17 4.18 16.52"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 16.52 Q 9.04 12.79 2.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.97 12.00 Q 9.04 11.21 4.18 7.48"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 7.48 Q 9.83 9.83 7.48 4.18"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 4.18 Q 11.21 9.04 12.00 2.97"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.97 Q 12.79 9.04 16.52 4.18"
      }
    ],
    [
      "path",
      {
        "d": "M 16.52 4.18 Q 14.17 9.83 19.82 7.48"
      }
    ],
    [
      "path",
      {
        "d": "M 19.82 7.48 Q 14.96 11.21 21.03 12.00"
      }
    ]
  ]
};

export const TipoVigorous = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.03 12.00 Q 14.96 12.79 19.82 16.52" />
      <path d="M 19.82 16.52 Q 14.17 14.17 16.52 19.82" />
      <path d="M 16.52 19.82 Q 12.79 14.96 12.00 21.03" />
      <path d="M 12.00 21.03 Q 11.21 14.96 7.48 19.82" />
      <path d="M 7.48 19.82 Q 9.83 14.17 4.18 16.52" />
      <path d="M 4.18 16.52 Q 9.04 12.79 2.97 12.00" />
      <path d="M 2.97 12.00 Q 9.04 11.21 4.18 7.48" />
      <path d="M 4.18 7.48 Q 9.83 9.83 7.48 4.18" />
      <path d="M 7.48 4.18 Q 11.21 9.04 12.00 2.97" />
      <path d="M 12.00 2.97 Q 12.79 9.04 16.52 4.18" />
      <path d="M 16.52 4.18 Q 14.17 9.83 19.82 7.48" />
      <path d="M 19.82 7.48 Q 14.96 11.21 21.03 12.00" />
      {children}
    </svg>
  );
});

export default TipoVigorous;
