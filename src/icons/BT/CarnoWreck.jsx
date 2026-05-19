import React from 'react';

export const iconData = {
  "id": "CarnoWreck",
  "name": "CarnoWreck",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.31 20.75 L 12.37 5.75 L 4.04 8.70 L 19.92 15.80 L 13.09 15.88 L 12.10 17.27 L 20.80 21.89 L 4.55 11.69"
      }
    ],
    [
      "circle",
      {
        "cx": "11.31",
        "cy": "20.75",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "12.37",
        "cy": "5.75",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "4.04",
        "cy": "8.70",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "19.92",
        "cy": "15.80",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "13.09",
        "cy": "15.88",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "12.10",
        "cy": "17.27",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "20.80",
        "cy": "21.89",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "4.55",
        "cy": "11.69",
        "r": "1.17"
      }
    ]
  ]
};

export const CarnoWreck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.31 20.75 L 12.37 5.75 L 4.04 8.70 L 19.92 15.80 L 13.09 15.88 L 12.10 17.27 L 20.80 21.89 L 4.55 11.69" />
      <circle cx="11.31" cy="20.75" r="1.14" />
      <circle cx="12.37" cy="5.75" r="1.50" />
      <circle cx="4.04" cy="8.70" r="1.32" />
      <circle cx="19.92" cy="15.80" r="0.57" />
      <circle cx="13.09" cy="15.88" r="1.38" />
      <circle cx="12.10" cy="17.27" r="1.13" />
      <circle cx="20.80" cy="21.89" r="0.64" />
      <circle cx="4.55" cy="11.69" r="1.17" />
      {children}
    </svg>
  );
});

export default CarnoWreck;
