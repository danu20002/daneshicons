import React from 'react';

export const iconData = {
  "id": "JunctoPouch",
  "name": "JunctoPouch",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.02 10.01 L 19.10 19.95 L 2.65 8.71 L 9.37 8.06 L 10.46 21.24 L 5.01 5.73"
      }
    ],
    [
      "circle",
      {
        "cx": "3.02",
        "cy": "10.01",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "19.10",
        "cy": "19.95",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "2.65",
        "cy": "8.71",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "9.37",
        "cy": "8.06",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "10.46",
        "cy": "21.24",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "5.01",
        "cy": "5.73",
        "r": "0.79"
      }
    ]
  ]
};

export const JunctoPouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.02 10.01 L 19.10 19.95 L 2.65 8.71 L 9.37 8.06 L 10.46 21.24 L 5.01 5.73" />
      <circle cx="3.02" cy="10.01" r="0.57" />
      <circle cx="19.10" cy="19.95" r="0.86" />
      <circle cx="2.65" cy="8.71" r="1.46" />
      <circle cx="9.37" cy="8.06" r="1.33" />
      <circle cx="10.46" cy="21.24" r="1.13" />
      <circle cx="5.01" cy="5.73" r="0.79" />
      {children}
    </svg>
  );
});

export default JunctoPouch;
