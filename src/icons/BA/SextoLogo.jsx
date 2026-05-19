import React from 'react';

export const iconData = {
  "id": "SextoLogo",
  "name": "SextoLogo",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.74 20.28 L 4.90 9.44 L 9.27 13.38 L 2.20 3.18 L 9.79 17.53 L 21.73 2.12 L 21.30 11.64"
      }
    ],
    [
      "circle",
      {
        "cx": "20.74",
        "cy": "20.28",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "4.90",
        "cy": "9.44",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "9.27",
        "cy": "13.38",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "2.20",
        "cy": "3.18",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "9.79",
        "cy": "17.53",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "21.73",
        "cy": "2.12",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "21.30",
        "cy": "11.64",
        "r": "0.86"
      }
    ]
  ]
};

export const SextoLogo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.74 20.28 L 4.90 9.44 L 9.27 13.38 L 2.20 3.18 L 9.79 17.53 L 21.73 2.12 L 21.30 11.64" />
      <circle cx="20.74" cy="20.28" r="0.70" />
      <circle cx="4.90" cy="9.44" r="0.83" />
      <circle cx="9.27" cy="13.38" r="0.79" />
      <circle cx="2.20" cy="3.18" r="0.86" />
      <circle cx="9.79" cy="17.53" r="1.40" />
      <circle cx="21.73" cy="2.12" r="1.20" />
      <circle cx="21.30" cy="11.64" r="0.86" />
      {children}
    </svg>
  );
});

export default SextoLogo;
