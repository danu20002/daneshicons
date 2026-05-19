import React from 'react';

export const iconData = {
  "id": "PlanoOsmosis",
  "name": "PlanoOsmosis",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.02 8.72 L 17.90 3.98 L 17.14 5.09 L 18.24 8.32 L 5.47 9.68 L 10.44 17.40 L 19.81 16.30 L 2.60 20.92"
      }
    ],
    [
      "circle",
      {
        "cx": "21.02",
        "cy": "8.72",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "17.90",
        "cy": "3.98",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "17.14",
        "cy": "5.09",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "18.24",
        "cy": "8.32",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "5.47",
        "cy": "9.68",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "10.44",
        "cy": "17.40",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "19.81",
        "cy": "16.30",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "2.60",
        "cy": "20.92",
        "r": "1.10"
      }
    ]
  ]
};

export const PlanoOsmosis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.02 8.72 L 17.90 3.98 L 17.14 5.09 L 18.24 8.32 L 5.47 9.68 L 10.44 17.40 L 19.81 16.30 L 2.60 20.92" />
      <circle cx="21.02" cy="8.72" r="1.26" />
      <circle cx="17.90" cy="3.98" r="1.38" />
      <circle cx="17.14" cy="5.09" r="0.55" />
      <circle cx="18.24" cy="8.32" r="0.67" />
      <circle cx="5.47" cy="9.68" r="1.03" />
      <circle cx="10.44" cy="17.40" r="1.33" />
      <circle cx="19.81" cy="16.30" r="1.38" />
      <circle cx="2.60" cy="20.92" r="1.10" />
      {children}
    </svg>
  );
});

export default PlanoOsmosis;
