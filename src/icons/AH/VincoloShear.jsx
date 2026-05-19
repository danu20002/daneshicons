import React from 'react';

export const iconData = {
  "id": "VincoloShear",
  "name": "VincoloShear",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.47 10.78 L 18.58 17.41 L 10.97 8.05 L 20.32 8.06 L 12.84 6.97 L 8.71 3.97 L 4.52 14.73 L 7.79 8.67"
      }
    ],
    [
      "circle",
      {
        "cx": "12.47",
        "cy": "10.78",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "18.58",
        "cy": "17.41",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "10.97",
        "cy": "8.05",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "20.32",
        "cy": "8.06",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "12.84",
        "cy": "6.97",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "8.71",
        "cy": "3.97",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "4.52",
        "cy": "14.73",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "7.79",
        "cy": "8.67",
        "r": "0.56"
      }
    ]
  ]
};

export const VincoloShear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.47 10.78 L 18.58 17.41 L 10.97 8.05 L 20.32 8.06 L 12.84 6.97 L 8.71 3.97 L 4.52 14.73 L 7.79 8.67" />
      <circle cx="12.47" cy="10.78" r="0.81" />
      <circle cx="18.58" cy="17.41" r="0.72" />
      <circle cx="10.97" cy="8.05" r="1.22" />
      <circle cx="20.32" cy="8.06" r="1.27" />
      <circle cx="12.84" cy="6.97" r="1.47" />
      <circle cx="8.71" cy="3.97" r="0.53" />
      <circle cx="4.52" cy="14.73" r="1.13" />
      <circle cx="7.79" cy="8.67" r="0.56" />
      {children}
    </svg>
  );
});

export default VincoloShear;
