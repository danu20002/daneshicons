import React from 'react';

export const iconData = {
  "id": "VermiglioThunder",
  "name": "VermiglioThunder",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.33 8.34 L 9.42 20.27 L 17.72 7.18 L 10.91 17.14 L 12.31 5.33 L 5.83 16.18 L 8.01 14.35 L 9.69 20.56"
      }
    ],
    [
      "circle",
      {
        "cx": "6.33",
        "cy": "8.34",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "9.42",
        "cy": "20.27",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "17.72",
        "cy": "7.18",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "10.91",
        "cy": "17.14",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "12.31",
        "cy": "5.33",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "5.83",
        "cy": "16.18",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "8.01",
        "cy": "14.35",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "9.69",
        "cy": "20.56",
        "r": "1.43"
      }
    ]
  ]
};

export const VermiglioThunder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.33 8.34 L 9.42 20.27 L 17.72 7.18 L 10.91 17.14 L 12.31 5.33 L 5.83 16.18 L 8.01 14.35 L 9.69 20.56" />
      <circle cx="6.33" cy="8.34" r="0.57" />
      <circle cx="9.42" cy="20.27" r="1.21" />
      <circle cx="17.72" cy="7.18" r="0.65" />
      <circle cx="10.91" cy="17.14" r="1.37" />
      <circle cx="12.31" cy="5.33" r="0.90" />
      <circle cx="5.83" cy="16.18" r="1.09" />
      <circle cx="8.01" cy="14.35" r="1.28" />
      <circle cx="9.69" cy="20.56" r="1.43" />
      {children}
    </svg>
  );
});

export default VermiglioThunder;
