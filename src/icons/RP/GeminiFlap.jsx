import React from 'react';

export const iconData = {
  "id": "GeminiFlap",
  "name": "GeminiFlap",
  "category": "RP",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.38"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.90"
      }
    ]
  ]
};

export const GeminiFlap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="1.09" />
      <circle cx="5.60" cy="8.80" r="0.42" />
      <circle cx="5.60" cy="12.00" r="0.88" />
      <circle cx="5.60" cy="15.20" r="0.93" />
      <circle cx="5.60" cy="18.40" r="0.37" />
      <circle cx="8.80" cy="5.60" r="0.57" />
      <circle cx="8.80" cy="8.80" r="0.70" />
      <circle cx="8.80" cy="12.00" r="0.40" />
      <circle cx="8.80" cy="15.20" r="0.35" />
      <circle cx="8.80" cy="18.40" r="0.82" />
      <circle cx="12.00" cy="5.60" r="0.92" />
      <circle cx="12.00" cy="8.80" r="0.52" />
      <circle cx="12.00" cy="12.00" r="0.56" />
      <circle cx="12.00" cy="15.20" r="1.03" />
      <circle cx="12.00" cy="18.40" r="0.38" />
      <circle cx="15.20" cy="5.60" r="1.08" />
      <circle cx="15.20" cy="8.80" r="0.35" />
      <circle cx="15.20" cy="12.00" r="0.93" />
      <circle cx="15.20" cy="15.20" r="0.88" />
      <circle cx="15.20" cy="18.40" r="0.59" />
      <circle cx="18.40" cy="5.60" r="0.68" />
      <circle cx="18.40" cy="8.80" r="0.66" />
      <circle cx="18.40" cy="12.00" r="0.39" />
      <circle cx="18.40" cy="15.20" r="0.40" />
      <circle cx="18.40" cy="18.40" r="0.90" />
      {children}
    </svg>
  );
});

export default GeminiFlap;
