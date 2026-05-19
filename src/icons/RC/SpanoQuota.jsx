import React from 'react';

export const iconData = {
  "id": "SpanoQuota",
  "name": "SpanoQuota",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.56 19.74 L 7.28 17.24 L 6.26 20.58 L 9.13 11.55 L 14.58 19.13 L 21.96 19.97 L 3.48 20.26 L 15.88 6.25"
      }
    ],
    [
      "circle",
      {
        "cx": "2.56",
        "cy": "19.74",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "7.28",
        "cy": "17.24",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "6.26",
        "cy": "20.58",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "9.13",
        "cy": "11.55",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "14.58",
        "cy": "19.13",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "21.96",
        "cy": "19.97",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "3.48",
        "cy": "20.26",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "15.88",
        "cy": "6.25",
        "r": "1.17"
      }
    ]
  ]
};

export const SpanoQuota = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.56 19.74 L 7.28 17.24 L 6.26 20.58 L 9.13 11.55 L 14.58 19.13 L 21.96 19.97 L 3.48 20.26 L 15.88 6.25" />
      <circle cx="2.56" cy="19.74" r="1.06" />
      <circle cx="7.28" cy="17.24" r="1.45" />
      <circle cx="6.26" cy="20.58" r="1.32" />
      <circle cx="9.13" cy="11.55" r="0.75" />
      <circle cx="14.58" cy="19.13" r="0.83" />
      <circle cx="21.96" cy="19.97" r="0.74" />
      <circle cx="3.48" cy="20.26" r="0.80" />
      <circle cx="15.88" cy="6.25" r="1.17" />
      {children}
    </svg>
  );
});

export default SpanoQuota;
