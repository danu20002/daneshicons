import React from 'react';

export const iconData = {
  "id": "ZefiroBridge",
  "name": "ZefiroBridge",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.95 9.98 L 15.20 17.45 L 15.35 9.01 L 3.12 13.70 L 10.30 5.16 L 11.66 17.54 L 11.10 5.82"
      }
    ],
    [
      "circle",
      {
        "cx": "17.95",
        "cy": "9.98",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "17.45",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "15.35",
        "cy": "9.01",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "3.12",
        "cy": "13.70",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "10.30",
        "cy": "5.16",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "11.66",
        "cy": "17.54",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "11.10",
        "cy": "5.82",
        "r": "1.05"
      }
    ]
  ]
};

export const ZefiroBridge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.95 9.98 L 15.20 17.45 L 15.35 9.01 L 3.12 13.70 L 10.30 5.16 L 11.66 17.54 L 11.10 5.82" />
      <circle cx="17.95" cy="9.98" r="0.74" />
      <circle cx="15.20" cy="17.45" r="0.75" />
      <circle cx="15.35" cy="9.01" r="1.23" />
      <circle cx="3.12" cy="13.70" r="1.00" />
      <circle cx="10.30" cy="5.16" r="1.23" />
      <circle cx="11.66" cy="17.54" r="1.11" />
      <circle cx="11.10" cy="5.82" r="1.05" />
      {children}
    </svg>
  );
});

export default ZefiroBridge;
