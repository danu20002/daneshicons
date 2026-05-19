import React from 'react';

export const iconData = {
  "id": "ScenarioSpice",
  "name": "ScenarioSpice",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.78 20.89 L 17.79 15.52 L 15.92 21.76 L 20.25 14.98 L 2.43 15.68"
      }
    ],
    [
      "circle",
      {
        "cx": "11.78",
        "cy": "20.89",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "17.79",
        "cy": "15.52",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "15.92",
        "cy": "21.76",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "20.25",
        "cy": "14.98",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "2.43",
        "cy": "15.68",
        "r": "1.11"
      }
    ]
  ]
};

export const ScenarioSpice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.78 20.89 L 17.79 15.52 L 15.92 21.76 L 20.25 14.98 L 2.43 15.68" />
      <circle cx="11.78" cy="20.89" r="1.01" />
      <circle cx="17.79" cy="15.52" r="1.30" />
      <circle cx="15.92" cy="21.76" r="0.56" />
      <circle cx="20.25" cy="14.98" r="0.66" />
      <circle cx="2.43" cy="15.68" r="1.11" />
      {children}
    </svg>
  );
});

export default ScenarioSpice;
