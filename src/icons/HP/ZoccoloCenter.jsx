import React from 'react';

export const iconData = {
  "id": "ZoccoloCenter",
  "name": "ZoccoloCenter",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.04 12.22 L 10.17 7.53 L 17.37 10.48 L 13.20 15.09 L 6.49 18.41 L 13.34 12.21"
      }
    ],
    [
      "circle",
      {
        "cx": "12.04",
        "cy": "12.22",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "10.17",
        "cy": "7.53",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "17.37",
        "cy": "10.48",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "13.20",
        "cy": "15.09",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "6.49",
        "cy": "18.41",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "13.34",
        "cy": "12.21",
        "r": "1.44"
      }
    ]
  ]
};

export const ZoccoloCenter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.04 12.22 L 10.17 7.53 L 17.37 10.48 L 13.20 15.09 L 6.49 18.41 L 13.34 12.21" />
      <circle cx="12.04" cy="12.22" r="0.82" />
      <circle cx="10.17" cy="7.53" r="1.28" />
      <circle cx="17.37" cy="10.48" r="0.83" />
      <circle cx="13.20" cy="15.09" r="1.12" />
      <circle cx="6.49" cy="18.41" r="1.07" />
      <circle cx="13.34" cy="12.21" r="1.44" />
      {children}
    </svg>
  );
});

export default ZoccoloCenter;
