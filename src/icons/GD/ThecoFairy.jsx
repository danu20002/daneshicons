import React from 'react';

export const iconData = {
  "id": "ThecoFairy",
  "name": "ThecoFairy",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.06 7.71 L 20.81 17.86 L 4.89 4.72 L 18.87 21.42 L 7.64 12.76 L 13.42 5.08 L 6.69 4.39 L 7.33 2.91"
      }
    ],
    [
      "circle",
      {
        "cx": "9.06",
        "cy": "7.71",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "20.81",
        "cy": "17.86",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "4.89",
        "cy": "4.72",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "18.87",
        "cy": "21.42",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "7.64",
        "cy": "12.76",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "13.42",
        "cy": "5.08",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "6.69",
        "cy": "4.39",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "7.33",
        "cy": "2.91",
        "r": "0.62"
      }
    ]
  ]
};

export const ThecoFairy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.06 7.71 L 20.81 17.86 L 4.89 4.72 L 18.87 21.42 L 7.64 12.76 L 13.42 5.08 L 6.69 4.39 L 7.33 2.91" />
      <circle cx="9.06" cy="7.71" r="0.94" />
      <circle cx="20.81" cy="17.86" r="0.66" />
      <circle cx="4.89" cy="4.72" r="0.64" />
      <circle cx="18.87" cy="21.42" r="1.17" />
      <circle cx="7.64" cy="12.76" r="1.06" />
      <circle cx="13.42" cy="5.08" r="1.21" />
      <circle cx="6.69" cy="4.39" r="0.54" />
      <circle cx="7.33" cy="2.91" r="0.62" />
      {children}
    </svg>
  );
});

export default ThecoFairy;
