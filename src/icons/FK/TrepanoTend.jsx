import React from 'react';

export const iconData = {
  "id": "TrepanoTend",
  "name": "TrepanoTend",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 9.31 L 20.44 20.14 L 11.82 6.44 L 11.70 15.58 L 8.82 11.77 L 13.09 12.37 L 15.28 17.76 L 7.42 15.14"
      }
    ],
    [
      "circle",
      {
        "cx": "3.62",
        "cy": "9.31",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "20.44",
        "cy": "20.14",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "11.82",
        "cy": "6.44",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "11.70",
        "cy": "15.58",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "8.82",
        "cy": "11.77",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "13.09",
        "cy": "12.37",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "15.28",
        "cy": "17.76",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "7.42",
        "cy": "15.14",
        "r": "1.50"
      }
    ]
  ]
};

export const TrepanoTend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 9.31 L 20.44 20.14 L 11.82 6.44 L 11.70 15.58 L 8.82 11.77 L 13.09 12.37 L 15.28 17.76 L 7.42 15.14" />
      <circle cx="3.62" cy="9.31" r="0.73" />
      <circle cx="20.44" cy="20.14" r="0.68" />
      <circle cx="11.82" cy="6.44" r="1.26" />
      <circle cx="11.70" cy="15.58" r="0.87" />
      <circle cx="8.82" cy="11.77" r="1.00" />
      <circle cx="13.09" cy="12.37" r="1.20" />
      <circle cx="15.28" cy="17.76" r="1.03" />
      <circle cx="7.42" cy="15.14" r="1.50" />
      {children}
    </svg>
  );
});

export default TrepanoTend;
