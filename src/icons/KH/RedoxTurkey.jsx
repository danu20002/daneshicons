import React from 'react';

export const iconData = {
  "id": "RedoxTurkey",
  "name": "RedoxTurkey",
  "category": "KH",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.39"
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
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.76"
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
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.54"
      }
    ]
  ]
};

export const RedoxTurkey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.45" />
      <circle cx="5.60" cy="8.80" r="0.58" />
      <circle cx="5.60" cy="12.00" r="0.42" />
      <circle cx="5.60" cy="15.20" r="0.90" />
      <circle cx="5.60" cy="18.40" r="0.43" />
      <circle cx="8.80" cy="5.60" r="0.66" />
      <circle cx="8.80" cy="8.80" r="0.96" />
      <circle cx="8.80" cy="12.00" r="0.93" />
      <circle cx="8.80" cy="15.20" r="0.79" />
      <circle cx="8.80" cy="18.40" r="0.31" />
      <circle cx="12.00" cy="5.60" r="0.56" />
      <circle cx="12.00" cy="8.80" r="0.39" />
      <circle cx="12.00" cy="12.00" r="0.69" />
      <circle cx="12.00" cy="15.20" r="0.82" />
      <circle cx="12.00" cy="18.40" r="0.65" />
      <circle cx="15.20" cy="5.60" r="0.59" />
      <circle cx="15.20" cy="8.80" r="0.37" />
      <circle cx="15.20" cy="12.00" r="0.76" />
      <circle cx="15.20" cy="15.20" r="0.54" />
      <circle cx="15.20" cy="18.40" r="0.87" />
      <circle cx="18.40" cy="5.60" r="0.83" />
      <circle cx="18.40" cy="8.80" r="0.64" />
      <circle cx="18.40" cy="12.00" r="0.64" />
      <circle cx="18.40" cy="15.20" r="1.02" />
      <circle cx="18.40" cy="18.40" r="0.54" />
      {children}
    </svg>
  );
});

export default RedoxTurkey;
