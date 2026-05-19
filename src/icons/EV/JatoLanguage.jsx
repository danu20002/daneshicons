import React from 'react';

export const iconData = {
  "id": "JatoLanguage",
  "name": "JatoLanguage",
  "category": "EV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.45 12.00 a 7.55 7.55 0 1 0 15.11 0 a 7.55 7.55 0 1 0 -15.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 12.00 a 4.73 4.73 0 1 1 9.46 0 a 4.73 4.73 0 1 1 -9.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 12.00 L 21.05 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.40 17.51 L 17.64 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 10.43 18.88 L 9.99 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 15.06 L 3.84 15.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 8.94 L 3.84 8.07"
      }
    ],
    [
      "path",
      {
        "d": "M 10.43 5.12 L 9.99 3.17"
      }
    ],
    [
      "path",
      {
        "d": "M 16.40 6.49 L 17.64 4.92"
      }
    ]
  ]
};

export const JatoLanguage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.45 12.00 a 7.55 7.55 0 1 0 15.11 0 a 7.55 7.55 0 1 0 -15.11 0" />
      <path d="M 7.27 12.00 a 4.73 4.73 0 1 1 9.46 0 a 4.73 4.73 0 1 1 -9.46 0" />
      <path d="M 19.05 12.00 L 21.05 12.00" />
      <path d="M 16.40 17.51 L 17.64 19.08" />
      <path d="M 10.43 18.88 L 9.99 20.83" />
      <path d="M 5.65 15.06 L 3.84 15.93" />
      <path d="M 5.65 8.94 L 3.84 8.07" />
      <path d="M 10.43 5.12 L 9.99 3.17" />
      <path d="M 16.40 6.49 L 17.64 4.92" />
      {children}
    </svg>
  );
});

export default JatoLanguage;
