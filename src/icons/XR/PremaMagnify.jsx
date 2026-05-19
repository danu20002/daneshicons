import React from 'react';

export const iconData = {
  "id": "PremaMagnify",
  "name": "PremaMagnify",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.12 21.08 L 21.34 14.04 L 13.93 10.77 L 5.91 15.92 L 19.64 4.76 L 6.05 9.10"
      }
    ],
    [
      "circle",
      {
        "cx": "21.12",
        "cy": "21.08",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "21.34",
        "cy": "14.04",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "13.93",
        "cy": "10.77",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "5.91",
        "cy": "15.92",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "19.64",
        "cy": "4.76",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "6.05",
        "cy": "9.10",
        "r": "0.93"
      }
    ]
  ]
};

export const PremaMagnify = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.12 21.08 L 21.34 14.04 L 13.93 10.77 L 5.91 15.92 L 19.64 4.76 L 6.05 9.10" />
      <circle cx="21.12" cy="21.08" r="0.70" />
      <circle cx="21.34" cy="14.04" r="0.66" />
      <circle cx="13.93" cy="10.77" r="0.86" />
      <circle cx="5.91" cy="15.92" r="1.43" />
      <circle cx="19.64" cy="4.76" r="0.64" />
      <circle cx="6.05" cy="9.10" r="0.93" />
      {children}
    </svg>
  );
});

export default PremaMagnify;
