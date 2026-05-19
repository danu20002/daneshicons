import React from 'react';

export const iconData = {
  "id": "GyroRespond",
  "name": "GyroRespond",
  "category": "DS",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "1.04"
      }
    ]
  ]
};

export const GyroRespond = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.37" />
      <circle cx="6.00" cy="10.00" r="0.73" />
      <circle cx="6.00" cy="14.00" r="0.46" />
      <circle cx="6.00" cy="18.00" r="1.05" />
      <circle cx="10.00" cy="6.00" r="0.67" />
      <circle cx="10.00" cy="10.00" r="1.00" />
      <circle cx="10.00" cy="14.00" r="1.07" />
      <circle cx="10.00" cy="18.00" r="0.78" />
      <circle cx="14.00" cy="6.00" r="0.58" />
      <circle cx="14.00" cy="10.00" r="0.52" />
      <circle cx="14.00" cy="14.00" r="0.72" />
      <circle cx="14.00" cy="18.00" r="0.97" />
      <circle cx="18.00" cy="6.00" r="0.74" />
      <circle cx="18.00" cy="10.00" r="0.53" />
      <circle cx="18.00" cy="14.00" r="1.09" />
      <circle cx="18.00" cy="18.00" r="1.04" />
      {children}
    </svg>
  );
});

export default GyroRespond;
