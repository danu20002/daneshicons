import React from 'react';

export const iconData = {
  "id": "PlasmaPortrait",
  "name": "PlasmaPortrait",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.60 19.57 L 13.89 4.85 L 10.65 16.18 L 15.46 14.61 L 19.11 7.53 L 11.80 10.30"
      }
    ],
    [
      "circle",
      {
        "cx": "11.60",
        "cy": "19.57",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "13.89",
        "cy": "4.85",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "10.65",
        "cy": "16.18",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "15.46",
        "cy": "14.61",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "19.11",
        "cy": "7.53",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "11.80",
        "cy": "10.30",
        "r": "0.69"
      }
    ]
  ]
};

export const PlasmaPortrait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.60 19.57 L 13.89 4.85 L 10.65 16.18 L 15.46 14.61 L 19.11 7.53 L 11.80 10.30" />
      <circle cx="11.60" cy="19.57" r="1.40" />
      <circle cx="13.89" cy="4.85" r="0.62" />
      <circle cx="10.65" cy="16.18" r="1.02" />
      <circle cx="15.46" cy="14.61" r="0.94" />
      <circle cx="19.11" cy="7.53" r="0.61" />
      <circle cx="11.80" cy="10.30" r="0.69" />
      {children}
    </svg>
  );
});

export default PlasmaPortrait;
