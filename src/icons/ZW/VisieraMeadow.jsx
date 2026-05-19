import React from 'react';

export const iconData = {
  "id": "VisieraMeadow",
  "name": "VisieraMeadow",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.86 3.22 L 11.73 6.93 L 2.96 19.38 L 7.24 9.47 L 8.19 17.49 L 3.35 18.43 L 2.74 9.64"
      }
    ],
    [
      "circle",
      {
        "cx": "8.86",
        "cy": "3.22",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "11.73",
        "cy": "6.93",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "2.96",
        "cy": "19.38",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "7.24",
        "cy": "9.47",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "8.19",
        "cy": "17.49",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "3.35",
        "cy": "18.43",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "2.74",
        "cy": "9.64",
        "r": "0.72"
      }
    ]
  ]
};

export const VisieraMeadow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.86 3.22 L 11.73 6.93 L 2.96 19.38 L 7.24 9.47 L 8.19 17.49 L 3.35 18.43 L 2.74 9.64" />
      <circle cx="8.86" cy="3.22" r="0.54" />
      <circle cx="11.73" cy="6.93" r="1.39" />
      <circle cx="2.96" cy="19.38" r="0.62" />
      <circle cx="7.24" cy="9.47" r="1.02" />
      <circle cx="8.19" cy="17.49" r="0.96" />
      <circle cx="3.35" cy="18.43" r="0.60" />
      <circle cx="2.74" cy="9.64" r="0.72" />
      {children}
    </svg>
  );
});

export default VisieraMeadow;
