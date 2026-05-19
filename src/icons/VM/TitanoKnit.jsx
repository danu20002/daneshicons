import React from 'react';

export const iconData = {
  "id": "TitanoKnit",
  "name": "TitanoKnit",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.40 17.10 L 5.85 7.70 L 7.17 18.31 L 2.93 13.13 L 18.47 17.27 L 18.07 5.83"
      }
    ],
    [
      "circle",
      {
        "cx": "20.40",
        "cy": "17.10",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "5.85",
        "cy": "7.70",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "7.17",
        "cy": "18.31",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "2.93",
        "cy": "13.13",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "18.47",
        "cy": "17.27",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "18.07",
        "cy": "5.83",
        "r": "0.58"
      }
    ]
  ]
};

export const TitanoKnit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.40 17.10 L 5.85 7.70 L 7.17 18.31 L 2.93 13.13 L 18.47 17.27 L 18.07 5.83" />
      <circle cx="20.40" cy="17.10" r="1.07" />
      <circle cx="5.85" cy="7.70" r="0.97" />
      <circle cx="7.17" cy="18.31" r="0.90" />
      <circle cx="2.93" cy="13.13" r="0.56" />
      <circle cx="18.47" cy="17.27" r="0.70" />
      <circle cx="18.07" cy="5.83" r="0.58" />
      {children}
    </svg>
  );
});

export default TitanoKnit;
