import React from 'react';

export const iconData = {
  "id": "QuebraNeighbor",
  "name": "QuebraNeighbor",
  "category": "QW",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.40"
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
        "r": "0.93"
      }
    ]
  ]
};

export const QuebraNeighbor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.95" />
      <circle cx="6.00" cy="10.00" r="0.87" />
      <circle cx="6.00" cy="14.00" r="0.55" />
      <circle cx="6.00" cy="18.00" r="1.02" />
      <circle cx="10.00" cy="6.00" r="0.87" />
      <circle cx="10.00" cy="10.00" r="0.71" />
      <circle cx="10.00" cy="14.00" r="0.63" />
      <circle cx="10.00" cy="18.00" r="0.41" />
      <circle cx="14.00" cy="6.00" r="0.36" />
      <circle cx="14.00" cy="10.00" r="0.91" />
      <circle cx="14.00" cy="14.00" r="0.78" />
      <circle cx="14.00" cy="18.00" r="0.59" />
      <circle cx="18.00" cy="6.00" r="1.00" />
      <circle cx="18.00" cy="10.00" r="0.40" />
      <circle cx="18.00" cy="14.00" r="0.70" />
      <circle cx="18.00" cy="18.00" r="0.93" />
      {children}
    </svg>
  );
});

export default QuebraNeighbor;
