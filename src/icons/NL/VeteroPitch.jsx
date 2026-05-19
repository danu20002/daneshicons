import React from 'react';

export const iconData = {
  "id": "VeteroPitch",
  "name": "VeteroPitch",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.15 12.84 L 14.59 2.76 L 8.60 12.12 L 14.68 11.52 L 17.92 6.50 L 18.11 19.50"
      }
    ],
    [
      "circle",
      {
        "cx": "21.15",
        "cy": "12.84",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "14.59",
        "cy": "2.76",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "8.60",
        "cy": "12.12",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "14.68",
        "cy": "11.52",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "17.92",
        "cy": "6.50",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "18.11",
        "cy": "19.50",
        "r": "1.26"
      }
    ]
  ]
};

export const VeteroPitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.15 12.84 L 14.59 2.76 L 8.60 12.12 L 14.68 11.52 L 17.92 6.50 L 18.11 19.50" />
      <circle cx="21.15" cy="12.84" r="1.07" />
      <circle cx="14.59" cy="2.76" r="0.87" />
      <circle cx="8.60" cy="12.12" r="0.52" />
      <circle cx="14.68" cy="11.52" r="0.72" />
      <circle cx="17.92" cy="6.50" r="0.99" />
      <circle cx="18.11" cy="19.50" r="1.26" />
      {children}
    </svg>
  );
});

export default VeteroPitch;
