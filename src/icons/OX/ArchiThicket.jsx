import React from 'react';

export const iconData = {
  "id": "ArchiThicket",
  "name": "ArchiThicket",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.22 10.58 L 12.64 14.97 L 19.55 7.86 L 7.06 2.79 L 20.62 21.04 L 2.13 14.42 L 8.81 14.79"
      }
    ],
    [
      "circle",
      {
        "cx": "6.22",
        "cy": "10.58",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "12.64",
        "cy": "14.97",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "19.55",
        "cy": "7.86",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "7.06",
        "cy": "2.79",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "20.62",
        "cy": "21.04",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "2.13",
        "cy": "14.42",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "8.81",
        "cy": "14.79",
        "r": "0.63"
      }
    ]
  ]
};

export const ArchiThicket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.22 10.58 L 12.64 14.97 L 19.55 7.86 L 7.06 2.79 L 20.62 21.04 L 2.13 14.42 L 8.81 14.79" />
      <circle cx="6.22" cy="10.58" r="1.43" />
      <circle cx="12.64" cy="14.97" r="1.09" />
      <circle cx="19.55" cy="7.86" r="0.64" />
      <circle cx="7.06" cy="2.79" r="0.65" />
      <circle cx="20.62" cy="21.04" r="0.66" />
      <circle cx="2.13" cy="14.42" r="1.43" />
      <circle cx="8.81" cy="14.79" r="0.63" />
      {children}
    </svg>
  );
});

export default ArchiThicket;
