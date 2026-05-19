import React from 'react';

export const iconData = {
  "id": "TrigonDitch",
  "name": "TrigonDitch",
  "category": "EL",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.79"
      }
    ]
  ]
};

export const TrigonDitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.43" />
      <circle cx="6.00" cy="10.00" r="0.46" />
      <circle cx="6.00" cy="14.00" r="0.68" />
      <circle cx="6.00" cy="18.00" r="0.81" />
      <circle cx="10.00" cy="6.00" r="0.55" />
      <circle cx="10.00" cy="10.00" r="1.09" />
      <circle cx="10.00" cy="14.00" r="0.65" />
      <circle cx="10.00" cy="18.00" r="0.77" />
      <circle cx="14.00" cy="6.00" r="0.69" />
      <circle cx="14.00" cy="10.00" r="1.00" />
      <circle cx="14.00" cy="14.00" r="0.73" />
      <circle cx="14.00" cy="18.00" r="0.88" />
      <circle cx="18.00" cy="6.00" r="0.98" />
      <circle cx="18.00" cy="10.00" r="0.95" />
      <circle cx="18.00" cy="14.00" r="0.55" />
      <circle cx="18.00" cy="18.00" r="0.79" />
      {children}
    </svg>
  );
});

export default TrigonDitch;
