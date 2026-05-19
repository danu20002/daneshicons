import React from 'react';

export const iconData = {
  "id": "HeptaExult",
  "name": "HeptaExult",
  "category": "BN",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.97"
      }
    ]
  ]
};

export const HeptaExult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.67" />
      <circle cx="6.00" cy="10.00" r="0.81" />
      <circle cx="6.00" cy="14.00" r="0.62" />
      <circle cx="6.00" cy="18.00" r="0.87" />
      <circle cx="10.00" cy="6.00" r="0.81" />
      <circle cx="10.00" cy="10.00" r="1.03" />
      <circle cx="10.00" cy="14.00" r="0.37" />
      <circle cx="10.00" cy="18.00" r="0.60" />
      <circle cx="14.00" cy="6.00" r="0.68" />
      <circle cx="14.00" cy="10.00" r="0.63" />
      <circle cx="14.00" cy="14.00" r="0.60" />
      <circle cx="14.00" cy="18.00" r="0.33" />
      <circle cx="18.00" cy="6.00" r="0.53" />
      <circle cx="18.00" cy="10.00" r="0.43" />
      <circle cx="18.00" cy="14.00" r="0.87" />
      <circle cx="18.00" cy="18.00" r="0.97" />
      {children}
    </svg>
  );
});

export default HeptaExult;
