import React from 'react';

export const iconData = {
  "id": "UbiquiSupreme",
  "name": "UbiquiSupreme",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.08 7.47 L 9.01 5.69 L 17.69 12.75 L 14.26 9.93"
      }
    ],
    [
      "circle",
      {
        "cx": "11.08",
        "cy": "7.47",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "9.01",
        "cy": "5.69",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "17.69",
        "cy": "12.75",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "14.26",
        "cy": "9.93",
        "r": "0.98"
      }
    ]
  ]
};

export const UbiquiSupreme = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.08 7.47 L 9.01 5.69 L 17.69 12.75 L 14.26 9.93" />
      <circle cx="11.08" cy="7.47" r="1.44" />
      <circle cx="9.01" cy="5.69" r="1.42" />
      <circle cx="17.69" cy="12.75" r="1.43" />
      <circle cx="14.26" cy="9.93" r="0.98" />
      {children}
    </svg>
  );
});

export default UbiquiSupreme;
