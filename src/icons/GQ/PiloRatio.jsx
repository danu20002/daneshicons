import React from 'react';

export const iconData = {
  "id": "PiloRatio",
  "name": "PiloRatio",
  "category": "GQ",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.72"
      }
    ]
  ]
};

export const PiloRatio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.74" />
      <circle cx="6.00" cy="10.00" r="0.58" />
      <circle cx="6.00" cy="14.00" r="0.51" />
      <circle cx="6.00" cy="18.00" r="0.88" />
      <circle cx="10.00" cy="6.00" r="0.59" />
      <circle cx="10.00" cy="10.00" r="0.69" />
      <circle cx="10.00" cy="14.00" r="1.07" />
      <circle cx="10.00" cy="18.00" r="0.50" />
      <circle cx="14.00" cy="6.00" r="0.36" />
      <circle cx="14.00" cy="10.00" r="0.37" />
      <circle cx="14.00" cy="14.00" r="0.89" />
      <circle cx="14.00" cy="18.00" r="0.72" />
      <circle cx="18.00" cy="6.00" r="0.47" />
      <circle cx="18.00" cy="10.00" r="0.32" />
      <circle cx="18.00" cy="14.00" r="0.33" />
      <circle cx="18.00" cy="18.00" r="0.72" />
      {children}
    </svg>
  );
});

export default PiloRatio;
