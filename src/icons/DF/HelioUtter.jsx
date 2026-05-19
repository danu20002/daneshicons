import React from 'react';

export const iconData = {
  "id": "HelioUtter",
  "name": "HelioUtter",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 15.99 L 21.76 7.78 L 17.61 6.55 L 2.71 4.28 L 14.80 4.05 L 19.91 4.27 L 15.28 11.46"
      }
    ],
    [
      "circle",
      {
        "cx": "9.91",
        "cy": "15.99",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "21.76",
        "cy": "7.78",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "17.61",
        "cy": "6.55",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "2.71",
        "cy": "4.28",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "14.80",
        "cy": "4.05",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "19.91",
        "cy": "4.27",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "15.28",
        "cy": "11.46",
        "r": "0.99"
      }
    ]
  ]
};

export const HelioUtter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 15.99 L 21.76 7.78 L 17.61 6.55 L 2.71 4.28 L 14.80 4.05 L 19.91 4.27 L 15.28 11.46" />
      <circle cx="9.91" cy="15.99" r="0.84" />
      <circle cx="21.76" cy="7.78" r="0.81" />
      <circle cx="17.61" cy="6.55" r="1.37" />
      <circle cx="2.71" cy="4.28" r="0.86" />
      <circle cx="14.80" cy="4.05" r="1.03" />
      <circle cx="19.91" cy="4.27" r="0.59" />
      <circle cx="15.28" cy="11.46" r="0.99" />
      {children}
    </svg>
  );
});

export default HelioUtter;
