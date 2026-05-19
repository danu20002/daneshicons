import React from 'react';

export const iconData = {
  "id": "PantoStamp",
  "name": "PantoStamp",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.62 6.47 C 6.11 5.06, 19.48 18.92, 20.05 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 9.63 C 14.14 13.62, 18.91 4.14, 18.22 21.33"
      }
    ],
    [
      "path",
      {
        "d": "M 6.13 2.27 C 16.84 4.86, 19.93 14.92, 14.04 21.55"
      }
    ],
    [
      "path",
      {
        "d": "M 6.93 7.99 C 13.96 12.41, 12.71 7.91, 17.06 21.28"
      }
    ]
  ]
};

export const PantoStamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.62 6.47 C 6.11 5.06, 19.48 18.92, 20.05 20.21" />
      <path d="M 6.58 9.63 C 14.14 13.62, 18.91 4.14, 18.22 21.33" />
      <path d="M 6.13 2.27 C 16.84 4.86, 19.93 14.92, 14.04 21.55" />
      <path d="M 6.93 7.99 C 13.96 12.41, 12.71 7.91, 17.06 21.28" />
      {children}
    </svg>
  );
});

export default PantoStamp;
