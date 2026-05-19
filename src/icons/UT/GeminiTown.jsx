import React from 'react';

export const iconData = {
  "id": "GeminiTown",
  "name": "GeminiTown",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.28 19.52 L 19.68 14.90 L 3.80 9.73 L 12.56 11.07 L 9.75 3.40 L 19.61 10.69 L 13.01 6.24"
      }
    ],
    [
      "circle",
      {
        "cx": "8.28",
        "cy": "19.52",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "19.68",
        "cy": "14.90",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "3.80",
        "cy": "9.73",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "12.56",
        "cy": "11.07",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "9.75",
        "cy": "3.40",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "19.61",
        "cy": "10.69",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "13.01",
        "cy": "6.24",
        "r": "1.10"
      }
    ]
  ]
};

export const GeminiTown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.28 19.52 L 19.68 14.90 L 3.80 9.73 L 12.56 11.07 L 9.75 3.40 L 19.61 10.69 L 13.01 6.24" />
      <circle cx="8.28" cy="19.52" r="0.89" />
      <circle cx="19.68" cy="14.90" r="0.90" />
      <circle cx="3.80" cy="9.73" r="1.28" />
      <circle cx="12.56" cy="11.07" r="1.20" />
      <circle cx="9.75" cy="3.40" r="1.02" />
      <circle cx="19.61" cy="10.69" r="0.84" />
      <circle cx="13.01" cy="6.24" r="1.10" />
      {children}
    </svg>
  );
});

export default GeminiTown;
