import React from 'react';

export const iconData = {
  "id": "VertebraSurvey",
  "name": "VertebraSurvey",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.96 12.00 a 8.04 8.04 0 1 0 16.09 0 a 8.04 8.04 0 1 0 -16.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.06 12.00 a 5.94 5.94 0 1 1 11.88 0 a 5.94 5.94 0 1 1 -11.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.54 12.00 L 21.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.35 16.08 L 20.03 17.16"
      }
    ],
    [
      "path",
      {
        "d": "M 15.13 18.86 L 15.96 20.68"
      }
    ],
    [
      "path",
      {
        "d": "M 10.93 19.47 L 10.64 21.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 17.70 L 5.75 19.21"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 14.13 L 2.84 14.69"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 9.87 L 2.84 9.31"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 6.30 L 5.75 4.79"
      }
    ],
    [
      "path",
      {
        "d": "M 10.93 4.53 L 10.64 2.55"
      }
    ],
    [
      "path",
      {
        "d": "M 15.13 5.14 L 15.96 3.32"
      }
    ],
    [
      "path",
      {
        "d": "M 18.35 7.92 L 20.03 6.84"
      }
    ]
  ]
};

export const VertebraSurvey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.96 12.00 a 8.04 8.04 0 1 0 16.09 0 a 8.04 8.04 0 1 0 -16.09 0" />
      <path d="M 6.06 12.00 a 5.94 5.94 0 1 1 11.88 0 a 5.94 5.94 0 1 1 -11.88 0" />
      <path d="M 19.54 12.00 L 21.54 12.00" />
      <path d="M 18.35 16.08 L 20.03 17.16" />
      <path d="M 15.13 18.86 L 15.96 20.68" />
      <path d="M 10.93 19.47 L 10.64 21.45" />
      <path d="M 7.06 17.70 L 5.75 19.21" />
      <path d="M 4.76 14.13 L 2.84 14.69" />
      <path d="M 4.76 9.87 L 2.84 9.31" />
      <path d="M 7.06 6.30 L 5.75 4.79" />
      <path d="M 10.93 4.53 L 10.64 2.55" />
      <path d="M 15.13 5.14 L 15.96 3.32" />
      <path d="M 18.35 7.92 L 20.03 6.84" />
      {children}
    </svg>
  );
});

export default VertebraSurvey;
