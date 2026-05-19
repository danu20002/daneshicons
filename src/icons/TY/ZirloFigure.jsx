import React from 'react';

export const iconData = {
  "id": "ZirloFigure",
  "name": "ZirloFigure",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.73 5.37 L 8.28 2.08 L 10.14 7.11"
      }
    ],
    [
      "path",
      {
        "d": "M 15.28 7.39 Q 11.88 2.07 13.61 14.03"
      }
    ],
    [
      "path",
      {
        "d": "M 21.93 13.66 A 3.23 2.70 101 0 1 12.21 14.19"
      }
    ],
    [
      "path",
      {
        "d": "M 12.36 7.35 Q 21.05 7.69 9.80 17.73"
      }
    ],
    [
      "path",
      {
        "d": "M 3.83 9.20 L 4.78 14.57"
      }
    ]
  ]
};

export const ZirloFigure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.73 5.37 L 8.28 2.08 L 10.14 7.11" />
      <path d="M 15.28 7.39 Q 11.88 2.07 13.61 14.03" />
      <path d="M 21.93 13.66 A 3.23 2.70 101 0 1 12.21 14.19" />
      <path d="M 12.36 7.35 Q 21.05 7.69 9.80 17.73" />
      <path d="M 3.83 9.20 L 4.78 14.57" />
      {children}
    </svg>
  );
});

export default ZirloFigure;
