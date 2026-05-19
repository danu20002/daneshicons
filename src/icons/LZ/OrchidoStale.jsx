import React from 'react';

export const iconData = {
  "id": "OrchidoStale",
  "name": "OrchidoStale",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.05 15.78 L 19.61 2.37 L 3.74 13.81 L 19.66 4.21 L 14.49 20.30 L 10.06 4.73"
      }
    ],
    [
      "circle",
      {
        "cx": "16.05",
        "cy": "15.78",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "19.61",
        "cy": "2.37",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "3.74",
        "cy": "13.81",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "19.66",
        "cy": "4.21",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "14.49",
        "cy": "20.30",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "10.06",
        "cy": "4.73",
        "r": "1.21"
      }
    ]
  ]
};

export const OrchidoStale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.05 15.78 L 19.61 2.37 L 3.74 13.81 L 19.66 4.21 L 14.49 20.30 L 10.06 4.73" />
      <circle cx="16.05" cy="15.78" r="0.76" />
      <circle cx="19.61" cy="2.37" r="0.57" />
      <circle cx="3.74" cy="13.81" r="1.34" />
      <circle cx="19.66" cy="4.21" r="1.04" />
      <circle cx="14.49" cy="20.30" r="0.72" />
      <circle cx="10.06" cy="4.73" r="1.21" />
      {children}
    </svg>
  );
});

export default OrchidoStale;
