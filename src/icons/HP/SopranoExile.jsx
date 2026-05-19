import React from 'react';

export const iconData = {
  "id": "SopranoExile",
  "name": "SopranoExile",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.76 13.39 L 20.88 18.41 L 10.84 5.20 L 7.46 19.37 L 8.15 17.91 L 15.52 11.21 L 9.97 21.86 L 19.18 21.24"
      }
    ],
    [
      "circle",
      {
        "cx": "17.76",
        "cy": "13.39",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "20.88",
        "cy": "18.41",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "10.84",
        "cy": "5.20",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "7.46",
        "cy": "19.37",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "8.15",
        "cy": "17.91",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "15.52",
        "cy": "11.21",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "9.97",
        "cy": "21.86",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "19.18",
        "cy": "21.24",
        "r": "0.63"
      }
    ]
  ]
};

export const SopranoExile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.76 13.39 L 20.88 18.41 L 10.84 5.20 L 7.46 19.37 L 8.15 17.91 L 15.52 11.21 L 9.97 21.86 L 19.18 21.24" />
      <circle cx="17.76" cy="13.39" r="0.77" />
      <circle cx="20.88" cy="18.41" r="1.47" />
      <circle cx="10.84" cy="5.20" r="0.59" />
      <circle cx="7.46" cy="19.37" r="0.74" />
      <circle cx="8.15" cy="17.91" r="1.06" />
      <circle cx="15.52" cy="11.21" r="0.68" />
      <circle cx="9.97" cy="21.86" r="1.34" />
      <circle cx="19.18" cy="21.24" r="0.63" />
      {children}
    </svg>
  );
});

export default SopranoExile;
