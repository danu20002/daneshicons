import React from 'react';

export const iconData = {
  "id": "TriploParcel",
  "name": "TriploParcel",
  "category": "LT",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.38"
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
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "1.03"
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
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.70"
      }
    ]
  ]
};

export const TriploParcel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.61" />
      <circle cx="5.60" cy="8.80" r="0.90" />
      <circle cx="5.60" cy="12.00" r="0.38" />
      <circle cx="5.60" cy="15.20" r="0.84" />
      <circle cx="5.60" cy="18.40" r="0.85" />
      <circle cx="8.80" cy="5.60" r="0.34" />
      <circle cx="8.80" cy="8.80" r="0.46" />
      <circle cx="8.80" cy="12.00" r="0.98" />
      <circle cx="8.80" cy="15.20" r="1.03" />
      <circle cx="8.80" cy="18.40" r="0.82" />
      <circle cx="12.00" cy="5.60" r="1.08" />
      <circle cx="12.00" cy="8.80" r="0.89" />
      <circle cx="12.00" cy="12.00" r="0.92" />
      <circle cx="12.00" cy="15.20" r="0.51" />
      <circle cx="12.00" cy="18.40" r="0.67" />
      <circle cx="15.20" cy="5.60" r="0.41" />
      <circle cx="15.20" cy="8.80" r="0.59" />
      <circle cx="15.20" cy="12.00" r="0.92" />
      <circle cx="15.20" cy="15.20" r="0.52" />
      <circle cx="15.20" cy="18.40" r="0.47" />
      <circle cx="18.40" cy="5.60" r="0.81" />
      <circle cx="18.40" cy="8.80" r="0.96" />
      <circle cx="18.40" cy="12.00" r="0.48" />
      <circle cx="18.40" cy="15.20" r="0.45" />
      <circle cx="18.40" cy="18.40" r="0.70" />
      {children}
    </svg>
  );
});

export default TriploParcel;
