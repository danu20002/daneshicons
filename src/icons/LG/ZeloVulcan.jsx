import React from 'react';

export const iconData = {
  "id": "ZeloVulcan",
  "name": "ZeloVulcan",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.14 13.69 L 15.61 20.84 L 13.89 5.64 L 16.13 19.72 L 17.12 21.33"
      }
    ],
    [
      "circle",
      {
        "cx": "10.14",
        "cy": "13.69",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "15.61",
        "cy": "20.84",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "13.89",
        "cy": "5.64",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "16.13",
        "cy": "19.72",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "17.12",
        "cy": "21.33",
        "r": "0.55"
      }
    ]
  ]
};

export const ZeloVulcan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.14 13.69 L 15.61 20.84 L 13.89 5.64 L 16.13 19.72 L 17.12 21.33" />
      <circle cx="10.14" cy="13.69" r="0.61" />
      <circle cx="15.61" cy="20.84" r="0.92" />
      <circle cx="13.89" cy="5.64" r="0.76" />
      <circle cx="16.13" cy="19.72" r="0.58" />
      <circle cx="17.12" cy="21.33" r="0.55" />
      {children}
    </svg>
  );
});

export default ZeloVulcan;
