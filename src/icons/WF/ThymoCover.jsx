import React from 'react';

export const iconData = {
  "id": "ThymoCover",
  "name": "ThymoCover",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.50 10.79 L 10.49 19.12 L 15.89 13.56 L 6.72 2.44 L 18.01 8.08 L 14.39 20.19 L 9.17 7.98 L 21.49 3.86"
      }
    ],
    [
      "circle",
      {
        "cx": "6.50",
        "cy": "10.79",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "10.49",
        "cy": "19.12",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "15.89",
        "cy": "13.56",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "6.72",
        "cy": "2.44",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "18.01",
        "cy": "8.08",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "14.39",
        "cy": "20.19",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "9.17",
        "cy": "7.98",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "21.49",
        "cy": "3.86",
        "r": "0.76"
      }
    ]
  ]
};

export const ThymoCover = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.50 10.79 L 10.49 19.12 L 15.89 13.56 L 6.72 2.44 L 18.01 8.08 L 14.39 20.19 L 9.17 7.98 L 21.49 3.86" />
      <circle cx="6.50" cy="10.79" r="1.03" />
      <circle cx="10.49" cy="19.12" r="0.93" />
      <circle cx="15.89" cy="13.56" r="0.84" />
      <circle cx="6.72" cy="2.44" r="0.74" />
      <circle cx="18.01" cy="8.08" r="1.40" />
      <circle cx="14.39" cy="20.19" r="0.93" />
      <circle cx="9.17" cy="7.98" r="1.27" />
      <circle cx="21.49" cy="3.86" r="0.76" />
      {children}
    </svg>
  );
});

export default ThymoCover;
