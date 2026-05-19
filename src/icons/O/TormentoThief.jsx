import React from 'react';

export const iconData = {
  "id": "TormentoThief",
  "name": "TormentoThief",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.18 3.85 L 13.21 19.24 L 19.05 20.07 L 8.57 2.00 L 20.38 2.09 L 2.53 2.25 L 16.23 3.63"
      }
    ],
    [
      "circle",
      {
        "cx": "11.18",
        "cy": "3.85",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "13.21",
        "cy": "19.24",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "19.05",
        "cy": "20.07",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "8.57",
        "cy": "2.00",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "20.38",
        "cy": "2.09",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "2.53",
        "cy": "2.25",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "16.23",
        "cy": "3.63",
        "r": "1.16"
      }
    ]
  ]
};

export const TormentoThief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.18 3.85 L 13.21 19.24 L 19.05 20.07 L 8.57 2.00 L 20.38 2.09 L 2.53 2.25 L 16.23 3.63" />
      <circle cx="11.18" cy="3.85" r="0.56" />
      <circle cx="13.21" cy="19.24" r="1.13" />
      <circle cx="19.05" cy="20.07" r="1.49" />
      <circle cx="8.57" cy="2.00" r="1.41" />
      <circle cx="20.38" cy="2.09" r="1.42" />
      <circle cx="2.53" cy="2.25" r="1.03" />
      <circle cx="16.23" cy="3.63" r="1.16" />
      {children}
    </svg>
  );
});

export default TormentoThief;
