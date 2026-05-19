import React from 'react';

export const iconData = {
  "id": "PeriSpade",
  "name": "PeriSpade",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.78 18.20 L 2.05 20.54 L 8.97 6.26 L 18.62 18.54 L 13.27 17.28"
      }
    ],
    [
      "circle",
      {
        "cx": "15.78",
        "cy": "18.20",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "2.05",
        "cy": "20.54",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "8.97",
        "cy": "6.26",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "18.62",
        "cy": "18.54",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "13.27",
        "cy": "17.28",
        "r": "1.02"
      }
    ]
  ]
};

export const PeriSpade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.78 18.20 L 2.05 20.54 L 8.97 6.26 L 18.62 18.54 L 13.27 17.28" />
      <circle cx="15.78" cy="18.20" r="1.44" />
      <circle cx="2.05" cy="20.54" r="1.39" />
      <circle cx="8.97" cy="6.26" r="0.53" />
      <circle cx="18.62" cy="18.54" r="0.58" />
      <circle cx="13.27" cy="17.28" r="1.02" />
      {children}
    </svg>
  );
});

export default PeriSpade;
