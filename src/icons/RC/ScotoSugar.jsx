import React from 'react';

export const iconData = {
  "id": "ScotoSugar",
  "name": "ScotoSugar",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.41 6.86 L 17.11 5.11 L 19.66 14.58 L 18.71 20.24 L 12.26 9.34 L 10.90 4.28 L 8.40 9.73 L 11.76 15.88"
      }
    ],
    [
      "circle",
      {
        "cx": "16.41",
        "cy": "6.86",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "17.11",
        "cy": "5.11",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "19.66",
        "cy": "14.58",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "18.71",
        "cy": "20.24",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "12.26",
        "cy": "9.34",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "10.90",
        "cy": "4.28",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "8.40",
        "cy": "9.73",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "11.76",
        "cy": "15.88",
        "r": "1.12"
      }
    ]
  ]
};

export const ScotoSugar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.41 6.86 L 17.11 5.11 L 19.66 14.58 L 18.71 20.24 L 12.26 9.34 L 10.90 4.28 L 8.40 9.73 L 11.76 15.88" />
      <circle cx="16.41" cy="6.86" r="1.31" />
      <circle cx="17.11" cy="5.11" r="1.25" />
      <circle cx="19.66" cy="14.58" r="1.22" />
      <circle cx="18.71" cy="20.24" r="1.10" />
      <circle cx="12.26" cy="9.34" r="1.35" />
      <circle cx="10.90" cy="4.28" r="1.07" />
      <circle cx="8.40" cy="9.73" r="0.52" />
      <circle cx="11.76" cy="15.88" r="1.12" />
      {children}
    </svg>
  );
});

export default ScotoSugar;
