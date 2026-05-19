import React from 'react';

export const iconData = {
  "id": "TrypanoPeanut",
  "name": "TrypanoPeanut",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.73 8.83 L 9.79 12.13"
      }
    ],
    [
      "circle",
      {
        "cx": "11.73",
        "cy": "8.83",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.12",
        "cy": "9.51",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.79",
        "cy": "12.13",
        "r": "1.5"
      }
    ]
  ]
};

export const TrypanoPeanut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.73 8.83 L 9.79 12.13" />
      <circle cx="11.73" cy="8.83" r="1.5" />
      <circle cx="5.12" cy="9.51" r="1.5" />
      <circle cx="9.79" cy="12.13" r="1.5" />
      {children}
    </svg>
  );
});

export default TrypanoPeanut;
