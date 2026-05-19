import React from 'react';

export const iconData = {
  "id": "UricoEnchant",
  "name": "UricoEnchant",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.63 14.10 L 16.84 6.92 L 19.00 16.98 L 13.94 21.90 L 20.42 16.64 L 14.18 16.62 L 9.97 9.32 L 8.02 2.36"
      }
    ],
    [
      "circle",
      {
        "cx": "2.63",
        "cy": "14.10",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "16.84",
        "cy": "6.92",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "19.00",
        "cy": "16.98",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "13.94",
        "cy": "21.90",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "20.42",
        "cy": "16.64",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "14.18",
        "cy": "16.62",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "9.97",
        "cy": "9.32",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "8.02",
        "cy": "2.36",
        "r": "1.01"
      }
    ]
  ]
};

export const UricoEnchant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.63 14.10 L 16.84 6.92 L 19.00 16.98 L 13.94 21.90 L 20.42 16.64 L 14.18 16.62 L 9.97 9.32 L 8.02 2.36" />
      <circle cx="2.63" cy="14.10" r="1.35" />
      <circle cx="16.84" cy="6.92" r="0.85" />
      <circle cx="19.00" cy="16.98" r="1.44" />
      <circle cx="13.94" cy="21.90" r="1.42" />
      <circle cx="20.42" cy="16.64" r="1.34" />
      <circle cx="14.18" cy="16.62" r="0.91" />
      <circle cx="9.97" cy="9.32" r="0.76" />
      <circle cx="8.02" cy="2.36" r="1.01" />
      {children}
    </svg>
  );
});

export default UricoEnchant;
