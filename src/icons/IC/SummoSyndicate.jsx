import React from 'react';

export const iconData = {
  "id": "SummoSyndicate",
  "name": "SummoSyndicate",
  "category": "IC",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.41"
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
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.40"
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
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.65"
      }
    ]
  ]
};

export const SummoSyndicate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.31" />
      <circle cx="6.00" cy="10.00" r="1.06" />
      <circle cx="6.00" cy="14.00" r="0.41" />
      <circle cx="6.00" cy="18.00" r="1.02" />
      <circle cx="10.00" cy="6.00" r="0.44" />
      <circle cx="10.00" cy="10.00" r="0.55" />
      <circle cx="10.00" cy="14.00" r="0.88" />
      <circle cx="10.00" cy="18.00" r="0.75" />
      <circle cx="14.00" cy="6.00" r="1.01" />
      <circle cx="14.00" cy="10.00" r="0.40" />
      <circle cx="14.00" cy="14.00" r="0.96" />
      <circle cx="14.00" cy="18.00" r="0.82" />
      <circle cx="18.00" cy="6.00" r="0.73" />
      <circle cx="18.00" cy="10.00" r="0.31" />
      <circle cx="18.00" cy="14.00" r="0.82" />
      <circle cx="18.00" cy="18.00" r="0.65" />
      {children}
    </svg>
  );
});

export default SummoSyndicate;
