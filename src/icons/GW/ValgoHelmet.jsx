import React from 'react';

export const iconData = {
  "id": "ValgoHelmet",
  "name": "ValgoHelmet",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.27 13.39 L 6.28 15.64 L 2.19 2.99 L 4.36 8.53 L 9.05 21.98"
      }
    ],
    [
      "circle",
      {
        "cx": "2.27",
        "cy": "13.39",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "6.28",
        "cy": "15.64",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "2.19",
        "cy": "2.99",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "4.36",
        "cy": "8.53",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "9.05",
        "cy": "21.98",
        "r": "1.36"
      }
    ]
  ]
};

export const ValgoHelmet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.27 13.39 L 6.28 15.64 L 2.19 2.99 L 4.36 8.53 L 9.05 21.98" />
      <circle cx="2.27" cy="13.39" r="0.69" />
      <circle cx="6.28" cy="15.64" r="1.49" />
      <circle cx="2.19" cy="2.99" r="0.61" />
      <circle cx="4.36" cy="8.53" r="1.41" />
      <circle cx="9.05" cy="21.98" r="1.36" />
      {children}
    </svg>
  );
});

export default ValgoHelmet;
