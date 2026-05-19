import React from 'react';

export const iconData = {
  "id": "NebuloHarem",
  "name": "NebuloHarem",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.58 13.68 L 8.42 9.00 L 18.47 16.61 L 12.74 12.45 L 2.20 2.56 L 14.83 11.08 L 5.13 20.05"
      }
    ],
    [
      "circle",
      {
        "cx": "5.58",
        "cy": "13.68",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "8.42",
        "cy": "9.00",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "18.47",
        "cy": "16.61",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "12.74",
        "cy": "12.45",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "2.20",
        "cy": "2.56",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "14.83",
        "cy": "11.08",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "5.13",
        "cy": "20.05",
        "r": "1.37"
      }
    ]
  ]
};

export const NebuloHarem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.58 13.68 L 8.42 9.00 L 18.47 16.61 L 12.74 12.45 L 2.20 2.56 L 14.83 11.08 L 5.13 20.05" />
      <circle cx="5.58" cy="13.68" r="0.54" />
      <circle cx="8.42" cy="9.00" r="1.05" />
      <circle cx="18.47" cy="16.61" r="0.64" />
      <circle cx="12.74" cy="12.45" r="0.77" />
      <circle cx="2.20" cy="2.56" r="0.79" />
      <circle cx="14.83" cy="11.08" r="1.35" />
      <circle cx="5.13" cy="20.05" r="1.37" />
      {children}
    </svg>
  );
});

export default NebuloHarem;
