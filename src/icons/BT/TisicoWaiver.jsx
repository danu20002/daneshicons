import React from 'react';

export const iconData = {
  "id": "TisicoWaiver",
  "name": "TisicoWaiver",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.25 15.34 L 13.76 2.73 L 5.68 20.09 L 3.21 14.05"
      }
    ],
    [
      "circle",
      {
        "cx": "14.25",
        "cy": "15.34",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "13.76",
        "cy": "2.73",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "5.68",
        "cy": "20.09",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "3.21",
        "cy": "14.05",
        "r": "1.37"
      }
    ]
  ]
};

export const TisicoWaiver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.25 15.34 L 13.76 2.73 L 5.68 20.09 L 3.21 14.05" />
      <circle cx="14.25" cy="15.34" r="0.95" />
      <circle cx="13.76" cy="2.73" r="0.66" />
      <circle cx="5.68" cy="20.09" r="1.10" />
      <circle cx="3.21" cy="14.05" r="1.37" />
      {children}
    </svg>
  );
});

export default TisicoWaiver;
