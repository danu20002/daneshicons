import React from 'react';

export const iconData = {
  "id": "VictoEngrave",
  "name": "VictoEngrave",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.29 20.12 L 14.75 4.42 L 12.45 16.45 L 5.31 15.48"
      }
    ],
    [
      "circle",
      {
        "cx": "5.29",
        "cy": "20.12",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "14.75",
        "cy": "4.42",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "12.45",
        "cy": "16.45",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "5.31",
        "cy": "15.48",
        "r": "0.90"
      }
    ]
  ]
};

export const VictoEngrave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.29 20.12 L 14.75 4.42 L 12.45 16.45 L 5.31 15.48" />
      <circle cx="5.29" cy="20.12" r="1.12" />
      <circle cx="14.75" cy="4.42" r="0.78" />
      <circle cx="12.45" cy="16.45" r="0.59" />
      <circle cx="5.31" cy="15.48" r="0.90" />
      {children}
    </svg>
  );
});

export default VictoEngrave;
