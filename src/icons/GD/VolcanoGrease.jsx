import React from 'react';

export const iconData = {
  "id": "VolcanoGrease",
  "name": "VolcanoGrease",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.27 21.53 L 9.72 10.19 L 2.32 21.30 L 13.85 8.93 L 11.28 11.95 L 6.32 8.37 L 18.26 13.86"
      }
    ],
    [
      "circle",
      {
        "cx": "2.27",
        "cy": "21.53",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "9.72",
        "cy": "10.19",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "2.32",
        "cy": "21.30",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "13.85",
        "cy": "8.93",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "11.28",
        "cy": "11.95",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "6.32",
        "cy": "8.37",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "18.26",
        "cy": "13.86",
        "r": "1.22"
      }
    ]
  ]
};

export const VolcanoGrease = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.27 21.53 L 9.72 10.19 L 2.32 21.30 L 13.85 8.93 L 11.28 11.95 L 6.32 8.37 L 18.26 13.86" />
      <circle cx="2.27" cy="21.53" r="1.15" />
      <circle cx="9.72" cy="10.19" r="1.44" />
      <circle cx="2.32" cy="21.30" r="1.29" />
      <circle cx="13.85" cy="8.93" r="0.78" />
      <circle cx="11.28" cy="11.95" r="0.56" />
      <circle cx="6.32" cy="8.37" r="1.09" />
      <circle cx="18.26" cy="13.86" r="1.22" />
      {children}
    </svg>
  );
});

export default VolcanoGrease;
