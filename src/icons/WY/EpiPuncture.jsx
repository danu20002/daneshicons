import React from 'react';

export const iconData = {
  "id": "EpiPuncture",
  "name": "EpiPuncture",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.66 7.48 L 2.03 10.51 L 2.54 20.19 L 7.79 13.26"
      }
    ],
    [
      "circle",
      {
        "cx": "7.66",
        "cy": "7.48",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "2.03",
        "cy": "10.51",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "2.54",
        "cy": "20.19",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "7.79",
        "cy": "13.26",
        "r": "1.45"
      }
    ]
  ]
};

export const EpiPuncture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.66 7.48 L 2.03 10.51 L 2.54 20.19 L 7.79 13.26" />
      <circle cx="7.66" cy="7.48" r="0.71" />
      <circle cx="2.03" cy="10.51" r="0.53" />
      <circle cx="2.54" cy="20.19" r="0.55" />
      <circle cx="7.79" cy="13.26" r="1.45" />
      {children}
    </svg>
  );
});

export default EpiPuncture;
