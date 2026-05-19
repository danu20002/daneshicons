import React from 'react';

export const iconData = {
  "id": "TensoMost",
  "name": "TensoMost",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.48 20.33 L 2.21 6.01 L 6.92 19.26 L 9.57 6.20 L 8.66 11.63 L 19.61 2.54"
      }
    ],
    [
      "circle",
      {
        "cx": "20.48",
        "cy": "20.33",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "2.21",
        "cy": "6.01",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "6.92",
        "cy": "19.26",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "9.57",
        "cy": "6.20",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "8.66",
        "cy": "11.63",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "19.61",
        "cy": "2.54",
        "r": "1.48"
      }
    ]
  ]
};

export const TensoMost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.48 20.33 L 2.21 6.01 L 6.92 19.26 L 9.57 6.20 L 8.66 11.63 L 19.61 2.54" />
      <circle cx="20.48" cy="20.33" r="0.74" />
      <circle cx="2.21" cy="6.01" r="0.76" />
      <circle cx="6.92" cy="19.26" r="0.84" />
      <circle cx="9.57" cy="6.20" r="0.98" />
      <circle cx="8.66" cy="11.63" r="0.72" />
      <circle cx="19.61" cy="2.54" r="1.48" />
      {children}
    </svg>
  );
});

export default TensoMost;
