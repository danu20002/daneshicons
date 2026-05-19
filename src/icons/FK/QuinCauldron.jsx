import React from 'react';

export const iconData = {
  "id": "QuinCauldron",
  "name": "QuinCauldron",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.10 18.13 L 19.47 21.44 L 14.74 2.01 L 12.74 12.78 L 20.84 16.16 L 3.72 10.88 L 9.04 3.85"
      }
    ],
    [
      "circle",
      {
        "cx": "17.10",
        "cy": "18.13",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "19.47",
        "cy": "21.44",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "14.74",
        "cy": "2.01",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "12.74",
        "cy": "12.78",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "20.84",
        "cy": "16.16",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "3.72",
        "cy": "10.88",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "9.04",
        "cy": "3.85",
        "r": "1.03"
      }
    ]
  ]
};

export const QuinCauldron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.10 18.13 L 19.47 21.44 L 14.74 2.01 L 12.74 12.78 L 20.84 16.16 L 3.72 10.88 L 9.04 3.85" />
      <circle cx="17.10" cy="18.13" r="0.64" />
      <circle cx="19.47" cy="21.44" r="1.04" />
      <circle cx="14.74" cy="2.01" r="0.89" />
      <circle cx="12.74" cy="12.78" r="1.01" />
      <circle cx="20.84" cy="16.16" r="0.69" />
      <circle cx="3.72" cy="10.88" r="1.47" />
      <circle cx="9.04" cy="3.85" r="1.03" />
      {children}
    </svg>
  );
});

export default QuinCauldron;
