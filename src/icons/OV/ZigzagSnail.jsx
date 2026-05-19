import React from 'react';

export const iconData = {
  "id": "ZigzagSnail",
  "name": "ZigzagSnail",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.35 2.60 L 16.65 7.63"
      }
    ],
    [
      "path",
      {
        "d": "M 10.76 8.72 L 21.36 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 21.52 Q 4.93 8.00 17.55 13.51"
      }
    ],
    [
      "path",
      {
        "d": "M 20.04 4.85 L 19.07 2.23 L 13.69 8.62 L 15.55 11.44 L 8.32 12.75 L 20.93 21.23"
      }
    ],
    [
      "path",
      {
        "d": "M 3.02 14.62 C 2.19 5.03, 18.48 21.10, 4.76 21.33"
      }
    ],
    [
      "path",
      {
        "d": "M 7.14 21.38 C 16.78 4.80, 9.34 9.84, 12.74 4.58"
      }
    ]
  ]
};

export const ZigzagSnail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.35 2.60 L 16.65 7.63" />
      <path d="M 10.76 8.72 L 21.36 16.82" />
      <path d="M 17.90 21.52 Q 4.93 8.00 17.55 13.51" />
      <path d="M 20.04 4.85 L 19.07 2.23 L 13.69 8.62 L 15.55 11.44 L 8.32 12.75 L 20.93 21.23" />
      <path d="M 3.02 14.62 C 2.19 5.03, 18.48 21.10, 4.76 21.33" />
      <path d="M 7.14 21.38 C 16.78 4.80, 9.34 9.84, 12.74 4.58" />
      {children}
    </svg>
  );
});

export default ZigzagSnail;
