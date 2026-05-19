import React from 'react';

export const iconData = {
  "id": "PicoQuery",
  "name": "PicoQuery",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.21 5.31 L 8.26 19.76 L 8.42 12.58 L 20.66 17.21 L 18.92 11.96 L 19.44 3.91 L 6.06 15.34"
      }
    ],
    [
      "circle",
      {
        "cx": "10.21",
        "cy": "5.31",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "8.26",
        "cy": "19.76",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "8.42",
        "cy": "12.58",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "20.66",
        "cy": "17.21",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "18.92",
        "cy": "11.96",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "19.44",
        "cy": "3.91",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "6.06",
        "cy": "15.34",
        "r": "0.98"
      }
    ]
  ]
};

export const PicoQuery = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.21 5.31 L 8.26 19.76 L 8.42 12.58 L 20.66 17.21 L 18.92 11.96 L 19.44 3.91 L 6.06 15.34" />
      <circle cx="10.21" cy="5.31" r="1.12" />
      <circle cx="8.26" cy="19.76" r="1.21" />
      <circle cx="8.42" cy="12.58" r="1.40" />
      <circle cx="20.66" cy="17.21" r="1.42" />
      <circle cx="18.92" cy="11.96" r="0.60" />
      <circle cx="19.44" cy="3.91" r="1.03" />
      <circle cx="6.06" cy="15.34" r="0.98" />
      {children}
    </svg>
  );
});

export default PicoQuery;
