import React from 'react';

export const iconData = {
  "id": "QualiTrampoline",
  "name": "QualiTrampoline",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.01 4.93 L 16.87 13.37"
      }
    ],
    [
      "path",
      {
        "d": "M 16.87 13.37 L 12.51 11.55"
      }
    ],
    [
      "path",
      {
        "d": "M 12.51 11.55 L 13.12 4.76"
      }
    ],
    [
      "path",
      {
        "d": "M 13.11 12.79 L 13.12 4.76"
      }
    ],
    [
      "circle",
      {
        "cx": "17.01",
        "cy": "4.93",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.87",
        "cy": "13.37",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.51",
        "cy": "11.55",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.11",
        "cy": "12.79",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.12",
        "cy": "4.76",
        "r": "1.5"
      }
    ]
  ]
};

export const QualiTrampoline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.01 4.93 L 16.87 13.37" />
      <path d="M 16.87 13.37 L 12.51 11.55" />
      <path d="M 12.51 11.55 L 13.12 4.76" />
      <path d="M 13.11 12.79 L 13.12 4.76" />
      <circle cx="17.01" cy="4.93" r="1.5" />
      <circle cx="16.87" cy="13.37" r="1.5" />
      <circle cx="12.51" cy="11.55" r="1.5" />
      <circle cx="13.11" cy="12.79" r="1.5" />
      <circle cx="13.12" cy="4.76" r="1.5" />
      {children}
    </svg>
  );
});

export default QualiTrampoline;
