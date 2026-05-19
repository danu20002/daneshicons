import React from 'react';

export const iconData = {
  "id": "SynchroSpring",
  "name": "SynchroSpring",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.20 7.87 L 17.24 10.80 L 16.17 6.89 L 6.41 20.49 L 4.16 13.70"
      }
    ],
    [
      "circle",
      {
        "cx": "19.20",
        "cy": "7.87",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "17.24",
        "cy": "10.80",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "16.17",
        "cy": "6.89",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "6.41",
        "cy": "20.49",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "4.16",
        "cy": "13.70",
        "r": "1.40"
      }
    ]
  ]
};

export const SynchroSpring = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.20 7.87 L 17.24 10.80 L 16.17 6.89 L 6.41 20.49 L 4.16 13.70" />
      <circle cx="19.20" cy="7.87" r="1.25" />
      <circle cx="17.24" cy="10.80" r="1.27" />
      <circle cx="16.17" cy="6.89" r="0.77" />
      <circle cx="6.41" cy="20.49" r="1.35" />
      <circle cx="4.16" cy="13.70" r="1.40" />
      {children}
    </svg>
  );
});

export default SynchroSpring;
