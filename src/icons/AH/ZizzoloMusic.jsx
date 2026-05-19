import React from 'react';

export const iconData = {
  "id": "ZizzoloMusic",
  "name": "ZizzoloMusic",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.17 13.41 L 20.25 4.16 L 8.36 4.87 L 12.51 17.57 L 7.14 18.59 L 21.39 15.69 L 9.51 9.62"
      }
    ],
    [
      "circle",
      {
        "cx": "2.17",
        "cy": "13.41",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "20.25",
        "cy": "4.16",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "8.36",
        "cy": "4.87",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "12.51",
        "cy": "17.57",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "7.14",
        "cy": "18.59",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "21.39",
        "cy": "15.69",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "9.51",
        "cy": "9.62",
        "r": "1.15"
      }
    ]
  ]
};

export const ZizzoloMusic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.17 13.41 L 20.25 4.16 L 8.36 4.87 L 12.51 17.57 L 7.14 18.59 L 21.39 15.69 L 9.51 9.62" />
      <circle cx="2.17" cy="13.41" r="0.99" />
      <circle cx="20.25" cy="4.16" r="1.36" />
      <circle cx="8.36" cy="4.87" r="1.13" />
      <circle cx="12.51" cy="17.57" r="0.89" />
      <circle cx="7.14" cy="18.59" r="1.27" />
      <circle cx="21.39" cy="15.69" r="1.18" />
      <circle cx="9.51" cy="9.62" r="1.15" />
      {children}
    </svg>
  );
});

export default ZizzoloMusic;
