import React from 'react';

export const iconData = {
  "id": "VolcanoParty",
  "name": "VolcanoParty",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.73 17.76 L 2.05 5.06 L 21.83 15.59 L 16.57 21.64 L 7.09 17.72 L 7.90 17.87 L 13.02 14.22"
      }
    ],
    [
      "circle",
      {
        "cx": "20.73",
        "cy": "17.76",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "2.05",
        "cy": "5.06",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "21.83",
        "cy": "15.59",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "16.57",
        "cy": "21.64",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "7.09",
        "cy": "17.72",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "7.90",
        "cy": "17.87",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "13.02",
        "cy": "14.22",
        "r": "0.95"
      }
    ]
  ]
};

export const VolcanoParty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.73 17.76 L 2.05 5.06 L 21.83 15.59 L 16.57 21.64 L 7.09 17.72 L 7.90 17.87 L 13.02 14.22" />
      <circle cx="20.73" cy="17.76" r="1.07" />
      <circle cx="2.05" cy="5.06" r="0.51" />
      <circle cx="21.83" cy="15.59" r="1.25" />
      <circle cx="16.57" cy="21.64" r="0.69" />
      <circle cx="7.09" cy="17.72" r="1.28" />
      <circle cx="7.90" cy="17.87" r="0.96" />
      <circle cx="13.02" cy="14.22" r="0.95" />
      {children}
    </svg>
  );
});

export default VolcanoParty;
