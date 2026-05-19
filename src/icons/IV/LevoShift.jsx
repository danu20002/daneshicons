import React from 'react';

export const iconData = {
  "id": "LevoShift",
  "name": "LevoShift",
  "category": "IV",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.38"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "1.04"
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
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.31"
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
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.94"
      }
    ]
  ]
};

export const LevoShift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.38" />
      <circle cx="6.00" cy="10.00" r="1.04" />
      <circle cx="6.00" cy="14.00" r="1.06" />
      <circle cx="6.00" cy="18.00" r="0.98" />
      <circle cx="10.00" cy="6.00" r="0.31" />
      <circle cx="10.00" cy="10.00" r="0.40" />
      <circle cx="10.00" cy="14.00" r="0.48" />
      <circle cx="10.00" cy="18.00" r="0.43" />
      <circle cx="14.00" cy="6.00" r="0.42" />
      <circle cx="14.00" cy="10.00" r="0.36" />
      <circle cx="14.00" cy="14.00" r="0.75" />
      <circle cx="14.00" cy="18.00" r="0.34" />
      <circle cx="18.00" cy="6.00" r="0.57" />
      <circle cx="18.00" cy="10.00" r="0.54" />
      <circle cx="18.00" cy="14.00" r="0.81" />
      <circle cx="18.00" cy="18.00" r="0.94" />
      {children}
    </svg>
  );
});

export default LevoShift;
