import React from 'react';

export const iconData = {
  "id": "PerloPoison",
  "name": "PerloPoison",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.34 13.47 L 18.02 17.63 L 9.58 12.91 L 2.09 10.12"
      }
    ],
    [
      "circle",
      {
        "cx": "19.34",
        "cy": "13.47",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "18.02",
        "cy": "17.63",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "9.58",
        "cy": "12.91",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "2.09",
        "cy": "10.12",
        "r": "1.20"
      }
    ]
  ]
};

export const PerloPoison = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.34 13.47 L 18.02 17.63 L 9.58 12.91 L 2.09 10.12" />
      <circle cx="19.34" cy="13.47" r="0.87" />
      <circle cx="18.02" cy="17.63" r="0.83" />
      <circle cx="9.58" cy="12.91" r="0.57" />
      <circle cx="2.09" cy="10.12" r="1.20" />
      {children}
    </svg>
  );
});

export default PerloPoison;
