import React from 'react';

export const iconData = {
  "id": "RegioSnail",
  "name": "RegioSnail",
  "category": "TU",
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
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.87"
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
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.48"
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
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.84"
      }
    ]
  ]
};

export const RegioSnail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="8.80" r="0.88" />
      <circle cx="5.60" cy="12.00" r="0.90" />
      <circle cx="5.60" cy="15.20" r="0.52" />
      <circle cx="5.60" cy="18.40" r="0.87" />
      <circle cx="8.80" cy="5.60" r="0.57" />
      <circle cx="8.80" cy="8.80" r="0.86" />
      <circle cx="8.80" cy="12.00" r="0.75" />
      <circle cx="8.80" cy="15.20" r="0.97" />
      <circle cx="8.80" cy="18.40" r="0.67" />
      <circle cx="12.00" cy="5.60" r="0.40" />
      <circle cx="12.00" cy="8.80" r="0.96" />
      <circle cx="12.00" cy="12.00" r="0.68" />
      <circle cx="12.00" cy="15.20" r="0.60" />
      <circle cx="12.00" cy="18.40" r="0.68" />
      <circle cx="15.20" cy="5.60" r="0.48" />
      <circle cx="15.20" cy="8.80" r="0.58" />
      <circle cx="15.20" cy="12.00" r="0.68" />
      <circle cx="15.20" cy="15.20" r="0.81" />
      <circle cx="15.20" cy="18.40" r="0.54" />
      <circle cx="18.40" cy="5.60" r="0.33" />
      <circle cx="18.40" cy="8.80" r="1.04" />
      <circle cx="18.40" cy="12.00" r="0.67" />
      <circle cx="18.40" cy="15.20" r="0.41" />
      <circle cx="18.40" cy="18.40" r="0.84" />
      {children}
    </svg>
  );
});

export default RegioSnail;
