import React from 'react';

export const iconData = {
  "id": "UricoMast",
  "name": "UricoMast",
  "category": "UN",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.94"
      }
    ]
  ]
};

export const UricoMast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.49" />
      <circle cx="6.00" cy="10.00" r="0.67" />
      <circle cx="6.00" cy="14.00" r="1.06" />
      <circle cx="6.00" cy="18.00" r="0.40" />
      <circle cx="10.00" cy="6.00" r="0.79" />
      <circle cx="10.00" cy="10.00" r="0.84" />
      <circle cx="10.00" cy="14.00" r="0.70" />
      <circle cx="10.00" cy="18.00" r="0.70" />
      <circle cx="14.00" cy="6.00" r="0.43" />
      <circle cx="14.00" cy="10.00" r="0.35" />
      <circle cx="14.00" cy="14.00" r="0.72" />
      <circle cx="14.00" cy="18.00" r="0.37" />
      <circle cx="18.00" cy="6.00" r="0.58" />
      <circle cx="18.00" cy="10.00" r="0.68" />
      <circle cx="18.00" cy="14.00" r="0.70" />
      <circle cx="18.00" cy="18.00" r="0.94" />
      {children}
    </svg>
  );
});

export default UricoMast;
