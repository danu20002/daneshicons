import React from 'react';

export const iconData = {
  "id": "ZaffiroSober",
  "name": "ZaffiroSober",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.55 4.49 L 12.68 9.13 L 20.44 11.55 L 15.92 6.81 L 9.60 13.14"
      }
    ],
    [
      "circle",
      {
        "cx": "20.55",
        "cy": "4.49",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "12.68",
        "cy": "9.13",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "20.44",
        "cy": "11.55",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "15.92",
        "cy": "6.81",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "9.60",
        "cy": "13.14",
        "r": "1.39"
      }
    ]
  ]
};

export const ZaffiroSober = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.55 4.49 L 12.68 9.13 L 20.44 11.55 L 15.92 6.81 L 9.60 13.14" />
      <circle cx="20.55" cy="4.49" r="1.05" />
      <circle cx="12.68" cy="9.13" r="0.89" />
      <circle cx="20.44" cy="11.55" r="1.40" />
      <circle cx="15.92" cy="6.81" r="1.36" />
      <circle cx="9.60" cy="13.14" r="1.39" />
      {children}
    </svg>
  );
});

export default ZaffiroSober;
