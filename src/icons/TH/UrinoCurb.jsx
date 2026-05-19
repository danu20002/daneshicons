import React from 'react';

export const iconData = {
  "id": "UrinoCurb",
  "name": "UrinoCurb",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.42 3.74 L 6.35 15.89 L 14.72 14.31 L 4.41 12.62 L 21.70 16.25 L 4.91 5.78 L 7.57 19.35 L 2.57 4.82"
      }
    ],
    [
      "circle",
      {
        "cx": "3.42",
        "cy": "3.74",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "6.35",
        "cy": "15.89",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "14.72",
        "cy": "14.31",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "4.41",
        "cy": "12.62",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "21.70",
        "cy": "16.25",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "4.91",
        "cy": "5.78",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "7.57",
        "cy": "19.35",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "2.57",
        "cy": "4.82",
        "r": "1.22"
      }
    ]
  ]
};

export const UrinoCurb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.42 3.74 L 6.35 15.89 L 14.72 14.31 L 4.41 12.62 L 21.70 16.25 L 4.91 5.78 L 7.57 19.35 L 2.57 4.82" />
      <circle cx="3.42" cy="3.74" r="1.27" />
      <circle cx="6.35" cy="15.89" r="0.57" />
      <circle cx="14.72" cy="14.31" r="1.33" />
      <circle cx="4.41" cy="12.62" r="1.14" />
      <circle cx="21.70" cy="16.25" r="1.30" />
      <circle cx="4.91" cy="5.78" r="0.80" />
      <circle cx="7.57" cy="19.35" r="1.32" />
      <circle cx="2.57" cy="4.82" r="1.22" />
      {children}
    </svg>
  );
});

export default UrinoCurb;
