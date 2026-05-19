import React from 'react';

export const iconData = {
  "id": "ScorpiFlow",
  "name": "ScorpiFlow",
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
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.59"
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
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.79"
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
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "1.02"
      }
    ]
  ]
};

export const ScorpiFlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="8.80" r="0.41" />
      <circle cx="5.60" cy="12.00" r="1.02" />
      <circle cx="5.60" cy="15.20" r="0.84" />
      <circle cx="5.60" cy="18.40" r="1.09" />
      <circle cx="8.80" cy="5.60" r="0.97" />
      <circle cx="8.80" cy="8.80" r="0.50" />
      <circle cx="8.80" cy="12.00" r="0.64" />
      <circle cx="8.80" cy="15.20" r="0.50" />
      <circle cx="8.80" cy="18.40" r="0.32" />
      <circle cx="12.00" cy="5.60" r="0.78" />
      <circle cx="12.00" cy="8.80" r="1.07" />
      <circle cx="12.00" cy="12.00" r="0.58" />
      <circle cx="12.00" cy="15.20" r="1.07" />
      <circle cx="12.00" cy="18.40" r="0.59" />
      <circle cx="15.20" cy="5.60" r="0.86" />
      <circle cx="15.20" cy="8.80" r="0.39" />
      <circle cx="15.20" cy="12.00" r="1.08" />
      <circle cx="15.20" cy="15.20" r="0.94" />
      <circle cx="15.20" cy="18.40" r="0.45" />
      <circle cx="18.40" cy="5.60" r="0.79" />
      <circle cx="18.40" cy="8.80" r="0.37" />
      <circle cx="18.40" cy="12.00" r="0.73" />
      <circle cx="18.40" cy="15.20" r="1.00" />
      <circle cx="18.40" cy="18.40" r="1.02" />
      {children}
    </svg>
  );
});

export default ScorpiFlow;
