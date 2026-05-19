import React from 'react';

export const iconData = {
  "id": "LarimoFairy",
  "name": "LarimoFairy",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.33 9.66 L 15.64 14.23 L 4.11 7.92 L 21.89 8.27 L 17.37 8.51"
      }
    ],
    [
      "circle",
      {
        "cx": "15.33",
        "cy": "9.66",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "15.64",
        "cy": "14.23",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "4.11",
        "cy": "7.92",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "21.89",
        "cy": "8.27",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "17.37",
        "cy": "8.51",
        "r": "1.10"
      }
    ]
  ]
};

export const LarimoFairy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.33 9.66 L 15.64 14.23 L 4.11 7.92 L 21.89 8.27 L 17.37 8.51" />
      <circle cx="15.33" cy="9.66" r="0.60" />
      <circle cx="15.64" cy="14.23" r="0.62" />
      <circle cx="4.11" cy="7.92" r="1.25" />
      <circle cx="21.89" cy="8.27" r="1.31" />
      <circle cx="17.37" cy="8.51" r="1.10" />
      {children}
    </svg>
  );
});

export default LarimoFairy;
