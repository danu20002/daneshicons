import React from 'react';

export const iconData = {
  "id": "VigoreTest",
  "name": "VigoreTest",
  "category": "I",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.35"
      }
    ]
  ]
};

export const VigoreTest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.33" />
      <circle cx="6.00" cy="10.00" r="0.92" />
      <circle cx="6.00" cy="14.00" r="1.02" />
      <circle cx="6.00" cy="18.00" r="0.45" />
      <circle cx="10.00" cy="6.00" r="0.80" />
      <circle cx="10.00" cy="10.00" r="0.37" />
      <circle cx="10.00" cy="14.00" r="0.77" />
      <circle cx="10.00" cy="18.00" r="0.90" />
      <circle cx="14.00" cy="6.00" r="0.77" />
      <circle cx="14.00" cy="10.00" r="1.03" />
      <circle cx="14.00" cy="14.00" r="0.91" />
      <circle cx="14.00" cy="18.00" r="0.36" />
      <circle cx="18.00" cy="6.00" r="0.55" />
      <circle cx="18.00" cy="10.00" r="0.59" />
      <circle cx="18.00" cy="14.00" r="0.31" />
      <circle cx="18.00" cy="18.00" r="0.35" />
      {children}
    </svg>
  );
});

export default VigoreTest;
