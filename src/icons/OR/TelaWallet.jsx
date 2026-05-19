import React from 'react';

export const iconData = {
  "id": "TelaWallet",
  "name": "TelaWallet",
  "category": "OR",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "1.02"
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
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.40"
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
        "r": "0.33"
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
        "r": "0.70"
      }
    ]
  ]
};

export const TelaWallet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.54" />
      <circle cx="6.00" cy="10.00" r="1.02" />
      <circle cx="6.00" cy="14.00" r="1.02" />
      <circle cx="6.00" cy="18.00" r="0.91" />
      <circle cx="10.00" cy="6.00" r="0.97" />
      <circle cx="10.00" cy="10.00" r="1.01" />
      <circle cx="10.00" cy="14.00" r="0.43" />
      <circle cx="10.00" cy="18.00" r="0.69" />
      <circle cx="14.00" cy="6.00" r="0.80" />
      <circle cx="14.00" cy="10.00" r="0.83" />
      <circle cx="14.00" cy="14.00" r="0.41" />
      <circle cx="14.00" cy="18.00" r="0.40" />
      <circle cx="18.00" cy="6.00" r="0.53" />
      <circle cx="18.00" cy="10.00" r="0.33" />
      <circle cx="18.00" cy="14.00" r="0.31" />
      <circle cx="18.00" cy="18.00" r="0.70" />
      {children}
    </svg>
  );
});

export default TelaWallet;
