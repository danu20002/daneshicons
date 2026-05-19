import React from 'react';

export const iconData = {
  "id": "PusilloTheater",
  "name": "PusilloTheater",
  "category": "GQ",
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
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.30"
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
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.33"
      }
    ]
  ]
};

export const PusilloTheater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="10.00" r="0.55" />
      <circle cx="6.00" cy="14.00" r="0.36" />
      <circle cx="6.00" cy="18.00" r="0.74" />
      <circle cx="10.00" cy="6.00" r="0.79" />
      <circle cx="10.00" cy="10.00" r="0.30" />
      <circle cx="10.00" cy="14.00" r="1.07" />
      <circle cx="10.00" cy="18.00" r="0.81" />
      <circle cx="14.00" cy="6.00" r="0.36" />
      <circle cx="14.00" cy="10.00" r="0.35" />
      <circle cx="14.00" cy="14.00" r="0.66" />
      <circle cx="14.00" cy="18.00" r="1.02" />
      <circle cx="18.00" cy="6.00" r="0.66" />
      <circle cx="18.00" cy="10.00" r="1.01" />
      <circle cx="18.00" cy="14.00" r="0.96" />
      <circle cx="18.00" cy="18.00" r="0.33" />
      {children}
    </svg>
  );
});

export default PusilloTheater;
