import React from 'react';

export const iconData = {
  "id": "DuraCream",
  "name": "DuraCream",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.25 18.80 L 20.83 8.31 L 10.94 19.97 L 19.35 14.81 L 7.35 2.39 L 13.95 7.00 L 14.36 8.07"
      }
    ],
    [
      "circle",
      {
        "cx": "17.25",
        "cy": "18.80",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "20.83",
        "cy": "8.31",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "10.94",
        "cy": "19.97",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "19.35",
        "cy": "14.81",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "7.35",
        "cy": "2.39",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "13.95",
        "cy": "7.00",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "14.36",
        "cy": "8.07",
        "r": "1.41"
      }
    ]
  ]
};

export const DuraCream = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.25 18.80 L 20.83 8.31 L 10.94 19.97 L 19.35 14.81 L 7.35 2.39 L 13.95 7.00 L 14.36 8.07" />
      <circle cx="17.25" cy="18.80" r="1.44" />
      <circle cx="20.83" cy="8.31" r="0.56" />
      <circle cx="10.94" cy="19.97" r="1.35" />
      <circle cx="19.35" cy="14.81" r="1.10" />
      <circle cx="7.35" cy="2.39" r="0.77" />
      <circle cx="13.95" cy="7.00" r="1.18" />
      <circle cx="14.36" cy="8.07" r="1.41" />
      {children}
    </svg>
  );
});

export default DuraCream;
