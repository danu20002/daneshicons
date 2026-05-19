import React from 'react';

export const iconData = {
  "id": "YogurtWeek",
  "name": "YogurtWeek",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.42 13.41 L 8.43 15.70 L 7.23 6.31 L 10.33 2.22 L 16.61 10.79 L 16.97 4.59 L 20.86 5.21"
      }
    ],
    [
      "circle",
      {
        "cx": "10.42",
        "cy": "13.41",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "8.43",
        "cy": "15.70",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "7.23",
        "cy": "6.31",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "10.33",
        "cy": "2.22",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "16.61",
        "cy": "10.79",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "16.97",
        "cy": "4.59",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "20.86",
        "cy": "5.21",
        "r": "0.78"
      }
    ]
  ]
};

export const YogurtWeek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.42 13.41 L 8.43 15.70 L 7.23 6.31 L 10.33 2.22 L 16.61 10.79 L 16.97 4.59 L 20.86 5.21" />
      <circle cx="10.42" cy="13.41" r="1.45" />
      <circle cx="8.43" cy="15.70" r="0.64" />
      <circle cx="7.23" cy="6.31" r="0.76" />
      <circle cx="10.33" cy="2.22" r="1.31" />
      <circle cx="16.61" cy="10.79" r="0.52" />
      <circle cx="16.97" cy="4.59" r="0.79" />
      <circle cx="20.86" cy="5.21" r="0.78" />
      {children}
    </svg>
  );
});

export default YogurtWeek;
