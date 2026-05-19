import React from 'react';

export const iconData = {
  "id": "ObsidiWound",
  "name": "ObsidiWound",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.18 10.64 L 21.04 8.33 L 15.89 14.72 L 7.91 13.26 L 18.58 12.77"
      }
    ],
    [
      "circle",
      {
        "cx": "10.18",
        "cy": "10.64",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "21.04",
        "cy": "8.33",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "15.89",
        "cy": "14.72",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "7.91",
        "cy": "13.26",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "18.58",
        "cy": "12.77",
        "r": "0.53"
      }
    ]
  ]
};

export const ObsidiWound = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.18 10.64 L 21.04 8.33 L 15.89 14.72 L 7.91 13.26 L 18.58 12.77" />
      <circle cx="10.18" cy="10.64" r="1.39" />
      <circle cx="21.04" cy="8.33" r="0.92" />
      <circle cx="15.89" cy="14.72" r="0.57" />
      <circle cx="7.91" cy="13.26" r="1.41" />
      <circle cx="18.58" cy="12.77" r="0.53" />
      {children}
    </svg>
  );
});

export default ObsidiWound;
