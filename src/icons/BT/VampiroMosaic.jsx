import React from 'react';

export const iconData = {
  "id": "VampiroMosaic",
  "name": "VampiroMosaic",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.81 7.22 L 14.57 15.63 L 8.13 18.87 L 18.08 20.65 L 21.71 3.37 L 7.73 10.91 L 5.27 20.24"
      }
    ],
    [
      "circle",
      {
        "cx": "13.81",
        "cy": "7.22",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "14.57",
        "cy": "15.63",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "8.13",
        "cy": "18.87",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "18.08",
        "cy": "20.65",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "21.71",
        "cy": "3.37",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "7.73",
        "cy": "10.91",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "5.27",
        "cy": "20.24",
        "r": "1.15"
      }
    ]
  ]
};

export const VampiroMosaic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.81 7.22 L 14.57 15.63 L 8.13 18.87 L 18.08 20.65 L 21.71 3.37 L 7.73 10.91 L 5.27 20.24" />
      <circle cx="13.81" cy="7.22" r="1.03" />
      <circle cx="14.57" cy="15.63" r="0.74" />
      <circle cx="8.13" cy="18.87" r="0.62" />
      <circle cx="18.08" cy="20.65" r="0.88" />
      <circle cx="21.71" cy="3.37" r="1.20" />
      <circle cx="7.73" cy="10.91" r="1.50" />
      <circle cx="5.27" cy="20.24" r="1.15" />
      {children}
    </svg>
  );
});

export default VampiroMosaic;
