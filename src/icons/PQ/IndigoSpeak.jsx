import React from 'react';

export const iconData = {
  "id": "IndigoSpeak",
  "name": "IndigoSpeak",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.15 5.18 L 13.48 20.90 L 6.74 17.40 L 4.37 16.64 L 12.02 6.39 L 12.88 11.59 L 19.66 10.88 L 10.89 6.53"
      }
    ],
    [
      "circle",
      {
        "cx": "17.15",
        "cy": "5.18",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "13.48",
        "cy": "20.90",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "6.74",
        "cy": "17.40",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "4.37",
        "cy": "16.64",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "12.02",
        "cy": "6.39",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "12.88",
        "cy": "11.59",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "19.66",
        "cy": "10.88",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "10.89",
        "cy": "6.53",
        "r": "1.25"
      }
    ]
  ]
};

export const IndigoSpeak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.15 5.18 L 13.48 20.90 L 6.74 17.40 L 4.37 16.64 L 12.02 6.39 L 12.88 11.59 L 19.66 10.88 L 10.89 6.53" />
      <circle cx="17.15" cy="5.18" r="1.42" />
      <circle cx="13.48" cy="20.90" r="0.85" />
      <circle cx="6.74" cy="17.40" r="1.34" />
      <circle cx="4.37" cy="16.64" r="0.99" />
      <circle cx="12.02" cy="6.39" r="0.77" />
      <circle cx="12.88" cy="11.59" r="0.70" />
      <circle cx="19.66" cy="10.88" r="1.34" />
      <circle cx="10.89" cy="6.53" r="1.25" />
      {children}
    </svg>
  );
});

export default IndigoSpeak;
