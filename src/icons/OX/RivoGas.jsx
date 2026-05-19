import React from 'react';

export const iconData = {
  "id": "RivoGas",
  "name": "RivoGas",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.31 6.12 L 13.52 20.96 L 15.01 14.02 L 18.80 16.00 L 15.78 13.61 L 19.37 9.62 L 19.18 12.27 L 14.74 4.75"
      }
    ],
    [
      "circle",
      {
        "cx": "18.31",
        "cy": "6.12",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "13.52",
        "cy": "20.96",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "15.01",
        "cy": "14.02",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "18.80",
        "cy": "16.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "15.78",
        "cy": "13.61",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "19.37",
        "cy": "9.62",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "19.18",
        "cy": "12.27",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "14.74",
        "cy": "4.75",
        "r": "0.67"
      }
    ]
  ]
};

export const RivoGas = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.31 6.12 L 13.52 20.96 L 15.01 14.02 L 18.80 16.00 L 15.78 13.61 L 19.37 9.62 L 19.18 12.27 L 14.74 4.75" />
      <circle cx="18.31" cy="6.12" r="0.96" />
      <circle cx="13.52" cy="20.96" r="0.79" />
      <circle cx="15.01" cy="14.02" r="1.05" />
      <circle cx="18.80" cy="16.00" r="0.62" />
      <circle cx="15.78" cy="13.61" r="0.62" />
      <circle cx="19.37" cy="9.62" r="0.60" />
      <circle cx="19.18" cy="12.27" r="1.25" />
      <circle cx="14.74" cy="4.75" r="0.67" />
      {children}
    </svg>
  );
});

export default RivoGas;
