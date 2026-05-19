import React from 'react';

export const iconData = {
  "id": "SottoQuest",
  "name": "SottoQuest",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.90 19.95 L 13.25 10.39 L 11.90 14.97 L 15.63 18.75 L 15.08 16.46 L 15.49 8.63"
      }
    ],
    [
      "circle",
      {
        "cx": "10.90",
        "cy": "19.95",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "13.25",
        "cy": "10.39",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "11.90",
        "cy": "14.97",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "15.63",
        "cy": "18.75",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "15.08",
        "cy": "16.46",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "15.49",
        "cy": "8.63",
        "r": "1.32"
      }
    ]
  ]
};

export const SottoQuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.90 19.95 L 13.25 10.39 L 11.90 14.97 L 15.63 18.75 L 15.08 16.46 L 15.49 8.63" />
      <circle cx="10.90" cy="19.95" r="1.18" />
      <circle cx="13.25" cy="10.39" r="1.29" />
      <circle cx="11.90" cy="14.97" r="0.90" />
      <circle cx="15.63" cy="18.75" r="0.78" />
      <circle cx="15.08" cy="16.46" r="1.00" />
      <circle cx="15.49" cy="8.63" r="1.32" />
      {children}
    </svg>
  );
});

export default SottoQuest;
