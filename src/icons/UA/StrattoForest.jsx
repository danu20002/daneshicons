import React from 'react';

export const iconData = {
  "id": "StrattoForest",
  "name": "StrattoForest",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.78 20.86 L 18.70 9.89 L 7.41 14.65 L 6.47 2.03 L 15.09 14.82 L 7.45 2.81"
      }
    ],
    [
      "circle",
      {
        "cx": "6.78",
        "cy": "20.86",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "18.70",
        "cy": "9.89",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "7.41",
        "cy": "14.65",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "6.47",
        "cy": "2.03",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "15.09",
        "cy": "14.82",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "7.45",
        "cy": "2.81",
        "r": "1.23"
      }
    ]
  ]
};

export const StrattoForest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.78 20.86 L 18.70 9.89 L 7.41 14.65 L 6.47 2.03 L 15.09 14.82 L 7.45 2.81" />
      <circle cx="6.78" cy="20.86" r="0.55" />
      <circle cx="18.70" cy="9.89" r="1.25" />
      <circle cx="7.41" cy="14.65" r="1.28" />
      <circle cx="6.47" cy="2.03" r="1.47" />
      <circle cx="15.09" cy="14.82" r="1.48" />
      <circle cx="7.45" cy="2.81" r="1.23" />
      {children}
    </svg>
  );
});

export default StrattoForest;
