import React from 'react';

export const iconData = {
  "id": "ResoSight",
  "name": "ResoSight",
  "category": "OR",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.75"
      }
    ]
  ]
};

export const ResoSight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.34" />
      <circle cx="6.00" cy="10.00" r="0.44" />
      <circle cx="6.00" cy="14.00" r="0.82" />
      <circle cx="6.00" cy="18.00" r="0.62" />
      <circle cx="10.00" cy="6.00" r="0.69" />
      <circle cx="10.00" cy="10.00" r="0.83" />
      <circle cx="10.00" cy="14.00" r="0.42" />
      <circle cx="10.00" cy="18.00" r="0.79" />
      <circle cx="14.00" cy="6.00" r="0.67" />
      <circle cx="14.00" cy="10.00" r="0.70" />
      <circle cx="14.00" cy="14.00" r="0.63" />
      <circle cx="14.00" cy="18.00" r="0.78" />
      <circle cx="18.00" cy="6.00" r="0.99" />
      <circle cx="18.00" cy="10.00" r="0.52" />
      <circle cx="18.00" cy="14.00" r="0.90" />
      <circle cx="18.00" cy="18.00" r="0.75" />
      {children}
    </svg>
  );
});

export default ResoSight;
