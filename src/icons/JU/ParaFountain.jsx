import React from 'react';

export const iconData = {
  "id": "ParaFountain",
  "name": "ParaFountain",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.89 6.50 L 9.55 12.63 L 9.01 9.24 L 21.50 17.67 L 7.38 20.73 L 16.62 8.47 L 5.39 10.93"
      }
    ],
    [
      "circle",
      {
        "cx": "21.89",
        "cy": "6.50",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "9.55",
        "cy": "12.63",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "9.01",
        "cy": "9.24",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "21.50",
        "cy": "17.67",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "7.38",
        "cy": "20.73",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "16.62",
        "cy": "8.47",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "5.39",
        "cy": "10.93",
        "r": "0.84"
      }
    ]
  ]
};

export const ParaFountain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.89 6.50 L 9.55 12.63 L 9.01 9.24 L 21.50 17.67 L 7.38 20.73 L 16.62 8.47 L 5.39 10.93" />
      <circle cx="21.89" cy="6.50" r="1.31" />
      <circle cx="9.55" cy="12.63" r="0.73" />
      <circle cx="9.01" cy="9.24" r="0.67" />
      <circle cx="21.50" cy="17.67" r="0.75" />
      <circle cx="7.38" cy="20.73" r="0.68" />
      <circle cx="16.62" cy="8.47" r="1.26" />
      <circle cx="5.39" cy="10.93" r="0.84" />
      {children}
    </svg>
  );
});

export default ParaFountain;
