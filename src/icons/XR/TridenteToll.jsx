import React from 'react';

export const iconData = {
  "id": "TridenteToll",
  "name": "TridenteToll",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 2.37 L 21.00 21.05 L 21.37 9.74 L 3.07 6.59 L 4.51 4.40 L 5.67 17.43 L 19.06 4.39 L 3.60 5.69"
      }
    ],
    [
      "circle",
      {
        "cx": "4.71",
        "cy": "2.37",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "21.00",
        "cy": "21.05",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "21.37",
        "cy": "9.74",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "3.07",
        "cy": "6.59",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "4.51",
        "cy": "4.40",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "5.67",
        "cy": "17.43",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "19.06",
        "cy": "4.39",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "3.60",
        "cy": "5.69",
        "r": "0.70"
      }
    ]
  ]
};

export const TridenteToll = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 2.37 L 21.00 21.05 L 21.37 9.74 L 3.07 6.59 L 4.51 4.40 L 5.67 17.43 L 19.06 4.39 L 3.60 5.69" />
      <circle cx="4.71" cy="2.37" r="1.25" />
      <circle cx="21.00" cy="21.05" r="0.95" />
      <circle cx="21.37" cy="9.74" r="1.31" />
      <circle cx="3.07" cy="6.59" r="1.26" />
      <circle cx="4.51" cy="4.40" r="0.82" />
      <circle cx="5.67" cy="17.43" r="1.27" />
      <circle cx="19.06" cy="4.39" r="1.41" />
      <circle cx="3.60" cy="5.69" r="0.70" />
      {children}
    </svg>
  );
});

export default TridenteToll;
