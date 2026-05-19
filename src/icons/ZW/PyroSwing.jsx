import React from 'react';

export const iconData = {
  "id": "PyroSwing",
  "name": "PyroSwing",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.76 16.48 L 20.52 18.40 L 7.82 15.49 L 11.64 18.06 L 14.36 3.71 L 21.46 17.25 L 7.44 12.43 L 11.65 18.34"
      }
    ],
    [
      "circle",
      {
        "cx": "11.76",
        "cy": "16.48",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "20.52",
        "cy": "18.40",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "7.82",
        "cy": "15.49",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "11.64",
        "cy": "18.06",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "14.36",
        "cy": "3.71",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "21.46",
        "cy": "17.25",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "7.44",
        "cy": "12.43",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "11.65",
        "cy": "18.34",
        "r": "0.58"
      }
    ]
  ]
};

export const PyroSwing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.76 16.48 L 20.52 18.40 L 7.82 15.49 L 11.64 18.06 L 14.36 3.71 L 21.46 17.25 L 7.44 12.43 L 11.65 18.34" />
      <circle cx="11.76" cy="16.48" r="1.50" />
      <circle cx="20.52" cy="18.40" r="0.82" />
      <circle cx="7.82" cy="15.49" r="1.25" />
      <circle cx="11.64" cy="18.06" r="1.04" />
      <circle cx="14.36" cy="3.71" r="1.11" />
      <circle cx="21.46" cy="17.25" r="0.58" />
      <circle cx="7.44" cy="12.43" r="0.56" />
      <circle cx="11.65" cy="18.34" r="0.58" />
      {children}
    </svg>
  );
});

export default PyroSwing;
