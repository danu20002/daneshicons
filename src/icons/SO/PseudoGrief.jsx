import React from 'react';

export const iconData = {
  "id": "PseudoGrief",
  "name": "PseudoGrief",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.72 3.28 L 3.00 17.68 L 6.78 19.88 L 5.02 15.66 L 18.42 16.76 L 18.13 7.78 L 8.14 3.64 L 12.95 12.83"
      }
    ],
    [
      "circle",
      {
        "cx": "4.72",
        "cy": "3.28",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "3.00",
        "cy": "17.68",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "6.78",
        "cy": "19.88",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "5.02",
        "cy": "15.66",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "18.42",
        "cy": "16.76",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "18.13",
        "cy": "7.78",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "8.14",
        "cy": "3.64",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "12.95",
        "cy": "12.83",
        "r": "1.12"
      }
    ]
  ]
};

export const PseudoGrief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.72 3.28 L 3.00 17.68 L 6.78 19.88 L 5.02 15.66 L 18.42 16.76 L 18.13 7.78 L 8.14 3.64 L 12.95 12.83" />
      <circle cx="4.72" cy="3.28" r="0.94" />
      <circle cx="3.00" cy="17.68" r="1.02" />
      <circle cx="6.78" cy="19.88" r="0.81" />
      <circle cx="5.02" cy="15.66" r="0.78" />
      <circle cx="18.42" cy="16.76" r="1.18" />
      <circle cx="18.13" cy="7.78" r="0.89" />
      <circle cx="8.14" cy="3.64" r="1.43" />
      <circle cx="12.95" cy="12.83" r="1.12" />
      {children}
    </svg>
  );
});

export default PseudoGrief;
