import React from 'react';

export const iconData = {
  "id": "ParaSmell",
  "name": "ParaSmell",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.83 7.61 L 20.16 13.76 L 4.79 15.94 L 13.26 15.30 L 13.55 5.16 L 11.77 19.22 L 20.70 12.33"
      }
    ],
    [
      "circle",
      {
        "cx": "12.83",
        "cy": "7.61",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "20.16",
        "cy": "13.76",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "4.79",
        "cy": "15.94",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "13.26",
        "cy": "15.30",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "13.55",
        "cy": "5.16",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "11.77",
        "cy": "19.22",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "20.70",
        "cy": "12.33",
        "r": "1.32"
      }
    ]
  ]
};

export const ParaSmell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.83 7.61 L 20.16 13.76 L 4.79 15.94 L 13.26 15.30 L 13.55 5.16 L 11.77 19.22 L 20.70 12.33" />
      <circle cx="12.83" cy="7.61" r="0.95" />
      <circle cx="20.16" cy="13.76" r="0.93" />
      <circle cx="4.79" cy="15.94" r="1.08" />
      <circle cx="13.26" cy="15.30" r="1.03" />
      <circle cx="13.55" cy="5.16" r="1.43" />
      <circle cx="11.77" cy="19.22" r="0.88" />
      <circle cx="20.70" cy="12.33" r="1.32" />
      {children}
    </svg>
  );
});

export default ParaSmell;
