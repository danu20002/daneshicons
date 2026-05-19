import React from 'react';

export const iconData = {
  "id": "GraphoFall",
  "name": "GraphoFall",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.11 16.41 L 18.65 11.52 L 12.18 5.47 L 3.78 10.47 L 6.55 16.14 L 17.02 11.75 L 10.57 2.68 L 17.89 12.40"
      }
    ],
    [
      "circle",
      {
        "cx": "2.11",
        "cy": "16.41",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "18.65",
        "cy": "11.52",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "12.18",
        "cy": "5.47",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "3.78",
        "cy": "10.47",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "6.55",
        "cy": "16.14",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "17.02",
        "cy": "11.75",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "10.57",
        "cy": "2.68",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "17.89",
        "cy": "12.40",
        "r": "1.46"
      }
    ]
  ]
};

export const GraphoFall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.11 16.41 L 18.65 11.52 L 12.18 5.47 L 3.78 10.47 L 6.55 16.14 L 17.02 11.75 L 10.57 2.68 L 17.89 12.40" />
      <circle cx="2.11" cy="16.41" r="1.12" />
      <circle cx="18.65" cy="11.52" r="0.82" />
      <circle cx="12.18" cy="5.47" r="1.10" />
      <circle cx="3.78" cy="10.47" r="1.08" />
      <circle cx="6.55" cy="16.14" r="0.56" />
      <circle cx="17.02" cy="11.75" r="0.62" />
      <circle cx="10.57" cy="2.68" r="1.07" />
      <circle cx="17.89" cy="12.40" r="1.46" />
      {children}
    </svg>
  );
});

export default GraphoFall;
