import React from 'react';

export const iconData = {
  "id": "VerismoTally",
  "name": "VerismoTally",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.02 21.92 L 6.11 15.48 L 15.69 7.95 L 14.36 21.04 L 17.31 21.65 L 10.16 15.73 L 9.12 15.94"
      }
    ],
    [
      "circle",
      {
        "cx": "11.02",
        "cy": "21.92",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "6.11",
        "cy": "15.48",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "15.69",
        "cy": "7.95",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "14.36",
        "cy": "21.04",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "17.31",
        "cy": "21.65",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "10.16",
        "cy": "15.73",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "9.12",
        "cy": "15.94",
        "r": "0.90"
      }
    ]
  ]
};

export const VerismoTally = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.02 21.92 L 6.11 15.48 L 15.69 7.95 L 14.36 21.04 L 17.31 21.65 L 10.16 15.73 L 9.12 15.94" />
      <circle cx="11.02" cy="21.92" r="0.72" />
      <circle cx="6.11" cy="15.48" r="0.65" />
      <circle cx="15.69" cy="7.95" r="0.72" />
      <circle cx="14.36" cy="21.04" r="0.90" />
      <circle cx="17.31" cy="21.65" r="1.04" />
      <circle cx="10.16" cy="15.73" r="1.02" />
      <circle cx="9.12" cy="15.94" r="0.90" />
      {children}
    </svg>
  );
});

export default VerismoTally;
