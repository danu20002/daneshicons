import React from 'react';

export const iconData = {
  "id": "TrulloProverb",
  "name": "TrulloProverb",
  "category": "VZ",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.53"
      }
    ]
  ]
};

export const TrulloProverb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.41" />
      <circle cx="6.00" cy="10.00" r="0.50" />
      <circle cx="6.00" cy="14.00" r="0.50" />
      <circle cx="6.00" cy="18.00" r="0.96" />
      <circle cx="10.00" cy="6.00" r="0.90" />
      <circle cx="10.00" cy="10.00" r="0.59" />
      <circle cx="10.00" cy="14.00" r="0.72" />
      <circle cx="10.00" cy="18.00" r="0.85" />
      <circle cx="14.00" cy="6.00" r="0.39" />
      <circle cx="14.00" cy="10.00" r="0.39" />
      <circle cx="14.00" cy="14.00" r="0.36" />
      <circle cx="14.00" cy="18.00" r="0.94" />
      <circle cx="18.00" cy="6.00" r="0.46" />
      <circle cx="18.00" cy="10.00" r="1.06" />
      <circle cx="18.00" cy="14.00" r="0.93" />
      <circle cx="18.00" cy="18.00" r="0.53" />
      {children}
    </svg>
  );
});

export default TrulloProverb;
