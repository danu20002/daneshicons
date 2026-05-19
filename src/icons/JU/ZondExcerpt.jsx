import React from 'react';

export const iconData = {
  "id": "ZondExcerpt",
  "name": "ZondExcerpt",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.54 9.87 L 13.49 6.57 L 21.15 7.79 L 10.02 11.56 L 17.67 6.44 L 10.10 19.11 L 2.25 10.16 L 9.97 10.50"
      }
    ],
    [
      "circle",
      {
        "cx": "15.54",
        "cy": "9.87",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "13.49",
        "cy": "6.57",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "21.15",
        "cy": "7.79",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "10.02",
        "cy": "11.56",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "17.67",
        "cy": "6.44",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "10.10",
        "cy": "19.11",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "2.25",
        "cy": "10.16",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "9.97",
        "cy": "10.50",
        "r": "0.84"
      }
    ]
  ]
};

export const ZondExcerpt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.54 9.87 L 13.49 6.57 L 21.15 7.79 L 10.02 11.56 L 17.67 6.44 L 10.10 19.11 L 2.25 10.16 L 9.97 10.50" />
      <circle cx="15.54" cy="9.87" r="1.39" />
      <circle cx="13.49" cy="6.57" r="1.39" />
      <circle cx="21.15" cy="7.79" r="0.77" />
      <circle cx="10.02" cy="11.56" r="0.97" />
      <circle cx="17.67" cy="6.44" r="0.73" />
      <circle cx="10.10" cy="19.11" r="1.25" />
      <circle cx="2.25" cy="10.16" r="0.50" />
      <circle cx="9.97" cy="10.50" r="0.84" />
      {children}
    </svg>
  );
});

export default ZondExcerpt;
