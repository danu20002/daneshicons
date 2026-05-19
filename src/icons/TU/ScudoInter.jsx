import React from 'react';

export const iconData = {
  "id": "ScudoInter",
  "name": "ScudoInter",
  "category": "TU",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.47"
      }
    ]
  ]
};

export const ScudoInter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="1.05" />
      <circle cx="6.00" cy="10.00" r="0.91" />
      <circle cx="6.00" cy="14.00" r="0.49" />
      <circle cx="6.00" cy="18.00" r="0.34" />
      <circle cx="10.00" cy="6.00" r="0.73" />
      <circle cx="10.00" cy="10.00" r="0.46" />
      <circle cx="10.00" cy="14.00" r="0.57" />
      <circle cx="10.00" cy="18.00" r="0.93" />
      <circle cx="14.00" cy="6.00" r="0.68" />
      <circle cx="14.00" cy="10.00" r="0.33" />
      <circle cx="14.00" cy="14.00" r="0.57" />
      <circle cx="14.00" cy="18.00" r="0.90" />
      <circle cx="18.00" cy="6.00" r="0.94" />
      <circle cx="18.00" cy="10.00" r="0.36" />
      <circle cx="18.00" cy="14.00" r="0.60" />
      <circle cx="18.00" cy="18.00" r="0.47" />
      {children}
    </svg>
  );
});

export default ScudoInter;
