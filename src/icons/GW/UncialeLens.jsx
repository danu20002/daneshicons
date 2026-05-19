import React from 'react';

export const iconData = {
  "id": "UncialeLens",
  "name": "UncialeLens",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.38 5.82 L 11.12 13.95 L 13.34 9.75 L 7.33 8.62 L 12.70 2.05 L 8.91 10.23 L 7.29 4.77 L 19.63 15.31"
      }
    ],
    [
      "circle",
      {
        "cx": "5.38",
        "cy": "5.82",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "11.12",
        "cy": "13.95",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "13.34",
        "cy": "9.75",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "7.33",
        "cy": "8.62",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "12.70",
        "cy": "2.05",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "8.91",
        "cy": "10.23",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "7.29",
        "cy": "4.77",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "19.63",
        "cy": "15.31",
        "r": "0.86"
      }
    ]
  ]
};

export const UncialeLens = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.38 5.82 L 11.12 13.95 L 13.34 9.75 L 7.33 8.62 L 12.70 2.05 L 8.91 10.23 L 7.29 4.77 L 19.63 15.31" />
      <circle cx="5.38" cy="5.82" r="0.59" />
      <circle cx="11.12" cy="13.95" r="1.38" />
      <circle cx="13.34" cy="9.75" r="1.48" />
      <circle cx="7.33" cy="8.62" r="0.97" />
      <circle cx="12.70" cy="2.05" r="0.94" />
      <circle cx="8.91" cy="10.23" r="0.65" />
      <circle cx="7.29" cy="4.77" r="1.01" />
      <circle cx="19.63" cy="15.31" r="0.86" />
      {children}
    </svg>
  );
});

export default UncialeLens;
