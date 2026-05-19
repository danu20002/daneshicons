import React from 'react';

export const iconData = {
  "id": "IsoProtein",
  "name": "IsoProtein",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.34 20.39 L 5.04 17.06 L 19.58 18.20 L 18.21 21.76 L 4.12 18.43 L 15.79 2.57 L 9.04 13.20"
      }
    ],
    [
      "circle",
      {
        "cx": "18.34",
        "cy": "20.39",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "5.04",
        "cy": "17.06",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "19.58",
        "cy": "18.20",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "18.21",
        "cy": "21.76",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "4.12",
        "cy": "18.43",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "15.79",
        "cy": "2.57",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "9.04",
        "cy": "13.20",
        "r": "1.46"
      }
    ]
  ]
};

export const IsoProtein = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.34 20.39 L 5.04 17.06 L 19.58 18.20 L 18.21 21.76 L 4.12 18.43 L 15.79 2.57 L 9.04 13.20" />
      <circle cx="18.34" cy="20.39" r="0.65" />
      <circle cx="5.04" cy="17.06" r="0.87" />
      <circle cx="19.58" cy="18.20" r="1.16" />
      <circle cx="18.21" cy="21.76" r="1.03" />
      <circle cx="4.12" cy="18.43" r="0.84" />
      <circle cx="15.79" cy="2.57" r="1.16" />
      <circle cx="9.04" cy="13.20" r="1.46" />
      {children}
    </svg>
  );
});

export default IsoProtein;
