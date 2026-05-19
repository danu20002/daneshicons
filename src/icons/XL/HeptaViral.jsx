import React from 'react';

export const iconData = {
  "id": "HeptaViral",
  "name": "HeptaViral",
  "category": "XL",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.89"
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
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.86"
      }
    ]
  ]
};

export const HeptaViral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.57" />
      <circle cx="5.60" cy="8.80" r="0.98" />
      <circle cx="5.60" cy="12.00" r="0.67" />
      <circle cx="5.60" cy="15.20" r="1.08" />
      <circle cx="5.60" cy="18.40" r="0.99" />
      <circle cx="8.80" cy="5.60" r="0.60" />
      <circle cx="8.80" cy="8.80" r="0.60" />
      <circle cx="8.80" cy="12.00" r="0.57" />
      <circle cx="8.80" cy="15.20" r="0.71" />
      <circle cx="8.80" cy="18.40" r="0.86" />
      <circle cx="12.00" cy="5.60" r="0.89" />
      <circle cx="12.00" cy="8.80" r="0.74" />
      <circle cx="12.00" cy="12.00" r="1.01" />
      <circle cx="12.00" cy="15.20" r="0.81" />
      <circle cx="12.00" cy="18.40" r="1.08" />
      <circle cx="15.20" cy="5.60" r="0.75" />
      <circle cx="15.20" cy="8.80" r="0.61" />
      <circle cx="15.20" cy="12.00" r="0.40" />
      <circle cx="15.20" cy="15.20" r="0.61" />
      <circle cx="15.20" cy="18.40" r="1.09" />
      <circle cx="18.40" cy="5.60" r="0.57" />
      <circle cx="18.40" cy="8.80" r="0.85" />
      <circle cx="18.40" cy="12.00" r="0.76" />
      <circle cx="18.40" cy="15.20" r="0.48" />
      <circle cx="18.40" cy="18.40" r="0.86" />
      {children}
    </svg>
  );
});

export default HeptaViral;
