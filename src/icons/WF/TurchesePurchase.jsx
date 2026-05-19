import React from 'react';

export const iconData = {
  "id": "TurchesePurchase",
  "name": "TurchesePurchase",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.55 19.49 L 9.25 20.18 L 9.38 21.80 L 19.87 4.26 L 13.44 5.28"
      }
    ],
    [
      "circle",
      {
        "cx": "4.55",
        "cy": "19.49",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "9.25",
        "cy": "20.18",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "9.38",
        "cy": "21.80",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "19.87",
        "cy": "4.26",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "13.44",
        "cy": "5.28",
        "r": "1.33"
      }
    ]
  ]
};

export const TurchesePurchase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.55 19.49 L 9.25 20.18 L 9.38 21.80 L 19.87 4.26 L 13.44 5.28" />
      <circle cx="4.55" cy="19.49" r="0.71" />
      <circle cx="9.25" cy="20.18" r="1.33" />
      <circle cx="9.38" cy="21.80" r="1.13" />
      <circle cx="19.87" cy="4.26" r="0.64" />
      <circle cx="13.44" cy="5.28" r="1.33" />
      {children}
    </svg>
  );
});

export default TurchesePurchase;
