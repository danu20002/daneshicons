import React from 'react';

export const iconData = {
  "id": "IonoJunction",
  "name": "IonoJunction",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.51 11.79 L 15.59 15.53 L 13.76 11.58 L 2.96 9.51"
      }
    ],
    [
      "circle",
      {
        "cx": "18.51",
        "cy": "11.79",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "15.59",
        "cy": "15.53",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "13.76",
        "cy": "11.58",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "2.96",
        "cy": "9.51",
        "r": "1.20"
      }
    ]
  ]
};

export const IonoJunction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.51 11.79 L 15.59 15.53 L 13.76 11.58 L 2.96 9.51" />
      <circle cx="18.51" cy="11.79" r="0.61" />
      <circle cx="15.59" cy="15.53" r="0.85" />
      <circle cx="13.76" cy="11.58" r="0.81" />
      <circle cx="2.96" cy="9.51" r="1.20" />
      {children}
    </svg>
  );
});

export default IonoJunction;
