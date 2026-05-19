import React from 'react';

export const iconData = {
  "id": "CalliGarnet",
  "name": "CalliGarnet",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.06 12.00 a 8.94 8.94 0 1 0 17.89 0 a 8.94 8.94 0 1 0 -17.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 12.00 a 6.65 6.65 0 1 1 13.31 0 a 6.65 6.65 0 1 1 -13.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.44 12.00 L 22.44 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.97 17.97 L 19.38 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.44 L 12.00 22.44"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 17.97 L 4.62 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 12.00 L 1.56 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 6.03 L 4.62 4.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.56 L 12.00 1.56"
      }
    ],
    [
      "path",
      {
        "d": "M 17.97 6.03 L 19.38 4.62"
      }
    ]
  ]
};

export const CalliGarnet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.06 12.00 a 8.94 8.94 0 1 0 17.89 0 a 8.94 8.94 0 1 0 -17.89 0" />
      <path d="M 5.35 12.00 a 6.65 6.65 0 1 1 13.31 0 a 6.65 6.65 0 1 1 -13.31 0" />
      <path d="M 20.44 12.00 L 22.44 12.00" />
      <path d="M 17.97 17.97 L 19.38 19.38" />
      <path d="M 12.00 20.44 L 12.00 22.44" />
      <path d="M 6.03 17.97 L 4.62 19.38" />
      <path d="M 3.56 12.00 L 1.56 12.00" />
      <path d="M 6.03 6.03 L 4.62 4.62" />
      <path d="M 12.00 3.56 L 12.00 1.56" />
      <path d="M 17.97 6.03 L 19.38 4.62" />
      {children}
    </svg>
  );
});

export default CalliGarnet;
