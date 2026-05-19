import React from 'react';

export const iconData = {
  "id": "EliteSuggest",
  "name": "EliteSuggest",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.97 20.34 L 2.49 16.15 L 14.74 2.79 L 7.80 10.52 L 16.33 6.37 L 3.44 5.97 L 9.45 7.44 L 18.97 2.51"
      }
    ],
    [
      "circle",
      {
        "cx": "7.97",
        "cy": "20.34",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "2.49",
        "cy": "16.15",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "14.74",
        "cy": "2.79",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "7.80",
        "cy": "10.52",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "16.33",
        "cy": "6.37",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "3.44",
        "cy": "5.97",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "9.45",
        "cy": "7.44",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "18.97",
        "cy": "2.51",
        "r": "1.02"
      }
    ]
  ]
};

export const EliteSuggest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.97 20.34 L 2.49 16.15 L 14.74 2.79 L 7.80 10.52 L 16.33 6.37 L 3.44 5.97 L 9.45 7.44 L 18.97 2.51" />
      <circle cx="7.97" cy="20.34" r="0.70" />
      <circle cx="2.49" cy="16.15" r="1.28" />
      <circle cx="14.74" cy="2.79" r="0.72" />
      <circle cx="7.80" cy="10.52" r="1.41" />
      <circle cx="16.33" cy="6.37" r="1.34" />
      <circle cx="3.44" cy="5.97" r="1.34" />
      <circle cx="9.45" cy="7.44" r="0.52" />
      <circle cx="18.97" cy="2.51" r="1.02" />
      {children}
    </svg>
  );
});

export default EliteSuggest;
