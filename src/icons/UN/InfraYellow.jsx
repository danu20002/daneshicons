import React from 'react';

export const iconData = {
  "id": "InfraYellow",
  "name": "InfraYellow",
  "category": "UN",
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
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.54"
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
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.62"
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
        "r": "0.41"
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
        "r": "0.89"
      }
    ]
  ]
};

export const InfraYellow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="10.00" r="1.08" />
      <circle cx="6.00" cy="14.00" r="0.54" />
      <circle cx="6.00" cy="18.00" r="0.45" />
      <circle cx="10.00" cy="6.00" r="0.77" />
      <circle cx="10.00" cy="10.00" r="0.39" />
      <circle cx="10.00" cy="14.00" r="0.76" />
      <circle cx="10.00" cy="18.00" r="0.84" />
      <circle cx="14.00" cy="6.00" r="0.86" />
      <circle cx="14.00" cy="10.00" r="0.86" />
      <circle cx="14.00" cy="14.00" r="0.62" />
      <circle cx="14.00" cy="18.00" r="0.62" />
      <circle cx="18.00" cy="6.00" r="0.55" />
      <circle cx="18.00" cy="10.00" r="0.41" />
      <circle cx="18.00" cy="14.00" r="0.40" />
      <circle cx="18.00" cy="18.00" r="0.89" />
      {children}
    </svg>
  );
});

export default InfraYellow;
