import React from 'react';

export const iconData = {
  "id": "SyntoGrove",
  "name": "SyntoGrove",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.04 16.98 L 12.35 15.35 L 15.34 14.03 L 5.18 13.83 L 13.88 20.32 L 6.15 17.84 L 13.70 9.65 L 20.07 4.96"
      }
    ],
    [
      "circle",
      {
        "cx": "8.04",
        "cy": "16.98",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "12.35",
        "cy": "15.35",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "15.34",
        "cy": "14.03",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "5.18",
        "cy": "13.83",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "13.88",
        "cy": "20.32",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "6.15",
        "cy": "17.84",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "13.70",
        "cy": "9.65",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "20.07",
        "cy": "4.96",
        "r": "0.50"
      }
    ]
  ]
};

export const SyntoGrove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.04 16.98 L 12.35 15.35 L 15.34 14.03 L 5.18 13.83 L 13.88 20.32 L 6.15 17.84 L 13.70 9.65 L 20.07 4.96" />
      <circle cx="8.04" cy="16.98" r="1.26" />
      <circle cx="12.35" cy="15.35" r="1.13" />
      <circle cx="15.34" cy="14.03" r="1.23" />
      <circle cx="5.18" cy="13.83" r="1.29" />
      <circle cx="13.88" cy="20.32" r="0.81" />
      <circle cx="6.15" cy="17.84" r="1.05" />
      <circle cx="13.70" cy="9.65" r="1.25" />
      <circle cx="20.07" cy="4.96" r="0.50" />
      {children}
    </svg>
  );
});

export default SyntoGrove;
