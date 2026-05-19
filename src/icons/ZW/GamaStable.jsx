import React from 'react';

export const iconData = {
  "id": "GamaStable",
  "name": "GamaStable",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.78 16.97 L 6.54 20.73 L 15.82 17.80 L 16.48 19.72 L 12.22 6.62 L 20.48 15.47 L 2.50 4.43"
      }
    ],
    [
      "circle",
      {
        "cx": "8.78",
        "cy": "16.97",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "6.54",
        "cy": "20.73",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "15.82",
        "cy": "17.80",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "16.48",
        "cy": "19.72",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "12.22",
        "cy": "6.62",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "20.48",
        "cy": "15.47",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "2.50",
        "cy": "4.43",
        "r": "1.47"
      }
    ]
  ]
};

export const GamaStable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.78 16.97 L 6.54 20.73 L 15.82 17.80 L 16.48 19.72 L 12.22 6.62 L 20.48 15.47 L 2.50 4.43" />
      <circle cx="8.78" cy="16.97" r="1.14" />
      <circle cx="6.54" cy="20.73" r="0.80" />
      <circle cx="15.82" cy="17.80" r="0.79" />
      <circle cx="16.48" cy="19.72" r="1.45" />
      <circle cx="12.22" cy="6.62" r="0.94" />
      <circle cx="20.48" cy="15.47" r="1.22" />
      <circle cx="2.50" cy="4.43" r="1.47" />
      {children}
    </svg>
  );
});

export default GamaStable;
