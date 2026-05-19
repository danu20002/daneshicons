import React from 'react';

export const iconData = {
  "id": "SaturBar",
  "name": "SaturBar",
  "category": "OD",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.11 5.74 L 6.63 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 8.11 5.74 L 20.46 10.28"
      }
    ],
    [
      "path",
      {
        "d": "M 8.11 5.74 L 10.35 18.57"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 17.91 L 10.35 18.57"
      }
    ],
    [
      "circle",
      {
        "cx": "8.11",
        "cy": "5.74",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.63",
        "cy": "17.91",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.46",
        "cy": "10.28",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "10.35",
        "cy": "18.57",
        "r": "1.5"
      }
    ]
  ]
};

export const SaturBar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.11 5.74 L 6.63 17.91" />
      <path d="M 8.11 5.74 L 20.46 10.28" />
      <path d="M 8.11 5.74 L 10.35 18.57" />
      <path d="M 6.63 17.91 L 10.35 18.57" />
      <circle cx="8.11" cy="5.74" r="1.5" />
      <circle cx="6.63" cy="17.91" r="1.5" />
      <circle cx="20.46" cy="10.28" r="1.5" />
      <circle cx="10.35" cy="18.57" r="1.5" />
      {children}
    </svg>
  );
});

export default SaturBar;
