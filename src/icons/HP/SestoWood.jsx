import React from 'react';

export const iconData = {
  "id": "SestoWood",
  "name": "SestoWood",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.13 19.06 L 21.73 20.59 L 8.61 16.06 L 10.93 12.94 L 12.96 3.28 L 5.40 6.80 L 8.92 3.01 L 2.44 17.29"
      }
    ],
    [
      "circle",
      {
        "cx": "20.13",
        "cy": "19.06",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "21.73",
        "cy": "20.59",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "8.61",
        "cy": "16.06",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "10.93",
        "cy": "12.94",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "12.96",
        "cy": "3.28",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "5.40",
        "cy": "6.80",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "8.92",
        "cy": "3.01",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "2.44",
        "cy": "17.29",
        "r": "1.14"
      }
    ]
  ]
};

export const SestoWood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.13 19.06 L 21.73 20.59 L 8.61 16.06 L 10.93 12.94 L 12.96 3.28 L 5.40 6.80 L 8.92 3.01 L 2.44 17.29" />
      <circle cx="20.13" cy="19.06" r="1.45" />
      <circle cx="21.73" cy="20.59" r="1.08" />
      <circle cx="8.61" cy="16.06" r="1.41" />
      <circle cx="10.93" cy="12.94" r="1.32" />
      <circle cx="12.96" cy="3.28" r="0.52" />
      <circle cx="5.40" cy="6.80" r="0.79" />
      <circle cx="8.92" cy="3.01" r="0.87" />
      <circle cx="2.44" cy="17.29" r="1.14" />
      {children}
    </svg>
  );
});

export default SestoWood;
