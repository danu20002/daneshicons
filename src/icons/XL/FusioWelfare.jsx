import React from 'react';

export const iconData = {
  "id": "FusioWelfare",
  "name": "FusioWelfare",
  "category": "XL",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.52"
      }
    ]
  ]
};

export const FusioWelfare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.78" />
      <circle cx="5.60" cy="8.80" r="0.37" />
      <circle cx="5.60" cy="12.00" r="0.33" />
      <circle cx="5.60" cy="15.20" r="0.66" />
      <circle cx="5.60" cy="18.40" r="0.58" />
      <circle cx="8.80" cy="5.60" r="0.72" />
      <circle cx="8.80" cy="8.80" r="0.76" />
      <circle cx="8.80" cy="12.00" r="1.01" />
      <circle cx="8.80" cy="15.20" r="0.85" />
      <circle cx="8.80" cy="18.40" r="0.66" />
      <circle cx="12.00" cy="5.60" r="0.70" />
      <circle cx="12.00" cy="8.80" r="0.64" />
      <circle cx="12.00" cy="12.00" r="0.69" />
      <circle cx="12.00" cy="15.20" r="0.34" />
      <circle cx="12.00" cy="18.40" r="0.50" />
      <circle cx="15.20" cy="5.60" r="0.39" />
      <circle cx="15.20" cy="8.80" r="0.58" />
      <circle cx="15.20" cy="12.00" r="0.67" />
      <circle cx="15.20" cy="15.20" r="0.79" />
      <circle cx="15.20" cy="18.40" r="0.74" />
      <circle cx="18.40" cy="5.60" r="0.62" />
      <circle cx="18.40" cy="8.80" r="0.67" />
      <circle cx="18.40" cy="12.00" r="0.66" />
      <circle cx="18.40" cy="15.20" r="0.64" />
      <circle cx="18.40" cy="18.40" r="0.52" />
      {children}
    </svg>
  );
});

export default FusioWelfare;
