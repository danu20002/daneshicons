import React from 'react';

export const iconData = {
  "id": "PurpuraMesh",
  "name": "PurpuraMesh",
  "category": "AU",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.38"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.55"
      }
    ]
  ]
};

export const PurpuraMesh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.38" />
      <circle cx="6.00" cy="10.00" r="0.44" />
      <circle cx="6.00" cy="14.00" r="0.96" />
      <circle cx="6.00" cy="18.00" r="0.35" />
      <circle cx="10.00" cy="6.00" r="0.37" />
      <circle cx="10.00" cy="10.00" r="0.43" />
      <circle cx="10.00" cy="14.00" r="0.91" />
      <circle cx="10.00" cy="18.00" r="1.07" />
      <circle cx="14.00" cy="6.00" r="0.74" />
      <circle cx="14.00" cy="10.00" r="0.65" />
      <circle cx="14.00" cy="14.00" r="0.49" />
      <circle cx="14.00" cy="18.00" r="0.76" />
      <circle cx="18.00" cy="6.00" r="0.62" />
      <circle cx="18.00" cy="10.00" r="0.74" />
      <circle cx="18.00" cy="14.00" r="0.81" />
      <circle cx="18.00" cy="18.00" r="0.55" />
      {children}
    </svg>
  );
});

export default PurpuraMesh;
