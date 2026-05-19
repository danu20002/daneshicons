import React from 'react';

export const iconData = {
  "id": "TremaPaddle",
  "name": "TremaPaddle",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.51 3.35 L 7.62 18.93 L 12.09 15.65 L 8.84 9.35 L 17.12 20.34 L 21.15 5.67 L 3.49 3.54 L 8.80 8.54"
      }
    ],
    [
      "circle",
      {
        "cx": "5.51",
        "cy": "3.35",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "7.62",
        "cy": "18.93",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "12.09",
        "cy": "15.65",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "8.84",
        "cy": "9.35",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "17.12",
        "cy": "20.34",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "21.15",
        "cy": "5.67",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "3.49",
        "cy": "3.54",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.54",
        "r": "1.47"
      }
    ]
  ]
};

export const TremaPaddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.51 3.35 L 7.62 18.93 L 12.09 15.65 L 8.84 9.35 L 17.12 20.34 L 21.15 5.67 L 3.49 3.54 L 8.80 8.54" />
      <circle cx="5.51" cy="3.35" r="1.48" />
      <circle cx="7.62" cy="18.93" r="0.70" />
      <circle cx="12.09" cy="15.65" r="0.79" />
      <circle cx="8.84" cy="9.35" r="1.29" />
      <circle cx="17.12" cy="20.34" r="1.44" />
      <circle cx="21.15" cy="5.67" r="0.90" />
      <circle cx="3.49" cy="3.54" r="0.87" />
      <circle cx="8.80" cy="8.54" r="1.47" />
      {children}
    </svg>
  );
});

export default TremaPaddle;
