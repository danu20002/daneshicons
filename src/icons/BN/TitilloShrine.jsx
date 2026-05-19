import React from 'react';

export const iconData = {
  "id": "TitilloShrine",
  "name": "TitilloShrine",
  "category": "BN",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.59"
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
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.79"
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
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.64"
      }
    ]
  ]
};

export const TitilloShrine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.89" />
      <circle cx="6.00" cy="10.00" r="1.07" />
      <circle cx="6.00" cy="14.00" r="0.59" />
      <circle cx="6.00" cy="18.00" r="0.98" />
      <circle cx="10.00" cy="6.00" r="0.44" />
      <circle cx="10.00" cy="10.00" r="0.52" />
      <circle cx="10.00" cy="14.00" r="0.79" />
      <circle cx="10.00" cy="18.00" r="0.81" />
      <circle cx="14.00" cy="6.00" r="0.94" />
      <circle cx="14.00" cy="10.00" r="0.92" />
      <circle cx="14.00" cy="14.00" r="0.40" />
      <circle cx="14.00" cy="18.00" r="0.31" />
      <circle cx="18.00" cy="6.00" r="1.04" />
      <circle cx="18.00" cy="10.00" r="0.32" />
      <circle cx="18.00" cy="14.00" r="0.75" />
      <circle cx="18.00" cy="18.00" r="0.64" />
      {children}
    </svg>
  );
});

export default TitilloShrine;
