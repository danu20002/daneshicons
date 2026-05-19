import React from 'react';

export const iconData = {
  "id": "OrthoNeutral",
  "name": "OrthoNeutral",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.18 8.64 L 7.79 20.90 L 3.28 15.10 L 6.85 20.08"
      }
    ],
    [
      "circle",
      {
        "cx": "5.18",
        "cy": "8.64",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "7.79",
        "cy": "20.90",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "3.28",
        "cy": "15.10",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "6.85",
        "cy": "20.08",
        "r": "1.26"
      }
    ]
  ]
};

export const OrthoNeutral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.18 8.64 L 7.79 20.90 L 3.28 15.10 L 6.85 20.08" />
      <circle cx="5.18" cy="8.64" r="1.18" />
      <circle cx="7.79" cy="20.90" r="1.30" />
      <circle cx="3.28" cy="15.10" r="0.98" />
      <circle cx="6.85" cy="20.08" r="1.26" />
      {children}
    </svg>
  );
});

export default OrthoNeutral;
