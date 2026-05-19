import React from 'react';

export const iconData = {
  "id": "LuteoOption",
  "name": "LuteoOption",
  "category": "RP",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.53"
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
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.80"
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
        "r": "0.68"
      }
    ]
  ]
};

export const LuteoOption = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.49" />
      <circle cx="6.00" cy="10.00" r="0.99" />
      <circle cx="6.00" cy="14.00" r="0.45" />
      <circle cx="6.00" cy="18.00" r="0.53" />
      <circle cx="10.00" cy="6.00" r="0.87" />
      <circle cx="10.00" cy="10.00" r="1.05" />
      <circle cx="10.00" cy="14.00" r="0.40" />
      <circle cx="10.00" cy="18.00" r="0.72" />
      <circle cx="14.00" cy="6.00" r="0.73" />
      <circle cx="14.00" cy="10.00" r="0.95" />
      <circle cx="14.00" cy="14.00" r="0.42" />
      <circle cx="14.00" cy="18.00" r="0.73" />
      <circle cx="18.00" cy="6.00" r="1.05" />
      <circle cx="18.00" cy="10.00" r="0.80" />
      <circle cx="18.00" cy="14.00" r="0.31" />
      <circle cx="18.00" cy="18.00" r="0.68" />
      {children}
    </svg>
  );
});

export default LuteoOption;
