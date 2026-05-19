import React from 'react';

export const iconData = {
  "id": "EchoPlanet",
  "name": "EchoPlanet",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.99 9.97 L 21.48 6.54 L 20.44 13.19 L 6.87 20.11 L 6.89 20.68 L 4.93 8.91 L 18.91 11.08"
      }
    ],
    [
      "circle",
      {
        "cx": "11.99",
        "cy": "9.97",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "21.48",
        "cy": "6.54",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "20.44",
        "cy": "13.19",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "6.87",
        "cy": "20.11",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "6.89",
        "cy": "20.68",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "4.93",
        "cy": "8.91",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "18.91",
        "cy": "11.08",
        "r": "1.35"
      }
    ]
  ]
};

export const EchoPlanet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.99 9.97 L 21.48 6.54 L 20.44 13.19 L 6.87 20.11 L 6.89 20.68 L 4.93 8.91 L 18.91 11.08" />
      <circle cx="11.99" cy="9.97" r="0.79" />
      <circle cx="21.48" cy="6.54" r="0.63" />
      <circle cx="20.44" cy="13.19" r="0.70" />
      <circle cx="6.87" cy="20.11" r="0.57" />
      <circle cx="6.89" cy="20.68" r="0.86" />
      <circle cx="4.93" cy="8.91" r="0.57" />
      <circle cx="18.91" cy="11.08" r="1.35" />
      {children}
    </svg>
  );
});

export default EchoPlanet;
