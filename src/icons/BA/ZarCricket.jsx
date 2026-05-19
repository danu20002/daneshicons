import React from 'react';

export const iconData = {
  "id": "ZarCricket",
  "name": "ZarCricket",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.42 17.70 L 13.30 2.68 L 10.02 14.16 L 10.97 2.77 L 5.35 21.05 L 5.60 7.52 L 11.97 17.28"
      }
    ],
    [
      "circle",
      {
        "cx": "21.42",
        "cy": "17.70",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "13.30",
        "cy": "2.68",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "10.02",
        "cy": "14.16",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "10.97",
        "cy": "2.77",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "5.35",
        "cy": "21.05",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "7.52",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "11.97",
        "cy": "17.28",
        "r": "1.32"
      }
    ]
  ]
};

export const ZarCricket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.42 17.70 L 13.30 2.68 L 10.02 14.16 L 10.97 2.77 L 5.35 21.05 L 5.60 7.52 L 11.97 17.28" />
      <circle cx="21.42" cy="17.70" r="1.45" />
      <circle cx="13.30" cy="2.68" r="1.25" />
      <circle cx="10.02" cy="14.16" r="1.36" />
      <circle cx="10.97" cy="2.77" r="0.87" />
      <circle cx="5.35" cy="21.05" r="0.63" />
      <circle cx="5.60" cy="7.52" r="0.61" />
      <circle cx="11.97" cy="17.28" r="1.32" />
      {children}
    </svg>
  );
});

export default ZarCricket;
