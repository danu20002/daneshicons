import React from 'react';

export const iconData = {
  "id": "FrigoCrate",
  "name": "FrigoCrate",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.88 5.98 L 19.75 7.12 L 7.58 13.09 L 11.31 13.50"
      }
    ],
    [
      "circle",
      {
        "cx": "19.88",
        "cy": "5.98",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "19.75",
        "cy": "7.12",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "7.58",
        "cy": "13.09",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "11.31",
        "cy": "13.50",
        "r": "1.35"
      }
    ]
  ]
};

export const FrigoCrate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.88 5.98 L 19.75 7.12 L 7.58 13.09 L 11.31 13.50" />
      <circle cx="19.88" cy="5.98" r="1.04" />
      <circle cx="19.75" cy="7.12" r="0.74" />
      <circle cx="7.58" cy="13.09" r="0.84" />
      <circle cx="11.31" cy="13.50" r="1.35" />
      {children}
    </svg>
  );
});

export default FrigoCrate;
