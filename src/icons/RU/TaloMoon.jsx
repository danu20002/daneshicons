import React from 'react';

export const iconData = {
  "id": "TaloMoon",
  "name": "TaloMoon",
  "category": "RU",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.68 17.46 L 16.95 11.33"
      }
    ],
    [
      "path",
      {
        "d": "M 16.95 11.33 L 9.95 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 9.95 20.84 L 3.61 5.46"
      }
    ],
    [
      "circle",
      {
        "cx": "13.68",
        "cy": "17.46",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.21",
        "cy": "16.00",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.95",
        "cy": "11.33",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.95",
        "cy": "20.84",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.61",
        "cy": "5.46",
        "r": "1.5"
      }
    ]
  ]
};

export const TaloMoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.68 17.46 L 16.95 11.33" />
      <path d="M 16.95 11.33 L 9.95 20.84" />
      <path d="M 9.95 20.84 L 3.61 5.46" />
      <circle cx="13.68" cy="17.46" r="1.5" />
      <circle cx="20.21" cy="16.00" r="1.5" />
      <circle cx="16.95" cy="11.33" r="1.5" />
      <circle cx="9.95" cy="20.84" r="1.5" />
      <circle cx="3.61" cy="5.46" r="1.5" />
      {children}
    </svg>
  );
});

export default TaloMoon;
