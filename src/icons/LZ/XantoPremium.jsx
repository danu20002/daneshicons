import React from 'react';

export const iconData = {
  "id": "XantoPremium",
  "name": "XantoPremium",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.41 5.72 L 6.25 6.52 L 8.23 7.17 L 4.30 17.87 L 7.55 5.48 L 7.66 21.99 L 19.49 15.68 L 18.47 2.81"
      }
    ],
    [
      "circle",
      {
        "cx": "7.41",
        "cy": "5.72",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "6.25",
        "cy": "6.52",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "8.23",
        "cy": "7.17",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "4.30",
        "cy": "17.87",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "7.55",
        "cy": "5.48",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "7.66",
        "cy": "21.99",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "19.49",
        "cy": "15.68",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "18.47",
        "cy": "2.81",
        "r": "1.44"
      }
    ]
  ]
};

export const XantoPremium = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.41 5.72 L 6.25 6.52 L 8.23 7.17 L 4.30 17.87 L 7.55 5.48 L 7.66 21.99 L 19.49 15.68 L 18.47 2.81" />
      <circle cx="7.41" cy="5.72" r="1.28" />
      <circle cx="6.25" cy="6.52" r="1.16" />
      <circle cx="8.23" cy="7.17" r="0.53" />
      <circle cx="4.30" cy="17.87" r="0.59" />
      <circle cx="7.55" cy="5.48" r="1.15" />
      <circle cx="7.66" cy="21.99" r="1.24" />
      <circle cx="19.49" cy="15.68" r="0.96" />
      <circle cx="18.47" cy="2.81" r="1.44" />
      {children}
    </svg>
  );
});

export default XantoPremium;
