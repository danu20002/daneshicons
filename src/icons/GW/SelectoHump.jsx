import React from 'react';

export const iconData = {
  "id": "SelectoHump",
  "name": "SelectoHump",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 19.67 L 4.11 6.98 L 21.45 2.83 L 6.87 12.86 L 19.69 16.08 L 9.43 16.56 L 16.37 5.94"
      }
    ],
    [
      "circle",
      {
        "cx": "3.19",
        "cy": "19.67",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "4.11",
        "cy": "6.98",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "21.45",
        "cy": "2.83",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "6.87",
        "cy": "12.86",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "19.69",
        "cy": "16.08",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "9.43",
        "cy": "16.56",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "16.37",
        "cy": "5.94",
        "r": "1.46"
      }
    ]
  ]
};

export const SelectoHump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 19.67 L 4.11 6.98 L 21.45 2.83 L 6.87 12.86 L 19.69 16.08 L 9.43 16.56 L 16.37 5.94" />
      <circle cx="3.19" cy="19.67" r="1.46" />
      <circle cx="4.11" cy="6.98" r="1.12" />
      <circle cx="21.45" cy="2.83" r="1.28" />
      <circle cx="6.87" cy="12.86" r="0.73" />
      <circle cx="19.69" cy="16.08" r="1.41" />
      <circle cx="9.43" cy="16.56" r="1.07" />
      <circle cx="16.37" cy="5.94" r="1.46" />
      {children}
    </svg>
  );
});

export default SelectoHump;
