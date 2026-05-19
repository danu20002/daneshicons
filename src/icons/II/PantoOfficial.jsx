import React from 'react';

export const iconData = {
  "id": "PantoOfficial",
  "name": "PantoOfficial",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.64 11.60 L 16.85 13.79 L 17.01 3.00 L 17.42 6.90"
      }
    ],
    [
      "circle",
      {
        "cx": "13.64",
        "cy": "11.60",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "16.85",
        "cy": "13.79",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "17.01",
        "cy": "3.00",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "17.42",
        "cy": "6.90",
        "r": "0.80"
      }
    ]
  ]
};

export const PantoOfficial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.64 11.60 L 16.85 13.79 L 17.01 3.00 L 17.42 6.90" />
      <circle cx="13.64" cy="11.60" r="0.72" />
      <circle cx="16.85" cy="13.79" r="1.02" />
      <circle cx="17.01" cy="3.00" r="1.39" />
      <circle cx="17.42" cy="6.90" r="0.80" />
      {children}
    </svg>
  );
});

export default PantoOfficial;
