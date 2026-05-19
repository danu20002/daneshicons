import React from 'react';

export const iconData = {
  "id": "ScenarioRage",
  "name": "ScenarioRage",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.15 21.20 L 3.60 8.12 L 3.63 18.73 L 8.83 16.32 L 13.13 17.24 L 2.94 13.45 L 5.83 11.39"
      }
    ],
    [
      "circle",
      {
        "cx": "2.15",
        "cy": "21.20",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "3.60",
        "cy": "8.12",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "3.63",
        "cy": "18.73",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "8.83",
        "cy": "16.32",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "13.13",
        "cy": "17.24",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "2.94",
        "cy": "13.45",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "5.83",
        "cy": "11.39",
        "r": "1.22"
      }
    ]
  ]
};

export const ScenarioRage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.15 21.20 L 3.60 8.12 L 3.63 18.73 L 8.83 16.32 L 13.13 17.24 L 2.94 13.45 L 5.83 11.39" />
      <circle cx="2.15" cy="21.20" r="1.36" />
      <circle cx="3.60" cy="8.12" r="1.26" />
      <circle cx="3.63" cy="18.73" r="0.78" />
      <circle cx="8.83" cy="16.32" r="0.74" />
      <circle cx="13.13" cy="17.24" r="1.13" />
      <circle cx="2.94" cy="13.45" r="1.49" />
      <circle cx="5.83" cy="11.39" r="1.22" />
      {children}
    </svg>
  );
});

export default ScenarioRage;
