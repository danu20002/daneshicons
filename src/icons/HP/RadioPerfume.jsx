import React from 'react';

export const iconData = {
  "id": "RadioPerfume",
  "name": "RadioPerfume",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.21 11.16 L 3.62 5.13 L 12.42 13.80 L 18.21 7.10 L 21.61 7.96"
      }
    ],
    [
      "circle",
      {
        "cx": "6.21",
        "cy": "11.16",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "3.62",
        "cy": "5.13",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "12.42",
        "cy": "13.80",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "18.21",
        "cy": "7.10",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "21.61",
        "cy": "7.96",
        "r": "0.58"
      }
    ]
  ]
};

export const RadioPerfume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.21 11.16 L 3.62 5.13 L 12.42 13.80 L 18.21 7.10 L 21.61 7.96" />
      <circle cx="6.21" cy="11.16" r="1.08" />
      <circle cx="3.62" cy="5.13" r="0.89" />
      <circle cx="12.42" cy="13.80" r="1.38" />
      <circle cx="18.21" cy="7.10" r="0.69" />
      <circle cx="21.61" cy="7.96" r="0.58" />
      {children}
    </svg>
  );
});

export default RadioPerfume;
