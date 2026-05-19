import React from 'react';

export const iconData = {
  "id": "PrimoFalcon",
  "name": "PrimoFalcon",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.13 3.63 L 12.80 20.50 L 14.96 5.04 L 16.38 15.70 L 2.25 8.55 L 15.09 5.87 L 12.71 16.55"
      }
    ],
    [
      "circle",
      {
        "cx": "12.13",
        "cy": "3.63",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "12.80",
        "cy": "20.50",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "14.96",
        "cy": "5.04",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "16.38",
        "cy": "15.70",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "2.25",
        "cy": "8.55",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "15.09",
        "cy": "5.87",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "12.71",
        "cy": "16.55",
        "r": "0.57"
      }
    ]
  ]
};

export const PrimoFalcon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.13 3.63 L 12.80 20.50 L 14.96 5.04 L 16.38 15.70 L 2.25 8.55 L 15.09 5.87 L 12.71 16.55" />
      <circle cx="12.13" cy="3.63" r="1.13" />
      <circle cx="12.80" cy="20.50" r="0.65" />
      <circle cx="14.96" cy="5.04" r="0.91" />
      <circle cx="16.38" cy="15.70" r="0.93" />
      <circle cx="2.25" cy="8.55" r="0.90" />
      <circle cx="15.09" cy="5.87" r="0.51" />
      <circle cx="12.71" cy="16.55" r="0.57" />
      {children}
    </svg>
  );
});

export default PrimoFalcon;
