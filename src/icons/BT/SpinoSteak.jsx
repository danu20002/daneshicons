import React from 'react';

export const iconData = {
  "id": "SpinoSteak",
  "name": "SpinoSteak",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.03 3.71 L 6.26 13.45 L 4.73 21.76 L 14.91 20.21"
      }
    ],
    [
      "circle",
      {
        "cx": "11.03",
        "cy": "3.71",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "6.26",
        "cy": "13.45",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "4.73",
        "cy": "21.76",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "14.91",
        "cy": "20.21",
        "r": "1.30"
      }
    ]
  ]
};

export const SpinoSteak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.03 3.71 L 6.26 13.45 L 4.73 21.76 L 14.91 20.21" />
      <circle cx="11.03" cy="3.71" r="0.96" />
      <circle cx="6.26" cy="13.45" r="1.27" />
      <circle cx="4.73" cy="21.76" r="1.13" />
      <circle cx="14.91" cy="20.21" r="1.30" />
      {children}
    </svg>
  );
});

export default SpinoSteak;
