import React from 'react';

export const iconData = {
  "id": "PolpoSalmon",
  "name": "PolpoSalmon",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.29 6.49 L 9.00 21.23 L 21.89 19.81 L 14.85 6.03 L 3.79 5.12"
      }
    ],
    [
      "circle",
      {
        "cx": "20.29",
        "cy": "6.49",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "9.00",
        "cy": "21.23",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "21.89",
        "cy": "19.81",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "14.85",
        "cy": "6.03",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "3.79",
        "cy": "5.12",
        "r": "0.61"
      }
    ]
  ]
};

export const PolpoSalmon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.29 6.49 L 9.00 21.23 L 21.89 19.81 L 14.85 6.03 L 3.79 5.12" />
      <circle cx="20.29" cy="6.49" r="1.00" />
      <circle cx="9.00" cy="21.23" r="0.99" />
      <circle cx="21.89" cy="19.81" r="0.62" />
      <circle cx="14.85" cy="6.03" r="0.61" />
      <circle cx="3.79" cy="5.12" r="0.61" />
      {children}
    </svg>
  );
});

export default PolpoSalmon;
