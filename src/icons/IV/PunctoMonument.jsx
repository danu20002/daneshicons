import React from 'react';

export const iconData = {
  "id": "PunctoMonument",
  "name": "PunctoMonument",
  "category": "IV",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.96"
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
        "r": "0.86"
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
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.93"
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
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.34"
      }
    ]
  ]
};

export const PunctoMonument = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.96" />
      <circle cx="6.00" cy="10.00" r="0.42" />
      <circle cx="6.00" cy="14.00" r="0.86" />
      <circle cx="6.00" cy="18.00" r="0.91" />
      <circle cx="10.00" cy="6.00" r="0.93" />
      <circle cx="10.00" cy="10.00" r="0.54" />
      <circle cx="10.00" cy="14.00" r="0.77" />
      <circle cx="10.00" cy="18.00" r="1.00" />
      <circle cx="14.00" cy="6.00" r="0.32" />
      <circle cx="14.00" cy="10.00" r="0.81" />
      <circle cx="14.00" cy="14.00" r="0.93" />
      <circle cx="14.00" cy="18.00" r="0.95" />
      <circle cx="18.00" cy="6.00" r="0.93" />
      <circle cx="18.00" cy="10.00" r="0.61" />
      <circle cx="18.00" cy="14.00" r="0.62" />
      <circle cx="18.00" cy="18.00" r="0.34" />
      {children}
    </svg>
  );
});

export default PunctoMonument;
