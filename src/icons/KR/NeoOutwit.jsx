import React from 'react';

export const iconData = {
  "id": "NeoOutwit",
  "name": "NeoOutwit",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.34 12.00 a 7.66 7.66 0 1 0 15.33 0 a 7.66 7.66 0 1 0 -15.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.43 12.00 a 5.57 5.57 0 1 1 11.14 0 a 5.57 5.57 0 1 1 -11.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.16 12.00 L 21.16 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.07 17.07 L 18.48 18.48"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.16 L 12.00 21.16"
      }
    ],
    [
      "path",
      {
        "d": "M 6.93 17.07 L 5.52 18.48"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 12.00 L 2.84 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.93 6.93 L 5.52 5.52"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.84 L 12.00 2.84"
      }
    ],
    [
      "path",
      {
        "d": "M 17.07 6.93 L 18.48 5.52"
      }
    ]
  ]
};

export const NeoOutwit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.34 12.00 a 7.66 7.66 0 1 0 15.33 0 a 7.66 7.66 0 1 0 -15.33 0" />
      <path d="M 6.43 12.00 a 5.57 5.57 0 1 1 11.14 0 a 5.57 5.57 0 1 1 -11.14 0" />
      <path d="M 19.16 12.00 L 21.16 12.00" />
      <path d="M 17.07 17.07 L 18.48 18.48" />
      <path d="M 12.00 19.16 L 12.00 21.16" />
      <path d="M 6.93 17.07 L 5.52 18.48" />
      <path d="M 4.84 12.00 L 2.84 12.00" />
      <path d="M 6.93 6.93 L 5.52 5.52" />
      <path d="M 12.00 4.84 L 12.00 2.84" />
      <path d="M 17.07 6.93 L 18.48 5.52" />
      {children}
    </svg>
  );
});

export default NeoOutwit;
