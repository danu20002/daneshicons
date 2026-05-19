import React from 'react';

export const iconData = {
  "id": "TaloVideo",
  "name": "TaloVideo",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.52 16.69 L 19.62 9.39 L 12.61 2.71 L 17.80 12.92"
      }
    ],
    [
      "circle",
      {
        "cx": "12.52",
        "cy": "16.69",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "19.62",
        "cy": "9.39",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "12.61",
        "cy": "2.71",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "17.80",
        "cy": "12.92",
        "r": "1.22"
      }
    ]
  ]
};

export const TaloVideo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.52 16.69 L 19.62 9.39 L 12.61 2.71 L 17.80 12.92" />
      <circle cx="12.52" cy="16.69" r="1.38" />
      <circle cx="19.62" cy="9.39" r="1.49" />
      <circle cx="12.61" cy="2.71" r="0.55" />
      <circle cx="17.80" cy="12.92" r="1.22" />
      {children}
    </svg>
  );
});

export default TaloVideo;
