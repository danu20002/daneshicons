import React from 'react';

export const iconData = {
  "id": "XantoWild",
  "name": "XantoWild",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.59 14.11 L 5.45 6.72 L 21.83 20.44 L 14.11 6.06 L 10.81 17.66 L 11.69 13.28"
      }
    ],
    [
      "circle",
      {
        "cx": "21.59",
        "cy": "14.11",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "5.45",
        "cy": "6.72",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "21.83",
        "cy": "20.44",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "14.11",
        "cy": "6.06",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "10.81",
        "cy": "17.66",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "11.69",
        "cy": "13.28",
        "r": "0.90"
      }
    ]
  ]
};

export const XantoWild = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.59 14.11 L 5.45 6.72 L 21.83 20.44 L 14.11 6.06 L 10.81 17.66 L 11.69 13.28" />
      <circle cx="21.59" cy="14.11" r="0.72" />
      <circle cx="5.45" cy="6.72" r="1.41" />
      <circle cx="21.83" cy="20.44" r="1.03" />
      <circle cx="14.11" cy="6.06" r="0.81" />
      <circle cx="10.81" cy="17.66" r="0.89" />
      <circle cx="11.69" cy="13.28" r="0.90" />
      {children}
    </svg>
  );
});

export default XantoWild;
