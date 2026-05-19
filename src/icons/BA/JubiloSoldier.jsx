import React from 'react';

export const iconData = {
  "id": "JubiloSoldier",
  "name": "JubiloSoldier",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.21 2.28 L 21.03 21.40 L 5.54 3.81 L 3.33 2.22 L 14.07 17.51 L 11.21 11.94 L 8.66 20.37"
      }
    ],
    [
      "circle",
      {
        "cx": "16.21",
        "cy": "2.28",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "21.03",
        "cy": "21.40",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "5.54",
        "cy": "3.81",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "3.33",
        "cy": "2.22",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "14.07",
        "cy": "17.51",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "11.21",
        "cy": "11.94",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "8.66",
        "cy": "20.37",
        "r": "0.88"
      }
    ]
  ]
};

export const JubiloSoldier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.21 2.28 L 21.03 21.40 L 5.54 3.81 L 3.33 2.22 L 14.07 17.51 L 11.21 11.94 L 8.66 20.37" />
      <circle cx="16.21" cy="2.28" r="0.89" />
      <circle cx="21.03" cy="21.40" r="1.05" />
      <circle cx="5.54" cy="3.81" r="0.99" />
      <circle cx="3.33" cy="2.22" r="1.27" />
      <circle cx="14.07" cy="17.51" r="1.46" />
      <circle cx="11.21" cy="11.94" r="0.61" />
      <circle cx="8.66" cy="20.37" r="0.88" />
      {children}
    </svg>
  );
});

export default JubiloSoldier;
