import React from 'react';

export const iconData = {
  "id": "ZaffiroClimb",
  "name": "ZaffiroClimb",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.83 7.13 L 13.06 7.92 L 6.24 15.68 L 10.29 11.09"
      }
    ],
    [
      "circle",
      {
        "cx": "5.83",
        "cy": "7.13",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "13.06",
        "cy": "7.92",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "6.24",
        "cy": "15.68",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "10.29",
        "cy": "11.09",
        "r": "1.29"
      }
    ]
  ]
};

export const ZaffiroClimb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.83 7.13 L 13.06 7.92 L 6.24 15.68 L 10.29 11.09" />
      <circle cx="5.83" cy="7.13" r="0.59" />
      <circle cx="13.06" cy="7.92" r="1.17" />
      <circle cx="6.24" cy="15.68" r="0.62" />
      <circle cx="10.29" cy="11.09" r="1.29" />
      {children}
    </svg>
  );
});

export default ZaffiroClimb;
