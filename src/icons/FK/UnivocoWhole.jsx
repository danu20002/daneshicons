import React from 'react';

export const iconData = {
  "id": "UnivocoWhole",
  "name": "UnivocoWhole",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.32 5.86 L 10.10 11.81 L 6.59 18.02 L 7.38 4.69 L 13.03 11.60 L 9.91 15.63 L 12.01 17.13 L 8.37 19.03"
      }
    ],
    [
      "circle",
      {
        "cx": "14.32",
        "cy": "5.86",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "10.10",
        "cy": "11.81",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "6.59",
        "cy": "18.02",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "7.38",
        "cy": "4.69",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "13.03",
        "cy": "11.60",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "9.91",
        "cy": "15.63",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "12.01",
        "cy": "17.13",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "8.37",
        "cy": "19.03",
        "r": "1.31"
      }
    ]
  ]
};

export const UnivocoWhole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.32 5.86 L 10.10 11.81 L 6.59 18.02 L 7.38 4.69 L 13.03 11.60 L 9.91 15.63 L 12.01 17.13 L 8.37 19.03" />
      <circle cx="14.32" cy="5.86" r="1.39" />
      <circle cx="10.10" cy="11.81" r="0.56" />
      <circle cx="6.59" cy="18.02" r="0.54" />
      <circle cx="7.38" cy="4.69" r="1.32" />
      <circle cx="13.03" cy="11.60" r="1.28" />
      <circle cx="9.91" cy="15.63" r="0.61" />
      <circle cx="12.01" cy="17.13" r="0.79" />
      <circle cx="8.37" cy="19.03" r="1.31" />
      {children}
    </svg>
  );
});

export default UnivocoWhole;
