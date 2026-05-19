import React from 'react';

export const iconData = {
  "id": "IonoOnline",
  "name": "IonoOnline",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.68 13.93 L 9.07 17.63 L 12.80 6.56 L 10.40 7.25 L 8.11 15.56 L 17.76 8.77 L 9.74 13.26 L 15.76 16.22"
      }
    ],
    [
      "circle",
      {
        "cx": "8.68",
        "cy": "13.93",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "9.07",
        "cy": "17.63",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "12.80",
        "cy": "6.56",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "10.40",
        "cy": "7.25",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "8.11",
        "cy": "15.56",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "17.76",
        "cy": "8.77",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "9.74",
        "cy": "13.26",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "15.76",
        "cy": "16.22",
        "r": "0.73"
      }
    ]
  ]
};

export const IonoOnline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.68 13.93 L 9.07 17.63 L 12.80 6.56 L 10.40 7.25 L 8.11 15.56 L 17.76 8.77 L 9.74 13.26 L 15.76 16.22" />
      <circle cx="8.68" cy="13.93" r="0.55" />
      <circle cx="9.07" cy="17.63" r="0.80" />
      <circle cx="12.80" cy="6.56" r="0.73" />
      <circle cx="10.40" cy="7.25" r="0.79" />
      <circle cx="8.11" cy="15.56" r="0.78" />
      <circle cx="17.76" cy="8.77" r="0.81" />
      <circle cx="9.74" cy="13.26" r="1.26" />
      <circle cx="15.76" cy="16.22" r="0.73" />
      {children}
    </svg>
  );
});

export default IonoOnline;
