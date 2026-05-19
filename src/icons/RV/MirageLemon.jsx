import React from 'react';

export const iconData = {
  "id": "MirageLemon",
  "name": "MirageLemon",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.85 5.75 L 20.72 13.41 L 8.15 20.07 L 2.20 21.38 L 15.65 14.32 L 21.00 3.51 L 5.20 17.23"
      }
    ],
    [
      "circle",
      {
        "cx": "15.85",
        "cy": "5.75",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "20.72",
        "cy": "13.41",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "8.15",
        "cy": "20.07",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "2.20",
        "cy": "21.38",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "15.65",
        "cy": "14.32",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "21.00",
        "cy": "3.51",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "5.20",
        "cy": "17.23",
        "r": "1.25"
      }
    ]
  ]
};

export const MirageLemon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.85 5.75 L 20.72 13.41 L 8.15 20.07 L 2.20 21.38 L 15.65 14.32 L 21.00 3.51 L 5.20 17.23" />
      <circle cx="15.85" cy="5.75" r="1.01" />
      <circle cx="20.72" cy="13.41" r="1.19" />
      <circle cx="8.15" cy="20.07" r="1.47" />
      <circle cx="2.20" cy="21.38" r="0.84" />
      <circle cx="15.65" cy="14.32" r="1.36" />
      <circle cx="21.00" cy="3.51" r="1.46" />
      <circle cx="5.20" cy="17.23" r="1.25" />
      {children}
    </svg>
  );
});

export default MirageLemon;
