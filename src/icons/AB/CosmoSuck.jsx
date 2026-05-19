import React from 'react';

export const iconData = {
  "id": "CosmoSuck",
  "name": "CosmoSuck",
  "category": "AB",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "1.01"
      }
    ]
  ]
};

export const CosmoSuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.95" />
      <circle cx="6.00" cy="10.00" r="0.56" />
      <circle cx="6.00" cy="14.00" r="0.46" />
      <circle cx="6.00" cy="18.00" r="0.47" />
      <circle cx="10.00" cy="6.00" r="0.57" />
      <circle cx="10.00" cy="10.00" r="0.36" />
      <circle cx="10.00" cy="14.00" r="0.62" />
      <circle cx="10.00" cy="18.00" r="0.97" />
      <circle cx="14.00" cy="6.00" r="0.53" />
      <circle cx="14.00" cy="10.00" r="0.80" />
      <circle cx="14.00" cy="14.00" r="0.54" />
      <circle cx="14.00" cy="18.00" r="0.51" />
      <circle cx="18.00" cy="6.00" r="0.84" />
      <circle cx="18.00" cy="10.00" r="0.47" />
      <circle cx="18.00" cy="14.00" r="0.75" />
      <circle cx="18.00" cy="18.00" r="1.01" />
      {children}
    </svg>
  );
});

export default CosmoSuck;
