import React from 'react';

export const iconData = {
  "id": "SurgePressure",
  "name": "SurgePressure",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.34 5.18 L 12.46 4.78 L 14.99 7.12 L 17.55 8.52 L 17.42 16.71 L 11.01 9.97"
      }
    ],
    [
      "circle",
      {
        "cx": "15.34",
        "cy": "5.18",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "12.46",
        "cy": "4.78",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "14.99",
        "cy": "7.12",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "17.55",
        "cy": "8.52",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "17.42",
        "cy": "16.71",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "11.01",
        "cy": "9.97",
        "r": "0.83"
      }
    ]
  ]
};

export const SurgePressure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.34 5.18 L 12.46 4.78 L 14.99 7.12 L 17.55 8.52 L 17.42 16.71 L 11.01 9.97" />
      <circle cx="15.34" cy="5.18" r="1.31" />
      <circle cx="12.46" cy="4.78" r="0.59" />
      <circle cx="14.99" cy="7.12" r="1.05" />
      <circle cx="17.55" cy="8.52" r="0.70" />
      <circle cx="17.42" cy="16.71" r="1.14" />
      <circle cx="11.01" cy="9.97" r="0.83" />
      {children}
    </svg>
  );
});

export default SurgePressure;
