import React from 'react';

export const iconData = {
  "id": "ZambelloCask",
  "name": "ZambelloCask",
  "category": "WX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.82 17.37 L 10.03 10.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 17.37 L 11.78 5.68"
      }
    ],
    [
      "path",
      {
        "d": "M 14.44 18.89 L 10.03 10.64"
      }
    ],
    [
      "path",
      {
        "d": "M 14.44 18.89 L 11.78 5.68"
      }
    ],
    [
      "path",
      {
        "d": "M 10.03 10.64 L 11.78 5.68"
      }
    ],
    [
      "circle",
      {
        "cx": "7.82",
        "cy": "17.37",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.44",
        "cy": "18.89",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "10.03",
        "cy": "10.64",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.78",
        "cy": "5.68",
        "r": "1.5"
      }
    ]
  ]
};

export const ZambelloCask = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.82 17.37 L 10.03 10.64" />
      <path d="M 7.82 17.37 L 11.78 5.68" />
      <path d="M 14.44 18.89 L 10.03 10.64" />
      <path d="M 14.44 18.89 L 11.78 5.68" />
      <path d="M 10.03 10.64 L 11.78 5.68" />
      <circle cx="7.82" cy="17.37" r="1.5" />
      <circle cx="14.44" cy="18.89" r="1.5" />
      <circle cx="10.03" cy="10.64" r="1.5" />
      <circle cx="11.78" cy="5.68" r="1.5" />
      {children}
    </svg>
  );
});

export default ZambelloCask;
