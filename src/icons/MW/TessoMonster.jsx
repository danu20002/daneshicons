import React from 'react';

export const iconData = {
  "id": "TessoMonster",
  "name": "TessoMonster",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.42 12.00 a 7.58 7.58 0 1 0 15.16 0 a 7.58 7.58 0 1 0 -15.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.65 12.00 a 5.35 5.35 0 1 1 10.69 0 a 5.35 5.35 0 1 1 -10.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.08 12.00 L 21.08 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.42 16.55 L 18.96 17.84"
      }
    ],
    [
      "path",
      {
        "d": "M 13.23 18.97 L 13.58 20.94"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 18.13 L 7.46 19.86"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 14.42 L 3.47 15.11"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 9.58 L 3.47 8.89"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 5.87 L 7.46 4.14"
      }
    ],
    [
      "path",
      {
        "d": "M 13.23 5.03 L 13.58 3.06"
      }
    ],
    [
      "path",
      {
        "d": "M 17.42 7.45 L 18.96 6.16"
      }
    ]
  ]
};

export const TessoMonster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.42 12.00 a 7.58 7.58 0 1 0 15.16 0 a 7.58 7.58 0 1 0 -15.16 0" />
      <path d="M 6.65 12.00 a 5.35 5.35 0 1 1 10.69 0 a 5.35 5.35 0 1 1 -10.69 0" />
      <path d="M 19.08 12.00 L 21.08 12.00" />
      <path d="M 17.42 16.55 L 18.96 17.84" />
      <path d="M 13.23 18.97 L 13.58 20.94" />
      <path d="M 8.46 18.13 L 7.46 19.86" />
      <path d="M 5.35 14.42 L 3.47 15.11" />
      <path d="M 5.35 9.58 L 3.47 8.89" />
      <path d="M 8.46 5.87 L 7.46 4.14" />
      <path d="M 13.23 5.03 L 13.58 3.06" />
      <path d="M 17.42 7.45 L 18.96 6.16" />
      {children}
    </svg>
  );
});

export default TessoMonster;
