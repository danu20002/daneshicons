import React from 'react';

export const iconData = {
  "id": "TurrisPier",
  "name": "TurrisPier",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.19 3.52 L 20.64 10.54 L 9.48 14.44 L 15.49 4.42 L 16.48 20.51 L 9.52 9.41 L 7.50 2.74 L 3.89 13.01"
      }
    ],
    [
      "circle",
      {
        "cx": "16.19",
        "cy": "3.52",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "20.64",
        "cy": "10.54",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "9.48",
        "cy": "14.44",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "15.49",
        "cy": "4.42",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "16.48",
        "cy": "20.51",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "9.52",
        "cy": "9.41",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "7.50",
        "cy": "2.74",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "3.89",
        "cy": "13.01",
        "r": "0.69"
      }
    ]
  ]
};

export const TurrisPier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.19 3.52 L 20.64 10.54 L 9.48 14.44 L 15.49 4.42 L 16.48 20.51 L 9.52 9.41 L 7.50 2.74 L 3.89 13.01" />
      <circle cx="16.19" cy="3.52" r="0.82" />
      <circle cx="20.64" cy="10.54" r="0.73" />
      <circle cx="9.48" cy="14.44" r="0.84" />
      <circle cx="15.49" cy="4.42" r="1.02" />
      <circle cx="16.48" cy="20.51" r="1.31" />
      <circle cx="9.52" cy="9.41" r="0.98" />
      <circle cx="7.50" cy="2.74" r="0.72" />
      <circle cx="3.89" cy="13.01" r="0.69" />
      {children}
    </svg>
  );
});

export default TurrisPier;
