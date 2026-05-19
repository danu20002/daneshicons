import React from 'react';

export const iconData = {
  "id": "VulpinVector",
  "name": "VulpinVector",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.40 7.51 L 7.31 4.29 L 5.95 8.60 L 17.44 19.39 L 3.39 10.51 L 11.38 12.47 L 7.45 19.69 L 11.93 5.37"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "7.51",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "7.31",
        "cy": "4.29",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "5.95",
        "cy": "8.60",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "17.44",
        "cy": "19.39",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "3.39",
        "cy": "10.51",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "11.38",
        "cy": "12.47",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "7.45",
        "cy": "19.69",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "11.93",
        "cy": "5.37",
        "r": "1.10"
      }
    ]
  ]
};

export const VulpinVector = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.40 7.51 L 7.31 4.29 L 5.95 8.60 L 17.44 19.39 L 3.39 10.51 L 11.38 12.47 L 7.45 19.69 L 11.93 5.37" />
      <circle cx="18.40" cy="7.51" r="1.47" />
      <circle cx="7.31" cy="4.29" r="0.97" />
      <circle cx="5.95" cy="8.60" r="1.11" />
      <circle cx="17.44" cy="19.39" r="1.31" />
      <circle cx="3.39" cy="10.51" r="0.78" />
      <circle cx="11.38" cy="12.47" r="1.38" />
      <circle cx="7.45" cy="19.69" r="1.14" />
      <circle cx="11.93" cy="5.37" r="1.10" />
      {children}
    </svg>
  );
});

export default VulpinVector;
