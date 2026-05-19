import React from 'react';

export const iconData = {
  "id": "RufoHaste",
  "name": "RufoHaste",
  "category": "QW",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.38"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.82"
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
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.87"
      }
    ]
  ]
};

export const RufoHaste = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.71" />
      <circle cx="5.60" cy="8.80" r="0.45" />
      <circle cx="5.60" cy="12.00" r="0.74" />
      <circle cx="5.60" cy="15.20" r="1.02" />
      <circle cx="5.60" cy="18.40" r="0.38" />
      <circle cx="8.80" cy="5.60" r="0.95" />
      <circle cx="8.80" cy="8.80" r="0.41" />
      <circle cx="8.80" cy="12.00" r="0.87" />
      <circle cx="8.80" cy="15.20" r="0.89" />
      <circle cx="8.80" cy="18.40" r="0.33" />
      <circle cx="12.00" cy="5.60" r="0.37" />
      <circle cx="12.00" cy="8.80" r="0.32" />
      <circle cx="12.00" cy="12.00" r="0.80" />
      <circle cx="12.00" cy="15.20" r="0.78" />
      <circle cx="12.00" cy="18.40" r="0.88" />
      <circle cx="15.20" cy="5.60" r="0.86" />
      <circle cx="15.20" cy="8.80" r="0.84" />
      <circle cx="15.20" cy="12.00" r="0.46" />
      <circle cx="15.20" cy="15.20" r="0.30" />
      <circle cx="15.20" cy="18.40" r="0.73" />
      <circle cx="18.40" cy="5.60" r="0.87" />
      <circle cx="18.40" cy="8.80" r="0.82" />
      <circle cx="18.40" cy="12.00" r="0.44" />
      <circle cx="18.40" cy="15.20" r="0.61" />
      <circle cx="18.40" cy="18.40" r="0.87" />
      {children}
    </svg>
  );
});

export default RufoHaste;
