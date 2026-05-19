import React from 'react';

export const iconData = {
  "id": "SensoFrost",
  "name": "SensoFrost",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.93 21.31 A 4.90 6.67 115 0 0 15.56 5.03"
      }
    ],
    [
      "path",
      {
        "d": "M 20.74 16.35 C 10.10 17.18, 3.92 20.69, 5.99 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 15.44 10.03 A 4.51 4.00 163 0 0 19.13 9.09"
      }
    ],
    [
      "path",
      {
        "d": "M 9.90 19.14 C 5.39 19.16, 16.62 11.98, 9.45 11.88"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 13.21 Q 11.88 13.96 12.02 13.54"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 17.00 A 2.12 4.38 161 0 0 14.93 13.34"
      }
    ]
  ]
};

export const SensoFrost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.93 21.31 A 4.90 6.67 115 0 0 15.56 5.03" />
      <path d="M 20.74 16.35 C 10.10 17.18, 3.92 20.69, 5.99 18.52" />
      <path d="M 15.44 10.03 A 4.51 4.00 163 0 0 19.13 9.09" />
      <path d="M 9.90 19.14 C 5.39 19.16, 16.62 11.98, 9.45 11.88" />
      <path d="M 4.93 13.21 Q 11.88 13.96 12.02 13.54" />
      <path d="M 3.33 17.00 A 2.12 4.38 161 0 0 14.93 13.34" />
      {children}
    </svg>
  );
});

export default SensoFrost;
