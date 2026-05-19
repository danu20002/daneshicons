import React from 'react';

export const iconData = {
  "id": "TaphoCharter",
  "name": "TaphoCharter",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.78 11.90 L 4.34 9.65 L 5.11 3.00 L 7.28 20.62 L 17.27 9.39"
      }
    ],
    [
      "circle",
      {
        "cx": "15.78",
        "cy": "11.90",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "4.34",
        "cy": "9.65",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "5.11",
        "cy": "3.00",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "7.28",
        "cy": "20.62",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "17.27",
        "cy": "9.39",
        "r": "0.97"
      }
    ]
  ]
};

export const TaphoCharter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.78 11.90 L 4.34 9.65 L 5.11 3.00 L 7.28 20.62 L 17.27 9.39" />
      <circle cx="15.78" cy="11.90" r="0.89" />
      <circle cx="4.34" cy="9.65" r="1.43" />
      <circle cx="5.11" cy="3.00" r="0.68" />
      <circle cx="7.28" cy="20.62" r="1.21" />
      <circle cx="17.27" cy="9.39" r="0.97" />
      {children}
    </svg>
  );
});

export default TaphoCharter;
