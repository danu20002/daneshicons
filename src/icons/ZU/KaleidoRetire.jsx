import React from 'react';

export const iconData = {
  "id": "KaleidoRetire",
  "name": "KaleidoRetire",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.30 21.79 A 6.86 5.55 140 0 0 18.29 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 9.89 12.10 C 4.47 7.95, 2.73 19.55, 3.29 16.53"
      }
    ],
    [
      "path",
      {
        "d": "M 14.91 10.56 C 20.37 10.75, 5.75 17.05, 14.63 9.29"
      }
    ],
    [
      "path",
      {
        "d": "M 4.25 19.80 Q 19.80 12.62 7.12 7.21"
      }
    ],
    [
      "path",
      {
        "d": "M 8.51 3.66 A 2.97 6.85 83 0 0 19.61 3.16"
      }
    ],
    [
      "path",
      {
        "d": "M 15.45 8.58 C 16.27 4.95, 10.57 14.21, 2.78 3.52"
      }
    ]
  ]
};

export const KaleidoRetire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.30 21.79 A 6.86 5.55 140 0 0 18.29 17.82" />
      <path d="M 9.89 12.10 C 4.47 7.95, 2.73 19.55, 3.29 16.53" />
      <path d="M 14.91 10.56 C 20.37 10.75, 5.75 17.05, 14.63 9.29" />
      <path d="M 4.25 19.80 Q 19.80 12.62 7.12 7.21" />
      <path d="M 8.51 3.66 A 2.97 6.85 83 0 0 19.61 3.16" />
      <path d="M 15.45 8.58 C 16.27 4.95, 10.57 14.21, 2.78 3.52" />
      {children}
    </svg>
  );
});

export default KaleidoRetire;
