import React from 'react';

export const iconData = {
  "id": "OrchidoBright",
  "name": "OrchidoBright",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.23 10.68 L 3.27 7.03 L 4.32 13.47 L 21.56 8.41 L 4.56 6.26 L 17.80 15.28 L 21.33 9.98 L 14.41 20.61"
      }
    ],
    [
      "circle",
      {
        "cx": "5.23",
        "cy": "10.68",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "3.27",
        "cy": "7.03",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "4.32",
        "cy": "13.47",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "21.56",
        "cy": "8.41",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "4.56",
        "cy": "6.26",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "17.80",
        "cy": "15.28",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "21.33",
        "cy": "9.98",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "14.41",
        "cy": "20.61",
        "r": "0.69"
      }
    ]
  ]
};

export const OrchidoBright = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.23 10.68 L 3.27 7.03 L 4.32 13.47 L 21.56 8.41 L 4.56 6.26 L 17.80 15.28 L 21.33 9.98 L 14.41 20.61" />
      <circle cx="5.23" cy="10.68" r="1.14" />
      <circle cx="3.27" cy="7.03" r="1.17" />
      <circle cx="4.32" cy="13.47" r="1.00" />
      <circle cx="21.56" cy="8.41" r="1.10" />
      <circle cx="4.56" cy="6.26" r="0.76" />
      <circle cx="17.80" cy="15.28" r="1.15" />
      <circle cx="21.33" cy="9.98" r="0.94" />
      <circle cx="14.41" cy="20.61" r="0.69" />
      {children}
    </svg>
  );
});

export default OrchidoBright;
