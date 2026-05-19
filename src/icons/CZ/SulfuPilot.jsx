import React from 'react';

export const iconData = {
  "id": "SulfuPilot",
  "name": "SulfuPilot",
  "category": "CZ",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "1.10"
      }
    ]
  ]
};

export const SulfuPilot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.66" />
      <circle cx="6.00" cy="10.00" r="0.72" />
      <circle cx="6.00" cy="14.00" r="0.93" />
      <circle cx="6.00" cy="18.00" r="0.98" />
      <circle cx="10.00" cy="6.00" r="0.95" />
      <circle cx="10.00" cy="10.00" r="1.02" />
      <circle cx="10.00" cy="14.00" r="1.01" />
      <circle cx="10.00" cy="18.00" r="0.62" />
      <circle cx="14.00" cy="6.00" r="0.67" />
      <circle cx="14.00" cy="10.00" r="0.54" />
      <circle cx="14.00" cy="14.00" r="0.46" />
      <circle cx="14.00" cy="18.00" r="0.33" />
      <circle cx="18.00" cy="6.00" r="0.61" />
      <circle cx="18.00" cy="10.00" r="0.50" />
      <circle cx="18.00" cy="14.00" r="0.37" />
      <circle cx="18.00" cy="18.00" r="1.10" />
      {children}
    </svg>
  );
});

export default SulfuPilot;
