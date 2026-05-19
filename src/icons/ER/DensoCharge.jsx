import React from 'react';

export const iconData = {
  "id": "DensoCharge",
  "name": "DensoCharge",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.88 8.82 L 4.58 16.84 L 11.89 14.78 L 11.64 17.87 L 19.14 17.28 L 2.90 10.02"
      }
    ],
    [
      "circle",
      {
        "cx": "16.88",
        "cy": "8.82",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "4.58",
        "cy": "16.84",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "11.89",
        "cy": "14.78",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "11.64",
        "cy": "17.87",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "19.14",
        "cy": "17.28",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "2.90",
        "cy": "10.02",
        "r": "0.90"
      }
    ]
  ]
};

export const DensoCharge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.88 8.82 L 4.58 16.84 L 11.89 14.78 L 11.64 17.87 L 19.14 17.28 L 2.90 10.02" />
      <circle cx="16.88" cy="8.82" r="0.55" />
      <circle cx="4.58" cy="16.84" r="1.22" />
      <circle cx="11.89" cy="14.78" r="0.64" />
      <circle cx="11.64" cy="17.87" r="1.15" />
      <circle cx="19.14" cy="17.28" r="0.93" />
      <circle cx="2.90" cy="10.02" r="0.90" />
      {children}
    </svg>
  );
});

export default DensoCharge;
