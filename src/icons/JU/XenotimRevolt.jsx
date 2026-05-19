import React from 'react';

export const iconData = {
  "id": "XenotimRevolt",
  "name": "XenotimRevolt",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.45 2.62 L 5.00 14.56 L 21.63 14.92 L 20.71 18.73 L 15.33 18.88 L 15.79 4.26 L 12.44 12.50 L 14.45 19.52"
      }
    ],
    [
      "circle",
      {
        "cx": "10.45",
        "cy": "2.62",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "5.00",
        "cy": "14.56",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "21.63",
        "cy": "14.92",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "20.71",
        "cy": "18.73",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "15.33",
        "cy": "18.88",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "15.79",
        "cy": "4.26",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "12.44",
        "cy": "12.50",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "14.45",
        "cy": "19.52",
        "r": "1.01"
      }
    ]
  ]
};

export const XenotimRevolt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.45 2.62 L 5.00 14.56 L 21.63 14.92 L 20.71 18.73 L 15.33 18.88 L 15.79 4.26 L 12.44 12.50 L 14.45 19.52" />
      <circle cx="10.45" cy="2.62" r="0.63" />
      <circle cx="5.00" cy="14.56" r="0.88" />
      <circle cx="21.63" cy="14.92" r="0.91" />
      <circle cx="20.71" cy="18.73" r="0.69" />
      <circle cx="15.33" cy="18.88" r="0.97" />
      <circle cx="15.79" cy="4.26" r="0.86" />
      <circle cx="12.44" cy="12.50" r="0.64" />
      <circle cx="14.45" cy="19.52" r="1.01" />
      {children}
    </svg>
  );
});

export default XenotimRevolt;
