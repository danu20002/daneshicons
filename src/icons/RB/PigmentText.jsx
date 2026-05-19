import React from 'react';

export const iconData = {
  "id": "PigmentText",
  "name": "PigmentText",
  "category": "RB",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.13 15.53 L 10.23 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 11.13 15.53 L 18.88 11.40"
      }
    ],
    [
      "path",
      {
        "d": "M 10.23 19.13 L 18.88 11.40"
      }
    ],
    [
      "circle",
      {
        "cx": "11.13",
        "cy": "15.53",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "10.23",
        "cy": "19.13",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.88",
        "cy": "11.40",
        "r": "1.5"
      }
    ]
  ]
};

export const PigmentText = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.13 15.53 L 10.23 19.13" />
      <path d="M 11.13 15.53 L 18.88 11.40" />
      <path d="M 10.23 19.13 L 18.88 11.40" />
      <circle cx="11.13" cy="15.53" r="1.5" />
      <circle cx="10.23" cy="19.13" r="1.5" />
      <circle cx="18.88" cy="11.40" r="1.5" />
      {children}
    </svg>
  );
});

export default PigmentText;
