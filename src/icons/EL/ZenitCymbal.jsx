import React from 'react';

export const iconData = {
  "id": "ZenitCymbal",
  "name": "ZenitCymbal",
  "category": "EL",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.86"
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
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.91"
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
        "r": "0.33"
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
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.41"
      }
    ]
  ]
};

export const ZenitCymbal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.87" />
      <circle cx="6.00" cy="10.00" r="0.37" />
      <circle cx="6.00" cy="14.00" r="0.86" />
      <circle cx="6.00" cy="18.00" r="0.45" />
      <circle cx="10.00" cy="6.00" r="0.52" />
      <circle cx="10.00" cy="10.00" r="0.91" />
      <circle cx="10.00" cy="14.00" r="0.63" />
      <circle cx="10.00" cy="18.00" r="0.33" />
      <circle cx="14.00" cy="6.00" r="0.96" />
      <circle cx="14.00" cy="10.00" r="0.55" />
      <circle cx="14.00" cy="14.00" r="0.96" />
      <circle cx="14.00" cy="18.00" r="0.87" />
      <circle cx="18.00" cy="6.00" r="0.30" />
      <circle cx="18.00" cy="10.00" r="0.81" />
      <circle cx="18.00" cy="14.00" r="0.79" />
      <circle cx="18.00" cy="18.00" r="0.41" />
      {children}
    </svg>
  );
});

export default ZenitCymbal;
