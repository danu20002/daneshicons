import React from 'react';

export const iconData = {
  "id": "VentoEssence",
  "name": "VentoEssence",
  "category": "BN",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.41"
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
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.53"
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
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.75"
      }
    ]
  ]
};

export const VentoEssence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.69" />
      <circle cx="6.00" cy="10.00" r="0.41" />
      <circle cx="6.00" cy="14.00" r="1.06" />
      <circle cx="6.00" cy="18.00" r="0.74" />
      <circle cx="10.00" cy="6.00" r="0.41" />
      <circle cx="10.00" cy="10.00" r="0.40" />
      <circle cx="10.00" cy="14.00" r="0.53" />
      <circle cx="10.00" cy="18.00" r="0.90" />
      <circle cx="14.00" cy="6.00" r="0.66" />
      <circle cx="14.00" cy="10.00" r="1.09" />
      <circle cx="14.00" cy="14.00" r="0.61" />
      <circle cx="14.00" cy="18.00" r="0.74" />
      <circle cx="18.00" cy="6.00" r="0.52" />
      <circle cx="18.00" cy="10.00" r="0.34" />
      <circle cx="18.00" cy="14.00" r="0.40" />
      <circle cx="18.00" cy="18.00" r="0.75" />
      {children}
    </svg>
  );
});

export default VentoEssence;
