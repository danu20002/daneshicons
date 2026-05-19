import React from 'react';

export const iconData = {
  "id": "RhizoPole",
  "name": "RhizoPole",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.93 13.55 L 20.55 15.79 L 3.62 19.53 L 2.05 8.72 L 15.12 18.83"
      }
    ],
    [
      "circle",
      {
        "cx": "6.93",
        "cy": "13.55",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "20.55",
        "cy": "15.79",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "3.62",
        "cy": "19.53",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "2.05",
        "cy": "8.72",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "15.12",
        "cy": "18.83",
        "r": "1.32"
      }
    ]
  ]
};

export const RhizoPole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.93 13.55 L 20.55 15.79 L 3.62 19.53 L 2.05 8.72 L 15.12 18.83" />
      <circle cx="6.93" cy="13.55" r="0.68" />
      <circle cx="20.55" cy="15.79" r="0.72" />
      <circle cx="3.62" cy="19.53" r="0.62" />
      <circle cx="2.05" cy="8.72" r="0.58" />
      <circle cx="15.12" cy="18.83" r="1.32" />
      {children}
    </svg>
  );
});

export default RhizoPole;
