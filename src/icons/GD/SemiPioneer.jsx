import React from 'react';

export const iconData = {
  "id": "SemiPioneer",
  "name": "SemiPioneer",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.54 13.74 L 15.34 7.84 L 19.75 16.79 L 3.47 21.24 L 15.09 12.46 L 9.57 17.06 L 17.51 10.18 L 3.35 8.66"
      }
    ],
    [
      "circle",
      {
        "cx": "20.54",
        "cy": "13.74",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "15.34",
        "cy": "7.84",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "19.75",
        "cy": "16.79",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "3.47",
        "cy": "21.24",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "15.09",
        "cy": "12.46",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "9.57",
        "cy": "17.06",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "17.51",
        "cy": "10.18",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "3.35",
        "cy": "8.66",
        "r": "1.26"
      }
    ]
  ]
};

export const SemiPioneer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.54 13.74 L 15.34 7.84 L 19.75 16.79 L 3.47 21.24 L 15.09 12.46 L 9.57 17.06 L 17.51 10.18 L 3.35 8.66" />
      <circle cx="20.54" cy="13.74" r="0.76" />
      <circle cx="15.34" cy="7.84" r="1.05" />
      <circle cx="19.75" cy="16.79" r="1.48" />
      <circle cx="3.47" cy="21.24" r="1.26" />
      <circle cx="15.09" cy="12.46" r="1.14" />
      <circle cx="9.57" cy="17.06" r="0.59" />
      <circle cx="17.51" cy="10.18" r="1.18" />
      <circle cx="3.35" cy="8.66" r="1.26" />
      {children}
    </svg>
  );
});

export default SemiPioneer;
