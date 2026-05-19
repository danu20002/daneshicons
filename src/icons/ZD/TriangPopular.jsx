import React from 'react';

export const iconData = {
  "id": "TriangPopular",
  "name": "TriangPopular",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.33 18.06 L 17.98 5.48 L 14.81 6.11 L 2.48 12.89 L 3.53 13.94 L 16.78 17.48 L 21.24 2.77 L 15.16 9.93"
      }
    ],
    [
      "circle",
      {
        "cx": "13.33",
        "cy": "18.06",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "17.98",
        "cy": "5.48",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "14.81",
        "cy": "6.11",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "2.48",
        "cy": "12.89",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "3.53",
        "cy": "13.94",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "16.78",
        "cy": "17.48",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "21.24",
        "cy": "2.77",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "15.16",
        "cy": "9.93",
        "r": "1.05"
      }
    ]
  ]
};

export const TriangPopular = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.33 18.06 L 17.98 5.48 L 14.81 6.11 L 2.48 12.89 L 3.53 13.94 L 16.78 17.48 L 21.24 2.77 L 15.16 9.93" />
      <circle cx="13.33" cy="18.06" r="0.51" />
      <circle cx="17.98" cy="5.48" r="0.62" />
      <circle cx="14.81" cy="6.11" r="0.53" />
      <circle cx="2.48" cy="12.89" r="1.08" />
      <circle cx="3.53" cy="13.94" r="1.34" />
      <circle cx="16.78" cy="17.48" r="0.93" />
      <circle cx="21.24" cy="2.77" r="1.16" />
      <circle cx="15.16" cy="9.93" r="1.05" />
      {children}
    </svg>
  );
});

export default TriangPopular;
