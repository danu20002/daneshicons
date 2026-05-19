import React from 'react';

export const iconData = {
  "id": "GeoDirt",
  "name": "GeoDirt",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.74 18.95 L 3.87 21.19 L 8.08 6.65 L 2.91 13.52 L 12.95 17.25 L 11.06 18.55 L 17.12 20.23"
      }
    ],
    [
      "circle",
      {
        "cx": "12.74",
        "cy": "18.95",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "3.87",
        "cy": "21.19",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "8.08",
        "cy": "6.65",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "2.91",
        "cy": "13.52",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "12.95",
        "cy": "17.25",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "11.06",
        "cy": "18.55",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "17.12",
        "cy": "20.23",
        "r": "1.22"
      }
    ]
  ]
};

export const GeoDirt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.74 18.95 L 3.87 21.19 L 8.08 6.65 L 2.91 13.52 L 12.95 17.25 L 11.06 18.55 L 17.12 20.23" />
      <circle cx="12.74" cy="18.95" r="0.56" />
      <circle cx="3.87" cy="21.19" r="0.90" />
      <circle cx="8.08" cy="6.65" r="0.71" />
      <circle cx="2.91" cy="13.52" r="1.46" />
      <circle cx="12.95" cy="17.25" r="1.50" />
      <circle cx="11.06" cy="18.55" r="1.21" />
      <circle cx="17.12" cy="20.23" r="1.22" />
      {children}
    </svg>
  );
});

export default GeoDirt;
