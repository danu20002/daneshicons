import React from 'react';

export const iconData = {
  "id": "ScenarioExhaust",
  "name": "ScenarioExhaust",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.58 10.67 L 14.58 10.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.82 10.24 L 14.06 14.04"
      }
    ],
    [
      "path",
      {
        "d": "M 13.93 12.24 L 10.70 14.59"
      }
    ],
    [
      "path",
      {
        "d": "M 12.37 13.91 L 9.14 11.56"
      }
    ],
    [
      "path",
      {
        "d": "M 10.30 12.94 L 11.53 9.14"
      }
    ]
  ]
};

export const ScenarioExhaust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.58 10.67 L 14.58 10.67" />
      <path d="M 12.82 10.24 L 14.06 14.04" />
      <path d="M 13.93 12.24 L 10.70 14.59" />
      <path d="M 12.37 13.91 L 9.14 11.56" />
      <path d="M 10.30 12.94 L 11.53 9.14" />
      {children}
    </svg>
  );
});

export default ScenarioExhaust;
