import React from 'react';

export const iconData = {
  "id": "TutelaMember",
  "name": "TutelaMember",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.69 7.67 L 13.89 9.35 L 5.55 18.36 L 4.42 7.83 L 15.80 18.38 L 20.92 17.27 L 7.17 14.69"
      }
    ],
    [
      "circle",
      {
        "cx": "5.69",
        "cy": "7.67",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "13.89",
        "cy": "9.35",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "5.55",
        "cy": "18.36",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "4.42",
        "cy": "7.83",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "15.80",
        "cy": "18.38",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "20.92",
        "cy": "17.27",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "7.17",
        "cy": "14.69",
        "r": "1.20"
      }
    ]
  ]
};

export const TutelaMember = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.69 7.67 L 13.89 9.35 L 5.55 18.36 L 4.42 7.83 L 15.80 18.38 L 20.92 17.27 L 7.17 14.69" />
      <circle cx="5.69" cy="7.67" r="1.46" />
      <circle cx="13.89" cy="9.35" r="1.34" />
      <circle cx="5.55" cy="18.36" r="1.24" />
      <circle cx="4.42" cy="7.83" r="1.46" />
      <circle cx="15.80" cy="18.38" r="1.40" />
      <circle cx="20.92" cy="17.27" r="1.48" />
      <circle cx="7.17" cy="14.69" r="1.20" />
      {children}
    </svg>
  );
});

export default TutelaMember;
