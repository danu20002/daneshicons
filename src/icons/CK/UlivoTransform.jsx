import React from 'react';

export const iconData = {
  "id": "UlivoTransform",
  "name": "UlivoTransform",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.86 5.51 Q 18.32 2.06 21.64 11.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 13.84 C 19.60 15.82, 19.11 8.19, 5.26 15.96"
      }
    ],
    [
      "path",
      {
        "d": "M 18.19 21.63 C 6.65 14.40, 13.94 11.12, 19.93 4.06"
      }
    ],
    [
      "path",
      {
        "d": "M 21.95 10.26 C 3.35 19.22, 21.94 9.08, 18.39 11.67"
      }
    ],
    [
      "path",
      {
        "d": "M 13.85 20.26 Q 21.38 3.37 15.15 18.14"
      }
    ]
  ]
};

export const UlivoTransform = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.86 5.51 Q 18.32 2.06 21.64 11.95" />
      <path d="M 7.82 13.84 C 19.60 15.82, 19.11 8.19, 5.26 15.96" />
      <path d="M 18.19 21.63 C 6.65 14.40, 13.94 11.12, 19.93 4.06" />
      <path d="M 21.95 10.26 C 3.35 19.22, 21.94 9.08, 18.39 11.67" />
      <path d="M 13.85 20.26 Q 21.38 3.37 15.15 18.14" />
      {children}
    </svg>
  );
});

export default UlivoTransform;
