import React from 'react';

export const iconData = {
  "id": "KappaTrait",
  "name": "KappaTrait",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.83 20.88 L 19.48 12.50"
      }
    ],
    [
      "path",
      {
        "d": "M 13.80 10.54 L 12.23 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 16.48 10.47 Q 5.89 6.51 13.01 7.35"
      }
    ],
    [
      "path",
      {
        "d": "M 21.95 8.73 Q 3.34 21.64 12.63 21.07"
      }
    ],
    [
      "path",
      {
        "d": "M 19.60 3.61 L 13.44 14.24 L 18.45 14.00 L 2.95 9.03 L 16.58 13.17 L 6.31 9.69 L 14.88 4.90 L 6.93 6.63"
      }
    ],
    [
      "path",
      {
        "d": "M 13.60 8.90 Q 14.39 11.12 12.78 5.01"
      }
    ]
  ]
};

export const KappaTrait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.83 20.88 L 19.48 12.50" />
      <path d="M 13.80 10.54 L 12.23 17.70" />
      <path d="M 16.48 10.47 Q 5.89 6.51 13.01 7.35" />
      <path d="M 21.95 8.73 Q 3.34 21.64 12.63 21.07" />
      <path d="M 19.60 3.61 L 13.44 14.24 L 18.45 14.00 L 2.95 9.03 L 16.58 13.17 L 6.31 9.69 L 14.88 4.90 L 6.93 6.63" />
      <path d="M 13.60 8.90 Q 14.39 11.12 12.78 5.01" />
      {children}
    </svg>
  );
});

export default KappaTrait;
