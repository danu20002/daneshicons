import React from 'react';

export const iconData = {
  "id": "PrismoWrap",
  "name": "PrismoWrap",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.99 5.67 L 6.69 6.42 L 10.23 19.48 L 8.67 17.97 L 17.32 2.97 L 14.00 4.68 L 2.55 2.61"
      }
    ],
    [
      "circle",
      {
        "cx": "14.99",
        "cy": "5.67",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "6.69",
        "cy": "6.42",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "10.23",
        "cy": "19.48",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "8.67",
        "cy": "17.97",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "17.32",
        "cy": "2.97",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "4.68",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "2.55",
        "cy": "2.61",
        "r": "0.56"
      }
    ]
  ]
};

export const PrismoWrap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.99 5.67 L 6.69 6.42 L 10.23 19.48 L 8.67 17.97 L 17.32 2.97 L 14.00 4.68 L 2.55 2.61" />
      <circle cx="14.99" cy="5.67" r="1.32" />
      <circle cx="6.69" cy="6.42" r="0.87" />
      <circle cx="10.23" cy="19.48" r="1.18" />
      <circle cx="8.67" cy="17.97" r="1.00" />
      <circle cx="17.32" cy="2.97" r="0.60" />
      <circle cx="14.00" cy="4.68" r="0.93" />
      <circle cx="2.55" cy="2.61" r="0.56" />
      {children}
    </svg>
  );
});

export default PrismoWrap;
