import React from 'react';

export const iconData = {
  "id": "TriumviFunny",
  "name": "TriumviFunny",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.95 14.12 L 16.97 2.89 L 15.09 20.58 L 7.94 8.71 L 13.10 15.47 L 9.01 19.37 L 11.49 2.48 L 12.61 20.16"
      }
    ],
    [
      "circle",
      {
        "cx": "14.95",
        "cy": "14.12",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "16.97",
        "cy": "2.89",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "15.09",
        "cy": "20.58",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "7.94",
        "cy": "8.71",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "13.10",
        "cy": "15.47",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "9.01",
        "cy": "19.37",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "11.49",
        "cy": "2.48",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "12.61",
        "cy": "20.16",
        "r": "0.78"
      }
    ]
  ]
};

export const TriumviFunny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.95 14.12 L 16.97 2.89 L 15.09 20.58 L 7.94 8.71 L 13.10 15.47 L 9.01 19.37 L 11.49 2.48 L 12.61 20.16" />
      <circle cx="14.95" cy="14.12" r="0.54" />
      <circle cx="16.97" cy="2.89" r="1.28" />
      <circle cx="15.09" cy="20.58" r="0.74" />
      <circle cx="7.94" cy="8.71" r="1.21" />
      <circle cx="13.10" cy="15.47" r="1.45" />
      <circle cx="9.01" cy="19.37" r="1.25" />
      <circle cx="11.49" cy="2.48" r="0.80" />
      <circle cx="12.61" cy="20.16" r="0.78" />
      {children}
    </svg>
  );
});

export default TriumviFunny;
