import React from 'react';

export const iconData = {
  "id": "VoluttSudden",
  "name": "VoluttSudden",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.92 20.68 L 13.61 15.54 L 21.58 18.38 L 19.78 10.44 L 9.42 14.79 L 7.44 7.82 L 12.41 21.05 L 8.87 2.03"
      }
    ],
    [
      "circle",
      {
        "cx": "12.92",
        "cy": "20.68",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "13.61",
        "cy": "15.54",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "21.58",
        "cy": "18.38",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "19.78",
        "cy": "10.44",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "9.42",
        "cy": "14.79",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "7.44",
        "cy": "7.82",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "12.41",
        "cy": "21.05",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "8.87",
        "cy": "2.03",
        "r": "0.79"
      }
    ]
  ]
};

export const VoluttSudden = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.92 20.68 L 13.61 15.54 L 21.58 18.38 L 19.78 10.44 L 9.42 14.79 L 7.44 7.82 L 12.41 21.05 L 8.87 2.03" />
      <circle cx="12.92" cy="20.68" r="0.92" />
      <circle cx="13.61" cy="15.54" r="0.65" />
      <circle cx="21.58" cy="18.38" r="0.59" />
      <circle cx="19.78" cy="10.44" r="0.98" />
      <circle cx="9.42" cy="14.79" r="1.02" />
      <circle cx="7.44" cy="7.82" r="0.84" />
      <circle cx="12.41" cy="21.05" r="0.82" />
      <circle cx="8.87" cy="2.03" r="0.79" />
      {children}
    </svg>
  );
});

export default VoluttSudden;
