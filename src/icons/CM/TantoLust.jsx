import React from 'react';

export const iconData = {
  "id": "TantoLust",
  "name": "TantoLust",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.76 17.82 L 21.46 17.11 L 20.39 13.12 L 21.28 21.94 L 6.34 13.12 L 4.37 12.24"
      }
    ],
    [
      "circle",
      {
        "cx": "12.76",
        "cy": "17.82",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "21.46",
        "cy": "17.11",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "20.39",
        "cy": "13.12",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "21.28",
        "cy": "21.94",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "6.34",
        "cy": "13.12",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "4.37",
        "cy": "12.24",
        "r": "1.13"
      }
    ]
  ]
};

export const TantoLust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.76 17.82 L 21.46 17.11 L 20.39 13.12 L 21.28 21.94 L 6.34 13.12 L 4.37 12.24" />
      <circle cx="12.76" cy="17.82" r="0.57" />
      <circle cx="21.46" cy="17.11" r="0.90" />
      <circle cx="20.39" cy="13.12" r="1.45" />
      <circle cx="21.28" cy="21.94" r="1.17" />
      <circle cx="6.34" cy="13.12" r="0.57" />
      <circle cx="4.37" cy="12.24" r="1.13" />
      {children}
    </svg>
  );
});

export default TantoLust;
