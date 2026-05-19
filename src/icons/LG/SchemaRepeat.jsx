import React from 'react';

export const iconData = {
  "id": "SchemaRepeat",
  "name": "SchemaRepeat",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.68 5.04 L 16.80 20.49 L 3.12 11.21 L 14.33 3.69 L 20.14 14.97 L 8.96 8.51 L 6.98 7.43 L 8.71 20.15"
      }
    ],
    [
      "circle",
      {
        "cx": "14.68",
        "cy": "5.04",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "16.80",
        "cy": "20.49",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "3.12",
        "cy": "11.21",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "14.33",
        "cy": "3.69",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "20.14",
        "cy": "14.97",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "8.96",
        "cy": "8.51",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "6.98",
        "cy": "7.43",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "8.71",
        "cy": "20.15",
        "r": "0.99"
      }
    ]
  ]
};

export const SchemaRepeat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.68 5.04 L 16.80 20.49 L 3.12 11.21 L 14.33 3.69 L 20.14 14.97 L 8.96 8.51 L 6.98 7.43 L 8.71 20.15" />
      <circle cx="14.68" cy="5.04" r="1.20" />
      <circle cx="16.80" cy="20.49" r="0.60" />
      <circle cx="3.12" cy="11.21" r="0.69" />
      <circle cx="14.33" cy="3.69" r="1.04" />
      <circle cx="20.14" cy="14.97" r="0.81" />
      <circle cx="8.96" cy="8.51" r="1.08" />
      <circle cx="6.98" cy="7.43" r="1.48" />
      <circle cx="8.71" cy="20.15" r="0.99" />
      {children}
    </svg>
  );
});

export default SchemaRepeat;
