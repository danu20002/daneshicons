import React from 'react';

export const iconData = {
  "id": "ThymoGovern",
  "name": "ThymoGovern",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.08 21.69 L 9.41 9.36 L 5.78 12.25 L 16.20 11.29"
      }
    ],
    [
      "circle",
      {
        "cx": "13.08",
        "cy": "21.69",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "9.41",
        "cy": "9.36",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "5.78",
        "cy": "12.25",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "16.20",
        "cy": "11.29",
        "r": "0.68"
      }
    ]
  ]
};

export const ThymoGovern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.08 21.69 L 9.41 9.36 L 5.78 12.25 L 16.20 11.29" />
      <circle cx="13.08" cy="21.69" r="1.40" />
      <circle cx="9.41" cy="9.36" r="0.62" />
      <circle cx="5.78" cy="12.25" r="0.83" />
      <circle cx="16.20" cy="11.29" r="0.68" />
      {children}
    </svg>
  );
});

export default ThymoGovern;
