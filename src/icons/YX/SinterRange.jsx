import React from 'react';

export const iconData = {
  "id": "SinterRange",
  "name": "SinterRange",
  "category": "YX",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.71"
      }
    ]
  ]
};

export const SinterRange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="1.04" />
      <circle cx="5.60" cy="8.80" r="0.39" />
      <circle cx="5.60" cy="12.00" r="0.70" />
      <circle cx="5.60" cy="15.20" r="0.48" />
      <circle cx="5.60" cy="18.40" r="0.74" />
      <circle cx="8.80" cy="5.60" r="1.02" />
      <circle cx="8.80" cy="8.80" r="0.68" />
      <circle cx="8.80" cy="12.00" r="0.91" />
      <circle cx="8.80" cy="15.20" r="1.10" />
      <circle cx="8.80" cy="18.40" r="0.48" />
      <circle cx="12.00" cy="5.60" r="0.32" />
      <circle cx="12.00" cy="8.80" r="1.02" />
      <circle cx="12.00" cy="12.00" r="0.67" />
      <circle cx="12.00" cy="15.20" r="0.74" />
      <circle cx="12.00" cy="18.40" r="0.82" />
      <circle cx="15.20" cy="5.60" r="0.55" />
      <circle cx="15.20" cy="8.80" r="0.71" />
      <circle cx="15.20" cy="12.00" r="0.75" />
      <circle cx="15.20" cy="15.20" r="0.82" />
      <circle cx="15.20" cy="18.40" r="0.95" />
      <circle cx="18.40" cy="5.60" r="0.97" />
      <circle cx="18.40" cy="8.80" r="1.09" />
      <circle cx="18.40" cy="12.00" r="0.44" />
      <circle cx="18.40" cy="15.20" r="1.01" />
      <circle cx="18.40" cy="18.40" r="0.71" />
      {children}
    </svg>
  );
});

export default SinterRange;
