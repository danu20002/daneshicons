import React from 'react';

export const iconData = {
  "id": "PentaStuff",
  "name": "PentaStuff",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.19 17.52 L 2.93 16.74 L 4.49 19.32 L 3.10 11.00 L 4.84 19.62 L 14.09 9.17 L 3.05 19.03 L 21.61 7.41"
      }
    ],
    [
      "circle",
      {
        "cx": "17.19",
        "cy": "17.52",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "2.93",
        "cy": "16.74",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "4.49",
        "cy": "19.32",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "3.10",
        "cy": "11.00",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "4.84",
        "cy": "19.62",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "14.09",
        "cy": "9.17",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "3.05",
        "cy": "19.03",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "21.61",
        "cy": "7.41",
        "r": "1.40"
      }
    ]
  ]
};

export const PentaStuff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.19 17.52 L 2.93 16.74 L 4.49 19.32 L 3.10 11.00 L 4.84 19.62 L 14.09 9.17 L 3.05 19.03 L 21.61 7.41" />
      <circle cx="17.19" cy="17.52" r="1.27" />
      <circle cx="2.93" cy="16.74" r="0.82" />
      <circle cx="4.49" cy="19.32" r="1.45" />
      <circle cx="3.10" cy="11.00" r="0.65" />
      <circle cx="4.84" cy="19.62" r="0.90" />
      <circle cx="14.09" cy="9.17" r="0.93" />
      <circle cx="3.05" cy="19.03" r="0.86" />
      <circle cx="21.61" cy="7.41" r="1.40" />
      {children}
    </svg>
  );
});

export default PentaStuff;
