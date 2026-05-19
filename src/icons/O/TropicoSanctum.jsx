import React from 'react';

export const iconData = {
  "id": "TropicoSanctum",
  "name": "TropicoSanctum",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.38 20.74 L 17.64 19.91 L 17.20 14.92 L 3.80 12.64 L 17.07 17.15 L 5.60 21.56"
      }
    ],
    [
      "circle",
      {
        "cx": "11.38",
        "cy": "20.74",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "17.64",
        "cy": "19.91",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "17.20",
        "cy": "14.92",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "3.80",
        "cy": "12.64",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "17.07",
        "cy": "17.15",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "21.56",
        "r": "1.07"
      }
    ]
  ]
};

export const TropicoSanctum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.38 20.74 L 17.64 19.91 L 17.20 14.92 L 3.80 12.64 L 17.07 17.15 L 5.60 21.56" />
      <circle cx="11.38" cy="20.74" r="0.87" />
      <circle cx="17.64" cy="19.91" r="0.82" />
      <circle cx="17.20" cy="14.92" r="1.21" />
      <circle cx="3.80" cy="12.64" r="0.71" />
      <circle cx="17.07" cy="17.15" r="0.71" />
      <circle cx="5.60" cy="21.56" r="1.07" />
      {children}
    </svg>
  );
});

export default TropicoSanctum;
