import React from 'react';

export const iconData = {
  "id": "ZoccoloPlace",
  "name": "ZoccoloPlace",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.90 15.71 L 12.43 18.05 L 7.04 17.42 L 12.17 5.80 L 8.86 20.67 L 17.87 4.04"
      }
    ],
    [
      "circle",
      {
        "cx": "8.90",
        "cy": "15.71",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "12.43",
        "cy": "18.05",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "7.04",
        "cy": "17.42",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "12.17",
        "cy": "5.80",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "8.86",
        "cy": "20.67",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "17.87",
        "cy": "4.04",
        "r": "1.31"
      }
    ]
  ]
};

export const ZoccoloPlace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.90 15.71 L 12.43 18.05 L 7.04 17.42 L 12.17 5.80 L 8.86 20.67 L 17.87 4.04" />
      <circle cx="8.90" cy="15.71" r="1.17" />
      <circle cx="12.43" cy="18.05" r="0.62" />
      <circle cx="7.04" cy="17.42" r="0.65" />
      <circle cx="12.17" cy="5.80" r="1.26" />
      <circle cx="8.86" cy="20.67" r="1.25" />
      <circle cx="17.87" cy="4.04" r="1.31" />
      {children}
    </svg>
  );
});

export default ZoccoloPlace;
