import React from 'react';

export const iconData = {
  "id": "SpheroQuintet",
  "name": "SpheroQuintet",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.41 8.69 L 19.82 12.40 L 12.35 5.49 L 8.17 11.77 L 20.51 12.16 L 21.62 18.20 L 9.28 5.53"
      }
    ],
    [
      "circle",
      {
        "cx": "9.41",
        "cy": "8.69",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "19.82",
        "cy": "12.40",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "12.35",
        "cy": "5.49",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "8.17",
        "cy": "11.77",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "20.51",
        "cy": "12.16",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "21.62",
        "cy": "18.20",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "9.28",
        "cy": "5.53",
        "r": "0.72"
      }
    ]
  ]
};

export const SpheroQuintet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.41 8.69 L 19.82 12.40 L 12.35 5.49 L 8.17 11.77 L 20.51 12.16 L 21.62 18.20 L 9.28 5.53" />
      <circle cx="9.41" cy="8.69" r="1.22" />
      <circle cx="19.82" cy="12.40" r="1.27" />
      <circle cx="12.35" cy="5.49" r="1.32" />
      <circle cx="8.17" cy="11.77" r="0.68" />
      <circle cx="20.51" cy="12.16" r="0.51" />
      <circle cx="21.62" cy="18.20" r="1.00" />
      <circle cx="9.28" cy="5.53" r="0.72" />
      {children}
    </svg>
  );
});

export default SpheroQuintet;
