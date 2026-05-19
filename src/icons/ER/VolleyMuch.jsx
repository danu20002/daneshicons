import React from 'react';

export const iconData = {
  "id": "VolleyMuch",
  "name": "VolleyMuch",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.39 4.94 L 14.37 21.01 L 11.57 4.39 L 5.82 4.95 L 6.37 18.12 L 9.51 17.62 L 20.66 8.39"
      }
    ],
    [
      "circle",
      {
        "cx": "3.39",
        "cy": "4.94",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "14.37",
        "cy": "21.01",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "11.57",
        "cy": "4.39",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "5.82",
        "cy": "4.95",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "6.37",
        "cy": "18.12",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "9.51",
        "cy": "17.62",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "20.66",
        "cy": "8.39",
        "r": "1.02"
      }
    ]
  ]
};

export const VolleyMuch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.39 4.94 L 14.37 21.01 L 11.57 4.39 L 5.82 4.95 L 6.37 18.12 L 9.51 17.62 L 20.66 8.39" />
      <circle cx="3.39" cy="4.94" r="1.16" />
      <circle cx="14.37" cy="21.01" r="0.56" />
      <circle cx="11.57" cy="4.39" r="0.50" />
      <circle cx="5.82" cy="4.95" r="0.84" />
      <circle cx="6.37" cy="18.12" r="1.33" />
      <circle cx="9.51" cy="17.62" r="1.41" />
      <circle cx="20.66" cy="8.39" r="1.02" />
      {children}
    </svg>
  );
});

export default VolleyMuch;
