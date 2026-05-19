import React from 'react';

export const iconData = {
  "id": "ZenitNoodle",
  "name": "ZenitNoodle",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.32 16.99 L 18.46 15.22 L 13.94 7.16 L 10.88 16.26 L 5.83 15.16 L 13.54 5.58 L 13.47 6.86 L 7.41 15.89"
      }
    ],
    [
      "circle",
      {
        "cx": "17.32",
        "cy": "16.99",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "18.46",
        "cy": "15.22",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "13.94",
        "cy": "7.16",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "10.88",
        "cy": "16.26",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "5.83",
        "cy": "15.16",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "13.54",
        "cy": "5.58",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "13.47",
        "cy": "6.86",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "7.41",
        "cy": "15.89",
        "r": "0.89"
      }
    ]
  ]
};

export const ZenitNoodle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.32 16.99 L 18.46 15.22 L 13.94 7.16 L 10.88 16.26 L 5.83 15.16 L 13.54 5.58 L 13.47 6.86 L 7.41 15.89" />
      <circle cx="17.32" cy="16.99" r="1.47" />
      <circle cx="18.46" cy="15.22" r="0.97" />
      <circle cx="13.94" cy="7.16" r="1.01" />
      <circle cx="10.88" cy="16.26" r="0.97" />
      <circle cx="5.83" cy="15.16" r="0.94" />
      <circle cx="13.54" cy="5.58" r="1.25" />
      <circle cx="13.47" cy="6.86" r="1.03" />
      <circle cx="7.41" cy="15.89" r="0.89" />
      {children}
    </svg>
  );
});

export default ZenitNoodle;
