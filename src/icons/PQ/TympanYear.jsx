import React from 'react';

export const iconData = {
  "id": "TympanYear",
  "name": "TympanYear",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.17 16.88 L 9.83 2.62 L 20.81 10.91 L 15.28 20.97 L 20.14 15.53 L 4.57 21.83"
      }
    ],
    [
      "circle",
      {
        "cx": "19.17",
        "cy": "16.88",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "9.83",
        "cy": "2.62",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "20.81",
        "cy": "10.91",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "15.28",
        "cy": "20.97",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "20.14",
        "cy": "15.53",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "4.57",
        "cy": "21.83",
        "r": "1.05"
      }
    ]
  ]
};

export const TympanYear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.17 16.88 L 9.83 2.62 L 20.81 10.91 L 15.28 20.97 L 20.14 15.53 L 4.57 21.83" />
      <circle cx="19.17" cy="16.88" r="1.30" />
      <circle cx="9.83" cy="2.62" r="0.80" />
      <circle cx="20.81" cy="10.91" r="1.19" />
      <circle cx="15.28" cy="20.97" r="0.90" />
      <circle cx="20.14" cy="15.53" r="0.60" />
      <circle cx="4.57" cy="21.83" r="1.05" />
      {children}
    </svg>
  );
});

export default TympanYear;
