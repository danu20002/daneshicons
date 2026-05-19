import React from 'react';

export const iconData = {
  "id": "TweedHorn",
  "name": "TweedHorn",
  "category": "ZQ",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.98"
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
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.56"
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
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.60"
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

export const TweedHorn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="1.02" />
      <circle cx="5.60" cy="8.80" r="0.82" />
      <circle cx="5.60" cy="12.00" r="0.78" />
      <circle cx="5.60" cy="15.20" r="0.64" />
      <circle cx="5.60" cy="18.40" r="0.98" />
      <circle cx="8.80" cy="5.60" r="0.66" />
      <circle cx="8.80" cy="8.80" r="0.65" />
      <circle cx="8.80" cy="12.00" r="0.34" />
      <circle cx="8.80" cy="15.20" r="0.58" />
      <circle cx="8.80" cy="18.40" r="0.77" />
      <circle cx="12.00" cy="5.60" r="0.88" />
      <circle cx="12.00" cy="8.80" r="0.56" />
      <circle cx="12.00" cy="12.00" r="0.79" />
      <circle cx="12.00" cy="15.20" r="0.91" />
      <circle cx="12.00" cy="18.40" r="0.49" />
      <circle cx="15.20" cy="5.60" r="1.09" />
      <circle cx="15.20" cy="8.80" r="0.53" />
      <circle cx="15.20" cy="12.00" r="0.81" />
      <circle cx="15.20" cy="15.20" r="0.70" />
      <circle cx="15.20" cy="18.40" r="0.65" />
      <circle cx="18.40" cy="5.60" r="0.97" />
      <circle cx="18.40" cy="8.80" r="0.62" />
      <circle cx="18.40" cy="12.00" r="0.55" />
      <circle cx="18.40" cy="15.20" r="0.60" />
      <circle cx="18.40" cy="18.40" r="0.70" />
      {children}
    </svg>
  );
});

export default TweedHorn;
