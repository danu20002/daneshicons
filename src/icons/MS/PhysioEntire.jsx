import React from 'react';

export const iconData = {
  "id": "PhysioEntire",
  "name": "PhysioEntire",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.68 14.22 L 6.79 20.47 L 4.61 18.75 L 16.01 7.99 L 20.47 7.23 L 4.19 4.02 L 3.82 12.15 L 19.17 16.23"
      }
    ],
    [
      "circle",
      {
        "cx": "14.68",
        "cy": "14.22",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "6.79",
        "cy": "20.47",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "4.61",
        "cy": "18.75",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "16.01",
        "cy": "7.99",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "20.47",
        "cy": "7.23",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "4.19",
        "cy": "4.02",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "3.82",
        "cy": "12.15",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "19.17",
        "cy": "16.23",
        "r": "0.74"
      }
    ]
  ]
};

export const PhysioEntire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.68 14.22 L 6.79 20.47 L 4.61 18.75 L 16.01 7.99 L 20.47 7.23 L 4.19 4.02 L 3.82 12.15 L 19.17 16.23" />
      <circle cx="14.68" cy="14.22" r="1.38" />
      <circle cx="6.79" cy="20.47" r="1.26" />
      <circle cx="4.61" cy="18.75" r="1.24" />
      <circle cx="16.01" cy="7.99" r="0.96" />
      <circle cx="20.47" cy="7.23" r="0.81" />
      <circle cx="4.19" cy="4.02" r="0.66" />
      <circle cx="3.82" cy="12.15" r="1.43" />
      <circle cx="19.17" cy="16.23" r="0.74" />
      {children}
    </svg>
  );
});

export default PhysioEntire;
