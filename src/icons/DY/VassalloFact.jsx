import React from 'react';

export const iconData = {
  "id": "VassalloFact",
  "name": "VassalloFact",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.36 15.01 L 21.11 12.78 L 10.21 20.23 L 18.83 10.11 L 6.41 9.47 L 6.49 2.12 L 7.19 19.59 L 18.94 15.75"
      }
    ],
    [
      "circle",
      {
        "cx": "14.36",
        "cy": "15.01",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "21.11",
        "cy": "12.78",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "10.21",
        "cy": "20.23",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "18.83",
        "cy": "10.11",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "6.41",
        "cy": "9.47",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "6.49",
        "cy": "2.12",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "7.19",
        "cy": "19.59",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "18.94",
        "cy": "15.75",
        "r": "0.84"
      }
    ]
  ]
};

export const VassalloFact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.36 15.01 L 21.11 12.78 L 10.21 20.23 L 18.83 10.11 L 6.41 9.47 L 6.49 2.12 L 7.19 19.59 L 18.94 15.75" />
      <circle cx="14.36" cy="15.01" r="1.40" />
      <circle cx="21.11" cy="12.78" r="1.32" />
      <circle cx="10.21" cy="20.23" r="0.68" />
      <circle cx="18.83" cy="10.11" r="1.18" />
      <circle cx="6.41" cy="9.47" r="0.63" />
      <circle cx="6.49" cy="2.12" r="0.87" />
      <circle cx="7.19" cy="19.59" r="0.57" />
      <circle cx="18.94" cy="15.75" r="0.84" />
      {children}
    </svg>
  );
});

export default VassalloFact;
