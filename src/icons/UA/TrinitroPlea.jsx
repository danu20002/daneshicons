import React from 'react';

export const iconData = {
  "id": "TrinitroPlea",
  "name": "TrinitroPlea",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.27 3.41 L 17.13 6.14 L 17.41 2.20 L 11.02 18.13 L 16.48 14.45 L 3.19 14.60"
      }
    ],
    [
      "circle",
      {
        "cx": "7.27",
        "cy": "3.41",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "17.13",
        "cy": "6.14",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "17.41",
        "cy": "2.20",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "11.02",
        "cy": "18.13",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "16.48",
        "cy": "14.45",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "3.19",
        "cy": "14.60",
        "r": "1.21"
      }
    ]
  ]
};

export const TrinitroPlea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.27 3.41 L 17.13 6.14 L 17.41 2.20 L 11.02 18.13 L 16.48 14.45 L 3.19 14.60" />
      <circle cx="7.27" cy="3.41" r="0.98" />
      <circle cx="17.13" cy="6.14" r="0.78" />
      <circle cx="17.41" cy="2.20" r="1.26" />
      <circle cx="11.02" cy="18.13" r="0.58" />
      <circle cx="16.48" cy="14.45" r="1.05" />
      <circle cx="3.19" cy="14.60" r="1.21" />
      {children}
    </svg>
  );
});

export default TrinitroPlea;
