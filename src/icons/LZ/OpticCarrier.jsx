import React from 'react';

export const iconData = {
  "id": "OpticCarrier",
  "name": "OpticCarrier",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.35 5.83 L 8.31 3.30 L 13.63 2.67 L 8.77 19.92 L 12.02 14.90 L 15.71 9.85 L 13.71 13.42"
      }
    ],
    [
      "circle",
      {
        "cx": "2.35",
        "cy": "5.83",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "8.31",
        "cy": "3.30",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "13.63",
        "cy": "2.67",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "8.77",
        "cy": "19.92",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "12.02",
        "cy": "14.90",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "15.71",
        "cy": "9.85",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "13.71",
        "cy": "13.42",
        "r": "0.51"
      }
    ]
  ]
};

export const OpticCarrier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.35 5.83 L 8.31 3.30 L 13.63 2.67 L 8.77 19.92 L 12.02 14.90 L 15.71 9.85 L 13.71 13.42" />
      <circle cx="2.35" cy="5.83" r="1.16" />
      <circle cx="8.31" cy="3.30" r="0.73" />
      <circle cx="13.63" cy="2.67" r="1.33" />
      <circle cx="8.77" cy="19.92" r="0.97" />
      <circle cx="12.02" cy="14.90" r="1.13" />
      <circle cx="15.71" cy="9.85" r="0.88" />
      <circle cx="13.71" cy="13.42" r="0.51" />
      {children}
    </svg>
  );
});

export default OpticCarrier;
