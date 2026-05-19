import React from 'react';

export const iconData = {
  "id": "TorchioPlan",
  "name": "TorchioPlan",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.14 3.85 L 11.64 6.37 L 2.78 6.81 L 3.69 2.91 L 8.02 4.46"
      }
    ],
    [
      "circle",
      {
        "cx": "19.14",
        "cy": "3.85",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "11.64",
        "cy": "6.37",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "2.78",
        "cy": "6.81",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "3.69",
        "cy": "2.91",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "8.02",
        "cy": "4.46",
        "r": "0.63"
      }
    ]
  ]
};

export const TorchioPlan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.14 3.85 L 11.64 6.37 L 2.78 6.81 L 3.69 2.91 L 8.02 4.46" />
      <circle cx="19.14" cy="3.85" r="1.17" />
      <circle cx="11.64" cy="6.37" r="0.61" />
      <circle cx="2.78" cy="6.81" r="0.96" />
      <circle cx="3.69" cy="2.91" r="1.21" />
      <circle cx="8.02" cy="4.46" r="0.63" />
      {children}
    </svg>
  );
});

export default TorchioPlan;
