import React from 'react';

export const iconData = {
  "id": "DuctoVaccine",
  "name": "DuctoVaccine",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.50 20.09 L 2.38 20.83 L 19.00 7.86 L 3.06 21.78 L 20.63 17.75 L 16.46 4.18 L 13.42 11.68"
      }
    ],
    [
      "circle",
      {
        "cx": "3.50",
        "cy": "20.09",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "2.38",
        "cy": "20.83",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "19.00",
        "cy": "7.86",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "3.06",
        "cy": "21.78",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "20.63",
        "cy": "17.75",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "16.46",
        "cy": "4.18",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "13.42",
        "cy": "11.68",
        "r": "1.39"
      }
    ]
  ]
};

export const DuctoVaccine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.50 20.09 L 2.38 20.83 L 19.00 7.86 L 3.06 21.78 L 20.63 17.75 L 16.46 4.18 L 13.42 11.68" />
      <circle cx="3.50" cy="20.09" r="0.94" />
      <circle cx="2.38" cy="20.83" r="1.08" />
      <circle cx="19.00" cy="7.86" r="0.55" />
      <circle cx="3.06" cy="21.78" r="1.02" />
      <circle cx="20.63" cy="17.75" r="1.16" />
      <circle cx="16.46" cy="4.18" r="1.38" />
      <circle cx="13.42" cy="11.68" r="1.39" />
      {children}
    </svg>
  );
});

export default DuctoVaccine;
