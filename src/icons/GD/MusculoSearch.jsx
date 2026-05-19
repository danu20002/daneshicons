import React from 'react';

export const iconData = {
  "id": "MusculoSearch",
  "name": "MusculoSearch",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.85 18.82 L 18.44 7.46 L 10.61 4.75 L 3.37 7.35 L 17.99 8.43"
      }
    ],
    [
      "circle",
      {
        "cx": "13.85",
        "cy": "18.82",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "18.44",
        "cy": "7.46",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "10.61",
        "cy": "4.75",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "3.37",
        "cy": "7.35",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "17.99",
        "cy": "8.43",
        "r": "1.31"
      }
    ]
  ]
};

export const MusculoSearch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.85 18.82 L 18.44 7.46 L 10.61 4.75 L 3.37 7.35 L 17.99 8.43" />
      <circle cx="13.85" cy="18.82" r="1.13" />
      <circle cx="18.44" cy="7.46" r="0.92" />
      <circle cx="10.61" cy="4.75" r="1.37" />
      <circle cx="3.37" cy="7.35" r="0.76" />
      <circle cx="17.99" cy="8.43" r="1.31" />
      {children}
    </svg>
  );
});

export default MusculoSearch;
