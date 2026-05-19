import React from 'react';

export const iconData = {
  "id": "YellowRegion",
  "name": "YellowRegion",
  "category": "HR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.13 12.00 a 9.87 9.87 0 1 0 19.74 0 a 9.87 9.87 0 1 0 -19.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 6.08 a 7.90 2.369373209550977 0 1 0 15.80 0 a 7.90 2.369373209550977 0 1 0 -15.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.33 10.03 a 9.67 2.9018776868101877 0 1 0 19.35 0 a 9.67 2.9018776868101877 0 1 0 -19.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.33 13.97 a 9.67 2.9018776868101877 0 1 0 19.35 0 a 9.67 2.9018776868101877 0 1 0 -19.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 17.92 a 7.90 2.3693732095509765 0 1 0 15.80 0 a 7.90 2.3693732095509765 0 1 0 -15.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.94 3.45 A 2 2 0 0 0 16.94 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 16.94 3.45 A 2 2 0 0 1 16.94 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 3.45 A 2 2 0 0 0 7.06 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 3.45 A 2 2 0 0 1 7.06 20.55"
      }
    ]
  ]
};

export const YellowRegion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.13 12.00 a 9.87 9.87 0 1 0 19.74 0 a 9.87 9.87 0 1 0 -19.74 0" />
      <path d="M 4.10 6.08 a 7.90 2.369373209550977 0 1 0 15.80 0 a 7.90 2.369373209550977 0 1 0 -15.80 0" />
      <path d="M 2.33 10.03 a 9.67 2.9018776868101877 0 1 0 19.35 0 a 9.67 2.9018776868101877 0 1 0 -19.35 0" />
      <path d="M 2.33 13.97 a 9.67 2.9018776868101877 0 1 0 19.35 0 a 9.67 2.9018776868101877 0 1 0 -19.35 0" />
      <path d="M 4.10 17.92 a 7.90 2.3693732095509765 0 1 0 15.80 0 a 7.90 2.3693732095509765 0 1 0 -15.80 0" />
      <path d="M 16.94 3.45 A 2 2 0 0 0 16.94 20.55" />
      <path d="M 16.94 3.45 A 2 2 0 0 1 16.94 20.55" />
      <path d="M 7.06 3.45 A 2 2 0 0 0 7.06 20.55" />
      <path d="M 7.06 3.45 A 2 2 0 0 1 7.06 20.55" />
      {children}
    </svg>
  );
});

export default YellowRegion;
