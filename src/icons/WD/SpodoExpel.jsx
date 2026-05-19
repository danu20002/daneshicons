import React from 'react';

export const iconData = {
  "id": "SpodoExpel",
  "name": "SpodoExpel",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.93 12.64 Q 6.26 8.71 12.63 17.88"
      }
    ],
    [
      "path",
      {
        "d": "M 17.03 8.50 C 9.03 19.20, 5.63 3.45, 3.09 21.08"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 10.86 C 5.27 16.44, 17.01 13.69, 18.66 14.68"
      }
    ],
    [
      "path",
      {
        "d": "M 4.25 21.98 L 7.41 7.21"
      }
    ],
    [
      "path",
      {
        "d": "M 12.07 6.92 L 5.36 4.25"
      }
    ],
    [
      "path",
      {
        "d": "M 19.48 17.68 Q 11.05 4.53 16.89 11.54"
      }
    ]
  ]
};

export const SpodoExpel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.93 12.64 Q 6.26 8.71 12.63 17.88" />
      <path d="M 17.03 8.50 C 9.03 19.20, 5.63 3.45, 3.09 21.08" />
      <path d="M 4.27 10.86 C 5.27 16.44, 17.01 13.69, 18.66 14.68" />
      <path d="M 4.25 21.98 L 7.41 7.21" />
      <path d="M 12.07 6.92 L 5.36 4.25" />
      <path d="M 19.48 17.68 Q 11.05 4.53 16.89 11.54" />
      {children}
    </svg>
  );
});

export default SpodoExpel;
