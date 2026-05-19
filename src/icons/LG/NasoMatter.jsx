import React from 'react';

export const iconData = {
  "id": "NasoMatter",
  "name": "NasoMatter",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.04 3.43 L 13.32 6.28 L 2.93 11.67 L 14.57 19.43 L 12.56 3.75"
      }
    ],
    [
      "circle",
      {
        "cx": "13.04",
        "cy": "3.43",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "13.32",
        "cy": "6.28",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "2.93",
        "cy": "11.67",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "14.57",
        "cy": "19.43",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "12.56",
        "cy": "3.75",
        "r": "1.08"
      }
    ]
  ]
};

export const NasoMatter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.04 3.43 L 13.32 6.28 L 2.93 11.67 L 14.57 19.43 L 12.56 3.75" />
      <circle cx="13.04" cy="3.43" r="0.59" />
      <circle cx="13.32" cy="6.28" r="0.96" />
      <circle cx="2.93" cy="11.67" r="0.81" />
      <circle cx="14.57" cy="19.43" r="0.89" />
      <circle cx="12.56" cy="3.75" r="1.08" />
      {children}
    </svg>
  );
});

export default NasoMatter;
