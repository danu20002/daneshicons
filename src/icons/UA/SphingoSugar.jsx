import React from 'react';

export const iconData = {
  "id": "SphingoSugar",
  "name": "SphingoSugar",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.29 9.69 L 14.56 21.26 L 14.01 12.71 L 12.55 12.34 L 9.73 7.25 L 6.95 18.59 L 21.47 21.47"
      }
    ],
    [
      "circle",
      {
        "cx": "20.29",
        "cy": "9.69",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "14.56",
        "cy": "21.26",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "14.01",
        "cy": "12.71",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "12.55",
        "cy": "12.34",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "9.73",
        "cy": "7.25",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "6.95",
        "cy": "18.59",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "21.47",
        "cy": "21.47",
        "r": "1.41"
      }
    ]
  ]
};

export const SphingoSugar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.29 9.69 L 14.56 21.26 L 14.01 12.71 L 12.55 12.34 L 9.73 7.25 L 6.95 18.59 L 21.47 21.47" />
      <circle cx="20.29" cy="9.69" r="1.37" />
      <circle cx="14.56" cy="21.26" r="0.66" />
      <circle cx="14.01" cy="12.71" r="1.09" />
      <circle cx="12.55" cy="12.34" r="1.26" />
      <circle cx="9.73" cy="7.25" r="1.03" />
      <circle cx="6.95" cy="18.59" r="1.15" />
      <circle cx="21.47" cy="21.47" r="1.41" />
      {children}
    </svg>
  );
});

export default SphingoSugar;
