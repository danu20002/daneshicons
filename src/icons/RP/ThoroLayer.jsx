import React from 'react';

export const iconData = {
  "id": "ThoroLayer",
  "name": "ThoroLayer",
  "category": "RP",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "1.03"
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
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.47"
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
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.73"
      }
    ]
  ]
};

export const ThoroLayer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.32" />
      <circle cx="5.60" cy="8.80" r="0.97" />
      <circle cx="5.60" cy="12.00" r="0.61" />
      <circle cx="5.60" cy="15.20" r="0.63" />
      <circle cx="5.60" cy="18.40" r="0.48" />
      <circle cx="8.80" cy="5.60" r="1.00" />
      <circle cx="8.80" cy="8.80" r="0.58" />
      <circle cx="8.80" cy="12.00" r="1.03" />
      <circle cx="8.80" cy="15.20" r="0.50" />
      <circle cx="8.80" cy="18.40" r="0.76" />
      <circle cx="12.00" cy="5.60" r="0.64" />
      <circle cx="12.00" cy="8.80" r="0.74" />
      <circle cx="12.00" cy="12.00" r="0.79" />
      <circle cx="12.00" cy="15.20" r="0.69" />
      <circle cx="12.00" cy="18.40" r="0.43" />
      <circle cx="15.20" cy="5.60" r="0.70" />
      <circle cx="15.20" cy="8.80" r="0.31" />
      <circle cx="15.20" cy="12.00" r="0.59" />
      <circle cx="15.20" cy="15.20" r="0.47" />
      <circle cx="15.20" cy="18.40" r="0.45" />
      <circle cx="18.40" cy="5.60" r="0.45" />
      <circle cx="18.40" cy="8.80" r="0.95" />
      <circle cx="18.40" cy="12.00" r="0.51" />
      <circle cx="18.40" cy="15.20" r="0.59" />
      <circle cx="18.40" cy="18.40" r="0.73" />
      {children}
    </svg>
  );
});

export default ThoroLayer;
