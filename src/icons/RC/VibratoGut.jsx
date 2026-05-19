import React from 'react';

export const iconData = {
  "id": "VibratoGut",
  "name": "VibratoGut",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.70 19.81 L 13.93 16.95 L 14.36 9.09 L 13.35 13.98"
      }
    ],
    [
      "circle",
      {
        "cx": "10.70",
        "cy": "19.81",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "13.93",
        "cy": "16.95",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "14.36",
        "cy": "9.09",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "13.35",
        "cy": "13.98",
        "r": "1.35"
      }
    ]
  ]
};

export const VibratoGut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.70 19.81 L 13.93 16.95 L 14.36 9.09 L 13.35 13.98" />
      <circle cx="10.70" cy="19.81" r="1.38" />
      <circle cx="13.93" cy="16.95" r="0.86" />
      <circle cx="14.36" cy="9.09" r="1.46" />
      <circle cx="13.35" cy="13.98" r="1.35" />
      {children}
    </svg>
  );
});

export default VibratoGut;
