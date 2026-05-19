import React from 'react';

export const iconData = {
  "id": "SoloWild",
  "name": "SoloWild",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.46 2.93 L 12.27 2.89 L 3.65 8.04 L 3.38 13.63 L 21.79 3.76 L 17.95 9.26 L 8.15 8.49 L 4.92 2.15"
      }
    ],
    [
      "circle",
      {
        "cx": "17.46",
        "cy": "2.93",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "12.27",
        "cy": "2.89",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "3.65",
        "cy": "8.04",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "3.38",
        "cy": "13.63",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "21.79",
        "cy": "3.76",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "17.95",
        "cy": "9.26",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "8.15",
        "cy": "8.49",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "4.92",
        "cy": "2.15",
        "r": "0.99"
      }
    ]
  ]
};

export const SoloWild = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.46 2.93 L 12.27 2.89 L 3.65 8.04 L 3.38 13.63 L 21.79 3.76 L 17.95 9.26 L 8.15 8.49 L 4.92 2.15" />
      <circle cx="17.46" cy="2.93" r="0.95" />
      <circle cx="12.27" cy="2.89" r="0.62" />
      <circle cx="3.65" cy="8.04" r="0.55" />
      <circle cx="3.38" cy="13.63" r="1.43" />
      <circle cx="21.79" cy="3.76" r="0.76" />
      <circle cx="17.95" cy="9.26" r="0.73" />
      <circle cx="8.15" cy="8.49" r="1.16" />
      <circle cx="4.92" cy="2.15" r="0.99" />
      {children}
    </svg>
  );
});

export default SoloWild;
