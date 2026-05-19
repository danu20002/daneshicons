import React from 'react';

export const iconData = {
  "id": "ViticcioTerminal",
  "name": "ViticcioTerminal",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.87 18.45 L 14.14 11.37 L 5.43 6.58 L 4.79 12.03 L 12.56 18.34 L 11.02 14.39 L 5.70 14.79 L 17.37 19.39"
      }
    ],
    [
      "circle",
      {
        "cx": "11.87",
        "cy": "18.45",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "14.14",
        "cy": "11.37",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "5.43",
        "cy": "6.58",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "4.79",
        "cy": "12.03",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "12.56",
        "cy": "18.34",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "11.02",
        "cy": "14.39",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "5.70",
        "cy": "14.79",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "17.37",
        "cy": "19.39",
        "r": "1.16"
      }
    ]
  ]
};

export const ViticcioTerminal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.87 18.45 L 14.14 11.37 L 5.43 6.58 L 4.79 12.03 L 12.56 18.34 L 11.02 14.39 L 5.70 14.79 L 17.37 19.39" />
      <circle cx="11.87" cy="18.45" r="1.16" />
      <circle cx="14.14" cy="11.37" r="1.41" />
      <circle cx="5.43" cy="6.58" r="0.79" />
      <circle cx="4.79" cy="12.03" r="0.58" />
      <circle cx="12.56" cy="18.34" r="0.87" />
      <circle cx="11.02" cy="14.39" r="1.03" />
      <circle cx="5.70" cy="14.79" r="1.34" />
      <circle cx="17.37" cy="19.39" r="1.16" />
      {children}
    </svg>
  );
});

export default ViticcioTerminal;
