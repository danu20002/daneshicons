import React from 'react';

export const iconData = {
  "id": "EquiChamp",
  "name": "EquiChamp",
  "category": "HJ",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.62"
      }
    ]
  ]
};

export const EquiChamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.41" />
      <circle cx="5.60" cy="8.80" r="0.51" />
      <circle cx="5.60" cy="12.00" r="0.60" />
      <circle cx="5.60" cy="15.20" r="0.54" />
      <circle cx="5.60" cy="18.40" r="0.53" />
      <circle cx="8.80" cy="5.60" r="0.85" />
      <circle cx="8.80" cy="8.80" r="1.05" />
      <circle cx="8.80" cy="12.00" r="0.57" />
      <circle cx="8.80" cy="15.20" r="0.80" />
      <circle cx="8.80" cy="18.40" r="0.51" />
      <circle cx="12.00" cy="5.60" r="0.40" />
      <circle cx="12.00" cy="8.80" r="0.70" />
      <circle cx="12.00" cy="12.00" r="1.08" />
      <circle cx="12.00" cy="15.20" r="0.68" />
      <circle cx="12.00" cy="18.40" r="0.47" />
      <circle cx="15.20" cy="5.60" r="0.68" />
      <circle cx="15.20" cy="8.80" r="0.81" />
      <circle cx="15.20" cy="12.00" r="0.57" />
      <circle cx="15.20" cy="15.20" r="0.54" />
      <circle cx="15.20" cy="18.40" r="1.04" />
      <circle cx="18.40" cy="5.60" r="1.06" />
      <circle cx="18.40" cy="8.80" r="0.37" />
      <circle cx="18.40" cy="12.00" r="0.34" />
      <circle cx="18.40" cy="15.20" r="0.53" />
      <circle cx="18.40" cy="18.40" r="0.62" />
      {children}
    </svg>
  );
});

export default EquiChamp;
