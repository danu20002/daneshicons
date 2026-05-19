import React from 'react';

export const iconData = {
  "id": "SulfuLitter",
  "name": "SulfuLitter",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.95 7.62 L 14.89 21.33 L 10.63 20.63 L 19.26 7.90 L 10.24 13.76 L 21.21 11.69 L 8.04 7.10 L 12.29 5.36"
      }
    ],
    [
      "circle",
      {
        "cx": "11.95",
        "cy": "7.62",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "14.89",
        "cy": "21.33",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "10.63",
        "cy": "20.63",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "19.26",
        "cy": "7.90",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "10.24",
        "cy": "13.76",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "21.21",
        "cy": "11.69",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "8.04",
        "cy": "7.10",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "12.29",
        "cy": "5.36",
        "r": "0.96"
      }
    ]
  ]
};

export const SulfuLitter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.95 7.62 L 14.89 21.33 L 10.63 20.63 L 19.26 7.90 L 10.24 13.76 L 21.21 11.69 L 8.04 7.10 L 12.29 5.36" />
      <circle cx="11.95" cy="7.62" r="0.52" />
      <circle cx="14.89" cy="21.33" r="1.16" />
      <circle cx="10.63" cy="20.63" r="0.50" />
      <circle cx="19.26" cy="7.90" r="0.65" />
      <circle cx="10.24" cy="13.76" r="0.50" />
      <circle cx="21.21" cy="11.69" r="0.85" />
      <circle cx="8.04" cy="7.10" r="1.22" />
      <circle cx="12.29" cy="5.36" r="0.96" />
      {children}
    </svg>
  );
});

export default SulfuLitter;
