import React from 'react';

export const iconData = {
  "id": "MegaSlide",
  "name": "MegaSlide",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.95 21.99 L 18.47 13.14 L 12.86 7.28 L 5.52 20.29 L 4.53 17.56 L 17.65 7.90"
      }
    ],
    [
      "circle",
      {
        "cx": "21.95",
        "cy": "21.99",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "18.47",
        "cy": "13.14",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "12.86",
        "cy": "7.28",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "5.52",
        "cy": "20.29",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "4.53",
        "cy": "17.56",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "17.65",
        "cy": "7.90",
        "r": "0.69"
      }
    ]
  ]
};

export const MegaSlide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.95 21.99 L 18.47 13.14 L 12.86 7.28 L 5.52 20.29 L 4.53 17.56 L 17.65 7.90" />
      <circle cx="21.95" cy="21.99" r="0.72" />
      <circle cx="18.47" cy="13.14" r="1.46" />
      <circle cx="12.86" cy="7.28" r="0.56" />
      <circle cx="5.52" cy="20.29" r="1.11" />
      <circle cx="4.53" cy="17.56" r="1.00" />
      <circle cx="17.65" cy="7.90" r="0.69" />
      {children}
    </svg>
  );
});

export default MegaSlide;
