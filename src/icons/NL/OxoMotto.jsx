import React from 'react';

export const iconData = {
  "id": "OxoMotto",
  "name": "OxoMotto",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.67 7.50 L 3.32 18.39 L 12.19 11.24 L 6.18 21.38 L 8.85 17.58 L 14.59 15.54 L 8.07 16.15"
      }
    ],
    [
      "circle",
      {
        "cx": "7.67",
        "cy": "7.50",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "3.32",
        "cy": "18.39",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "12.19",
        "cy": "11.24",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "6.18",
        "cy": "21.38",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "8.85",
        "cy": "17.58",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "14.59",
        "cy": "15.54",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "8.07",
        "cy": "16.15",
        "r": "0.52"
      }
    ]
  ]
};

export const OxoMotto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.67 7.50 L 3.32 18.39 L 12.19 11.24 L 6.18 21.38 L 8.85 17.58 L 14.59 15.54 L 8.07 16.15" />
      <circle cx="7.67" cy="7.50" r="0.74" />
      <circle cx="3.32" cy="18.39" r="0.84" />
      <circle cx="12.19" cy="11.24" r="0.63" />
      <circle cx="6.18" cy="21.38" r="1.06" />
      <circle cx="8.85" cy="17.58" r="1.19" />
      <circle cx="14.59" cy="15.54" r="1.41" />
      <circle cx="8.07" cy="16.15" r="0.52" />
      {children}
    </svg>
  );
});

export default OxoMotto;
