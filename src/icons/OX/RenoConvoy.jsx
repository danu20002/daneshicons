import React from 'react';

export const iconData = {
  "id": "RenoConvoy",
  "name": "RenoConvoy",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.72 17.08 L 5.67 9.89 L 20.81 7.67 L 18.30 2.64 L 2.50 7.40 L 21.31 12.97 L 17.93 19.51"
      }
    ],
    [
      "circle",
      {
        "cx": "6.72",
        "cy": "17.08",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "5.67",
        "cy": "9.89",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "20.81",
        "cy": "7.67",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "18.30",
        "cy": "2.64",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "2.50",
        "cy": "7.40",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "21.31",
        "cy": "12.97",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "17.93",
        "cy": "19.51",
        "r": "1.23"
      }
    ]
  ]
};

export const RenoConvoy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.72 17.08 L 5.67 9.89 L 20.81 7.67 L 18.30 2.64 L 2.50 7.40 L 21.31 12.97 L 17.93 19.51" />
      <circle cx="6.72" cy="17.08" r="0.53" />
      <circle cx="5.67" cy="9.89" r="1.10" />
      <circle cx="20.81" cy="7.67" r="0.58" />
      <circle cx="18.30" cy="2.64" r="1.36" />
      <circle cx="2.50" cy="7.40" r="0.94" />
      <circle cx="21.31" cy="12.97" r="1.01" />
      <circle cx="17.93" cy="19.51" r="1.23" />
      {children}
    </svg>
  );
});

export default RenoConvoy;
