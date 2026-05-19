import React from 'react';

export const iconData = {
  "id": "TweedCommand",
  "name": "TweedCommand",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.36 19.42 L 2.39 20.20 L 3.52 20.43 L 10.96 15.84 L 16.91 18.24 L 7.38 10.68 L 11.90 11.25 L 19.19 17.12"
      }
    ],
    [
      "circle",
      {
        "cx": "3.36",
        "cy": "19.42",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "2.39",
        "cy": "20.20",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "3.52",
        "cy": "20.43",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "10.96",
        "cy": "15.84",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "16.91",
        "cy": "18.24",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "7.38",
        "cy": "10.68",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "11.90",
        "cy": "11.25",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "19.19",
        "cy": "17.12",
        "r": "0.80"
      }
    ]
  ]
};

export const TweedCommand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.36 19.42 L 2.39 20.20 L 3.52 20.43 L 10.96 15.84 L 16.91 18.24 L 7.38 10.68 L 11.90 11.25 L 19.19 17.12" />
      <circle cx="3.36" cy="19.42" r="0.81" />
      <circle cx="2.39" cy="20.20" r="0.77" />
      <circle cx="3.52" cy="20.43" r="0.67" />
      <circle cx="10.96" cy="15.84" r="0.54" />
      <circle cx="16.91" cy="18.24" r="1.36" />
      <circle cx="7.38" cy="10.68" r="0.92" />
      <circle cx="11.90" cy="11.25" r="1.37" />
      <circle cx="19.19" cy="17.12" r="0.80" />
      {children}
    </svg>
  );
});

export default TweedCommand;
