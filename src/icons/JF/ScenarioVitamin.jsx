import React from 'react';

export const iconData = {
  "id": "ScenarioVitamin",
  "name": "ScenarioVitamin",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.81 12.00 a 7.19 7.19 0 1 0 14.38 0 a 7.19 7.19 0 1 0 -14.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 12.00 a 4.88 4.88 0 1 1 9.76 0 a 4.88 4.88 0 1 1 -9.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.69 12.00 L 20.69 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.41 15.93 L 19.03 17.11"
      }
    ],
    [
      "path",
      {
        "d": "M 14.07 18.36 L 14.69 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 9.93 18.36 L 9.31 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 6.59 15.93 L 4.97 17.11"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 12.00 L 3.31 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.59 8.07 L 4.97 6.89"
      }
    ],
    [
      "path",
      {
        "d": "M 9.93 5.64 L 9.31 3.74"
      }
    ],
    [
      "path",
      {
        "d": "M 14.07 5.64 L 14.69 3.74"
      }
    ],
    [
      "path",
      {
        "d": "M 17.41 8.07 L 19.03 6.89"
      }
    ]
  ]
};

export const ScenarioVitamin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.81 12.00 a 7.19 7.19 0 1 0 14.38 0 a 7.19 7.19 0 1 0 -14.38 0" />
      <path d="M 7.12 12.00 a 4.88 4.88 0 1 1 9.76 0 a 4.88 4.88 0 1 1 -9.76 0" />
      <path d="M 18.69 12.00 L 20.69 12.00" />
      <path d="M 17.41 15.93 L 19.03 17.11" />
      <path d="M 14.07 18.36 L 14.69 20.26" />
      <path d="M 9.93 18.36 L 9.31 20.26" />
      <path d="M 6.59 15.93 L 4.97 17.11" />
      <path d="M 5.31 12.00 L 3.31 12.00" />
      <path d="M 6.59 8.07 L 4.97 6.89" />
      <path d="M 9.93 5.64 L 9.31 3.74" />
      <path d="M 14.07 5.64 L 14.69 3.74" />
      <path d="M 17.41 8.07 L 19.03 6.89" />
      {children}
    </svg>
  );
});

export default ScenarioVitamin;
