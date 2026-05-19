import React from 'react';

export const iconData = {
  "id": "ZigzagHome",
  "name": "ZigzagHome",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.10 8.66 L 14.40 16.95 L 21.53 4.03 L 2.01 7.60 L 17.49 5.63"
      }
    ],
    [
      "circle",
      {
        "cx": "15.10",
        "cy": "8.66",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "14.40",
        "cy": "16.95",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "21.53",
        "cy": "4.03",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "2.01",
        "cy": "7.60",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "17.49",
        "cy": "5.63",
        "r": "0.94"
      }
    ]
  ]
};

export const ZigzagHome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.10 8.66 L 14.40 16.95 L 21.53 4.03 L 2.01 7.60 L 17.49 5.63" />
      <circle cx="15.10" cy="8.66" r="1.11" />
      <circle cx="14.40" cy="16.95" r="0.84" />
      <circle cx="21.53" cy="4.03" r="1.38" />
      <circle cx="2.01" cy="7.60" r="1.48" />
      <circle cx="17.49" cy="5.63" r="0.94" />
      {children}
    </svg>
  );
});

export default ZigzagHome;
