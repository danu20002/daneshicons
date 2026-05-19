import React from 'react';

export const iconData = {
  "id": "CryptKnuckle",
  "name": "CryptKnuckle",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 2.85 L 12.32 20.65 L 13.57 11.81 L 11.32 19.07"
      }
    ],
    [
      "circle",
      {
        "cx": "3.97",
        "cy": "2.85",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "12.32",
        "cy": "20.65",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "13.57",
        "cy": "11.81",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "11.32",
        "cy": "19.07",
        "r": "1.48"
      }
    ]
  ]
};

export const CryptKnuckle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 2.85 L 12.32 20.65 L 13.57 11.81 L 11.32 19.07" />
      <circle cx="3.97" cy="2.85" r="1.37" />
      <circle cx="12.32" cy="20.65" r="0.89" />
      <circle cx="13.57" cy="11.81" r="0.89" />
      <circle cx="11.32" cy="19.07" r="1.48" />
      {children}
    </svg>
  );
});

export default CryptKnuckle;
