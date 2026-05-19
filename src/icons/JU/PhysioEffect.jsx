import React from 'react';

export const iconData = {
  "id": "PhysioEffect",
  "name": "PhysioEffect",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.14 10.63 L 8.03 11.61 L 4.07 3.93 L 10.74 5.83"
      }
    ],
    [
      "circle",
      {
        "cx": "7.14",
        "cy": "10.63",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "8.03",
        "cy": "11.61",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "4.07",
        "cy": "3.93",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "10.74",
        "cy": "5.83",
        "r": "0.65"
      }
    ]
  ]
};

export const PhysioEffect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.14 10.63 L 8.03 11.61 L 4.07 3.93 L 10.74 5.83" />
      <circle cx="7.14" cy="10.63" r="0.62" />
      <circle cx="8.03" cy="11.61" r="0.61" />
      <circle cx="4.07" cy="3.93" r="0.55" />
      <circle cx="10.74" cy="5.83" r="0.65" />
      {children}
    </svg>
  );
});

export default PhysioEffect;
