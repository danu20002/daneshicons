import React from 'react';

export const iconData = {
  "id": "ToloLeopard",
  "name": "ToloLeopard",
  "category": "LA",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.73"
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
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "1.03"
      }
    ]
  ]
};

export const ToloLeopard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.64" />
      <circle cx="6.00" cy="10.00" r="0.59" />
      <circle cx="6.00" cy="14.00" r="1.05" />
      <circle cx="6.00" cy="18.00" r="0.93" />
      <circle cx="10.00" cy="6.00" r="1.09" />
      <circle cx="10.00" cy="10.00" r="0.46" />
      <circle cx="10.00" cy="14.00" r="0.60" />
      <circle cx="10.00" cy="18.00" r="0.73" />
      <circle cx="14.00" cy="6.00" r="0.46" />
      <circle cx="14.00" cy="10.00" r="0.48" />
      <circle cx="14.00" cy="14.00" r="0.47" />
      <circle cx="14.00" cy="18.00" r="0.95" />
      <circle cx="18.00" cy="6.00" r="0.69" />
      <circle cx="18.00" cy="10.00" r="0.36" />
      <circle cx="18.00" cy="14.00" r="0.77" />
      <circle cx="18.00" cy="18.00" r="1.03" />
      {children}
    </svg>
  );
});

export default ToloLeopard;
