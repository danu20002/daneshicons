import React from 'react';

export const iconData = {
  "id": "UtileType",
  "name": "UtileType",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.32 13.29 L 10.07 5.15 L 3.22 15.81 L 6.41 14.48 L 21.47 9.29"
      }
    ],
    [
      "circle",
      {
        "cx": "5.32",
        "cy": "13.29",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "10.07",
        "cy": "5.15",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "3.22",
        "cy": "15.81",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "6.41",
        "cy": "14.48",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "21.47",
        "cy": "9.29",
        "r": "0.99"
      }
    ]
  ]
};

export const UtileType = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.32 13.29 L 10.07 5.15 L 3.22 15.81 L 6.41 14.48 L 21.47 9.29" />
      <circle cx="5.32" cy="13.29" r="1.07" />
      <circle cx="10.07" cy="5.15" r="1.25" />
      <circle cx="3.22" cy="15.81" r="1.21" />
      <circle cx="6.41" cy="14.48" r="1.42" />
      <circle cx="21.47" cy="9.29" r="0.99" />
      {children}
    </svg>
  );
});

export default UtileType;
