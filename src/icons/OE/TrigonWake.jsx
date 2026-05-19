import React from 'react';

export const iconData = {
  "id": "TrigonWake",
  "name": "TrigonWake",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.17 20.48 L 7.90 18.22 L 21.42 4.14 L 14.55 11.25 L 6.89 3.56 L 4.12 12.53 L 2.65 20.89 L 2.11 3.68"
      }
    ],
    [
      "circle",
      {
        "cx": "16.17",
        "cy": "20.48",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "7.90",
        "cy": "18.22",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "21.42",
        "cy": "4.14",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "14.55",
        "cy": "11.25",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "6.89",
        "cy": "3.56",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "4.12",
        "cy": "12.53",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "2.65",
        "cy": "20.89",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "2.11",
        "cy": "3.68",
        "r": "0.51"
      }
    ]
  ]
};

export const TrigonWake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.17 20.48 L 7.90 18.22 L 21.42 4.14 L 14.55 11.25 L 6.89 3.56 L 4.12 12.53 L 2.65 20.89 L 2.11 3.68" />
      <circle cx="16.17" cy="20.48" r="0.66" />
      <circle cx="7.90" cy="18.22" r="0.87" />
      <circle cx="21.42" cy="4.14" r="1.08" />
      <circle cx="14.55" cy="11.25" r="1.06" />
      <circle cx="6.89" cy="3.56" r="1.24" />
      <circle cx="4.12" cy="12.53" r="1.08" />
      <circle cx="2.65" cy="20.89" r="1.04" />
      <circle cx="2.11" cy="3.68" r="0.51" />
      {children}
    </svg>
  );
});

export default TrigonWake;
