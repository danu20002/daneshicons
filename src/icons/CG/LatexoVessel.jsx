import React from 'react';

export const iconData = {
  "id": "LatexoVessel",
  "name": "LatexoVessel",
  "category": "CG",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.71"
      }
    ]
  ]
};

export const LatexoVessel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="1.00" />
      <circle cx="6.00" cy="10.00" r="0.34" />
      <circle cx="6.00" cy="14.00" r="0.55" />
      <circle cx="6.00" cy="18.00" r="0.90" />
      <circle cx="10.00" cy="6.00" r="0.40" />
      <circle cx="10.00" cy="10.00" r="0.62" />
      <circle cx="10.00" cy="14.00" r="0.46" />
      <circle cx="10.00" cy="18.00" r="0.82" />
      <circle cx="14.00" cy="6.00" r="0.87" />
      <circle cx="14.00" cy="10.00" r="0.32" />
      <circle cx="14.00" cy="14.00" r="0.99" />
      <circle cx="14.00" cy="18.00" r="0.98" />
      <circle cx="18.00" cy="6.00" r="0.60" />
      <circle cx="18.00" cy="10.00" r="1.03" />
      <circle cx="18.00" cy="14.00" r="0.85" />
      <circle cx="18.00" cy="18.00" r="0.71" />
      {children}
    </svg>
  );
});

export default LatexoVessel;
