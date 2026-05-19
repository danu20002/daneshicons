import React from 'react';

export const iconData = {
  "id": "ValoreRectify",
  "name": "ValoreRectify",
  "category": "TB",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.70"
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
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.96"
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
        "r": "0.45"
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
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.88"
      }
    ]
  ]
};

export const ValoreRectify = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.85" />
      <circle cx="6.00" cy="10.00" r="1.01" />
      <circle cx="6.00" cy="14.00" r="0.93" />
      <circle cx="6.00" cy="18.00" r="0.36" />
      <circle cx="10.00" cy="6.00" r="0.32" />
      <circle cx="10.00" cy="10.00" r="0.70" />
      <circle cx="10.00" cy="14.00" r="0.91" />
      <circle cx="10.00" cy="18.00" r="1.04" />
      <circle cx="14.00" cy="6.00" r="0.96" />
      <circle cx="14.00" cy="10.00" r="0.35" />
      <circle cx="14.00" cy="14.00" r="0.45" />
      <circle cx="14.00" cy="18.00" r="0.37" />
      <circle cx="18.00" cy="6.00" r="0.81" />
      <circle cx="18.00" cy="10.00" r="0.50" />
      <circle cx="18.00" cy="14.00" r="1.04" />
      <circle cx="18.00" cy="18.00" r="0.88" />
      {children}
    </svg>
  );
});

export default ValoreRectify;
