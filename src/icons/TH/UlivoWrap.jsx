import React from 'react';

export const iconData = {
  "id": "UlivoWrap",
  "name": "UlivoWrap",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.09 6.11 L 19.35 6.22 L 3.53 7.88 L 4.45 19.99 L 16.84 11.07 L 15.13 12.41 L 3.25 21.73 L 10.84 10.21"
      }
    ],
    [
      "circle",
      {
        "cx": "11.09",
        "cy": "6.11",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "19.35",
        "cy": "6.22",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "3.53",
        "cy": "7.88",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "4.45",
        "cy": "19.99",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "16.84",
        "cy": "11.07",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "15.13",
        "cy": "12.41",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "3.25",
        "cy": "21.73",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "10.84",
        "cy": "10.21",
        "r": "0.61"
      }
    ]
  ]
};

export const UlivoWrap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.09 6.11 L 19.35 6.22 L 3.53 7.88 L 4.45 19.99 L 16.84 11.07 L 15.13 12.41 L 3.25 21.73 L 10.84 10.21" />
      <circle cx="11.09" cy="6.11" r="1.47" />
      <circle cx="19.35" cy="6.22" r="1.43" />
      <circle cx="3.53" cy="7.88" r="0.75" />
      <circle cx="4.45" cy="19.99" r="0.59" />
      <circle cx="16.84" cy="11.07" r="1.18" />
      <circle cx="15.13" cy="12.41" r="0.60" />
      <circle cx="3.25" cy="21.73" r="0.98" />
      <circle cx="10.84" cy="10.21" r="0.61" />
      {children}
    </svg>
  );
});

export default UlivoWrap;
