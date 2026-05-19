import React from 'react';

export const iconData = {
  "id": "ZoologiaHeight",
  "name": "ZoologiaHeight",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.59 18.55 L 16.87 8.75 L 18.11 4.36 L 8.47 18.10 L 2.08 14.94 L 13.02 5.96 L 13.49 4.93"
      }
    ],
    [
      "circle",
      {
        "cx": "6.59",
        "cy": "18.55",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "16.87",
        "cy": "8.75",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "18.11",
        "cy": "4.36",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "8.47",
        "cy": "18.10",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "2.08",
        "cy": "14.94",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "13.02",
        "cy": "5.96",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "13.49",
        "cy": "4.93",
        "r": "1.43"
      }
    ]
  ]
};

export const ZoologiaHeight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.59 18.55 L 16.87 8.75 L 18.11 4.36 L 8.47 18.10 L 2.08 14.94 L 13.02 5.96 L 13.49 4.93" />
      <circle cx="6.59" cy="18.55" r="1.27" />
      <circle cx="16.87" cy="8.75" r="0.60" />
      <circle cx="18.11" cy="4.36" r="0.78" />
      <circle cx="8.47" cy="18.10" r="1.33" />
      <circle cx="2.08" cy="14.94" r="1.11" />
      <circle cx="13.02" cy="5.96" r="0.85" />
      <circle cx="13.49" cy="4.93" r="1.43" />
      {children}
    </svg>
  );
});

export default ZoologiaHeight;
