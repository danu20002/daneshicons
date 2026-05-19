import React from 'react';

export const iconData = {
  "id": "ContraErosion",
  "name": "ContraErosion",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.47 5.71 L 14.31 16.95 L 19.16 6.45 L 21.45 11.76 L 5.75 16.42"
      }
    ],
    [
      "circle",
      {
        "cx": "11.47",
        "cy": "5.71",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "14.31",
        "cy": "16.95",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "19.16",
        "cy": "6.45",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "21.45",
        "cy": "11.76",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "5.75",
        "cy": "16.42",
        "r": "1.17"
      }
    ]
  ]
};

export const ContraErosion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.47 5.71 L 14.31 16.95 L 19.16 6.45 L 21.45 11.76 L 5.75 16.42" />
      <circle cx="11.47" cy="5.71" r="0.93" />
      <circle cx="14.31" cy="16.95" r="1.43" />
      <circle cx="19.16" cy="6.45" r="1.45" />
      <circle cx="21.45" cy="11.76" r="1.11" />
      <circle cx="5.75" cy="16.42" r="1.17" />
      {children}
    </svg>
  );
});

export default ContraErosion;
