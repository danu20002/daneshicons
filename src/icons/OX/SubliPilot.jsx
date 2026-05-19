import React from 'react';

export const iconData = {
  "id": "SubliPilot",
  "name": "SubliPilot",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.15 12.65 L 16.95 4.06 L 2.70 10.76 L 15.50 15.75 L 20.11 11.76 L 9.78 10.49 L 15.67 2.30"
      }
    ],
    [
      "circle",
      {
        "cx": "14.15",
        "cy": "12.65",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "16.95",
        "cy": "4.06",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "2.70",
        "cy": "10.76",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "15.50",
        "cy": "15.75",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "20.11",
        "cy": "11.76",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "9.78",
        "cy": "10.49",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "15.67",
        "cy": "2.30",
        "r": "0.81"
      }
    ]
  ]
};

export const SubliPilot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.15 12.65 L 16.95 4.06 L 2.70 10.76 L 15.50 15.75 L 20.11 11.76 L 9.78 10.49 L 15.67 2.30" />
      <circle cx="14.15" cy="12.65" r="1.17" />
      <circle cx="16.95" cy="4.06" r="0.91" />
      <circle cx="2.70" cy="10.76" r="1.31" />
      <circle cx="15.50" cy="15.75" r="0.69" />
      <circle cx="20.11" cy="11.76" r="1.48" />
      <circle cx="9.78" cy="10.49" r="1.00" />
      <circle cx="15.67" cy="2.30" r="0.81" />
      {children}
    </svg>
  );
});

export default SubliPilot;
