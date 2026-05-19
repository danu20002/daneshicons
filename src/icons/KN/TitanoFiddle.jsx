import React from 'react';

export const iconData = {
  "id": "TitanoFiddle",
  "name": "TitanoFiddle",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 10.51 L 16.94 5.35 L 13.06 14.14 L 20.94 11.87 L 8.24 16.15"
      }
    ],
    [
      "circle",
      {
        "cx": "6.46",
        "cy": "10.51",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "16.94",
        "cy": "5.35",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "13.06",
        "cy": "14.14",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "20.94",
        "cy": "11.87",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "8.24",
        "cy": "16.15",
        "r": "1.15"
      }
    ]
  ]
};

export const TitanoFiddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 10.51 L 16.94 5.35 L 13.06 14.14 L 20.94 11.87 L 8.24 16.15" />
      <circle cx="6.46" cy="10.51" r="1.12" />
      <circle cx="16.94" cy="5.35" r="0.57" />
      <circle cx="13.06" cy="14.14" r="1.39" />
      <circle cx="20.94" cy="11.87" r="1.31" />
      <circle cx="8.24" cy="16.15" r="1.15" />
      {children}
    </svg>
  );
});

export default TitanoFiddle;
