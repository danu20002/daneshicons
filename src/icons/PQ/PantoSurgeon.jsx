import React from 'react';

export const iconData = {
  "id": "PantoSurgeon",
  "name": "PantoSurgeon",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 20.21 L 13.95 8.67 L 10.02 9.07 L 17.40 15.47 L 18.02 17.61 L 7.48 11.28 L 21.64 11.32 L 6.67 17.45"
      }
    ],
    [
      "circle",
      {
        "cx": "3.03",
        "cy": "20.21",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "13.95",
        "cy": "8.67",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "10.02",
        "cy": "9.07",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "17.40",
        "cy": "15.47",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "18.02",
        "cy": "17.61",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "7.48",
        "cy": "11.28",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "21.64",
        "cy": "11.32",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "6.67",
        "cy": "17.45",
        "r": "1.18"
      }
    ]
  ]
};

export const PantoSurgeon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 20.21 L 13.95 8.67 L 10.02 9.07 L 17.40 15.47 L 18.02 17.61 L 7.48 11.28 L 21.64 11.32 L 6.67 17.45" />
      <circle cx="3.03" cy="20.21" r="1.14" />
      <circle cx="13.95" cy="8.67" r="0.75" />
      <circle cx="10.02" cy="9.07" r="1.38" />
      <circle cx="17.40" cy="15.47" r="1.05" />
      <circle cx="18.02" cy="17.61" r="0.58" />
      <circle cx="7.48" cy="11.28" r="1.12" />
      <circle cx="21.64" cy="11.32" r="1.08" />
      <circle cx="6.67" cy="17.45" r="1.18" />
      {children}
    </svg>
  );
});

export default PantoSurgeon;
