import React from 'react';

export const iconData = {
  "id": "TragicoLotus",
  "name": "TragicoLotus",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.42 17.55 L 4.93 15.76 L 14.23 13.89 L 14.91 10.46 L 3.52 7.70 L 16.31 3.64 L 9.02 20.73"
      }
    ],
    [
      "circle",
      {
        "cx": "14.42",
        "cy": "17.55",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "4.93",
        "cy": "15.76",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "14.23",
        "cy": "13.89",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "14.91",
        "cy": "10.46",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "3.52",
        "cy": "7.70",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "16.31",
        "cy": "3.64",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "9.02",
        "cy": "20.73",
        "r": "0.75"
      }
    ]
  ]
};

export const TragicoLotus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.42 17.55 L 4.93 15.76 L 14.23 13.89 L 14.91 10.46 L 3.52 7.70 L 16.31 3.64 L 9.02 20.73" />
      <circle cx="14.42" cy="17.55" r="1.10" />
      <circle cx="4.93" cy="15.76" r="1.28" />
      <circle cx="14.23" cy="13.89" r="1.24" />
      <circle cx="14.91" cy="10.46" r="0.96" />
      <circle cx="3.52" cy="7.70" r="1.27" />
      <circle cx="16.31" cy="3.64" r="0.57" />
      <circle cx="9.02" cy="20.73" r="0.75" />
      {children}
    </svg>
  );
});

export default TragicoLotus;
