import React from 'react';

export const iconData = {
  "id": "TandemJustice",
  "name": "TandemJustice",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.36 17.43 L 16.58 7.27 L 20.47 19.62 L 14.33 12.72 L 19.99 5.83 L 14.68 13.17"
      }
    ],
    [
      "circle",
      {
        "cx": "2.36",
        "cy": "17.43",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "16.58",
        "cy": "7.27",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "20.47",
        "cy": "19.62",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "14.33",
        "cy": "12.72",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "19.99",
        "cy": "5.83",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "14.68",
        "cy": "13.17",
        "r": "0.62"
      }
    ]
  ]
};

export const TandemJustice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.36 17.43 L 16.58 7.27 L 20.47 19.62 L 14.33 12.72 L 19.99 5.83 L 14.68 13.17" />
      <circle cx="2.36" cy="17.43" r="0.56" />
      <circle cx="16.58" cy="7.27" r="0.54" />
      <circle cx="20.47" cy="19.62" r="1.01" />
      <circle cx="14.33" cy="12.72" r="1.43" />
      <circle cx="19.99" cy="5.83" r="1.06" />
      <circle cx="14.68" cy="13.17" r="0.62" />
      {children}
    </svg>
  );
});

export default TandemJustice;
