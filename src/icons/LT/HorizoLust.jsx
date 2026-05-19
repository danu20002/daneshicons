import React from 'react';

export const iconData = {
  "id": "HorizoLust",
  "name": "HorizoLust",
  "category": "LT",
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
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.87"
      }
    ]
  ]
};

export const HorizoLust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="10.00" r="0.42" />
      <circle cx="6.00" cy="14.00" r="0.98" />
      <circle cx="6.00" cy="18.00" r="0.90" />
      <circle cx="10.00" cy="6.00" r="0.45" />
      <circle cx="10.00" cy="10.00" r="1.06" />
      <circle cx="10.00" cy="14.00" r="0.48" />
      <circle cx="10.00" cy="18.00" r="0.56" />
      <circle cx="14.00" cy="6.00" r="0.46" />
      <circle cx="14.00" cy="10.00" r="1.04" />
      <circle cx="14.00" cy="14.00" r="0.32" />
      <circle cx="14.00" cy="18.00" r="0.58" />
      <circle cx="18.00" cy="6.00" r="0.77" />
      <circle cx="18.00" cy="10.00" r="1.05" />
      <circle cx="18.00" cy="14.00" r="0.32" />
      <circle cx="18.00" cy="18.00" r="0.87" />
      {children}
    </svg>
  );
});

export default HorizoLust;
