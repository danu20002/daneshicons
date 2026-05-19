import React from 'react';

export const iconData = {
  "id": "SurdoSuffer",
  "name": "SurdoSuffer",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.82 6.34 L 20.73 11.92 L 3.69 12.09 L 21.11 18.74 L 10.61 17.02 L 18.67 5.38"
      }
    ],
    [
      "circle",
      {
        "cx": "5.82",
        "cy": "6.34",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "20.73",
        "cy": "11.92",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "3.69",
        "cy": "12.09",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "21.11",
        "cy": "18.74",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "10.61",
        "cy": "17.02",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "18.67",
        "cy": "5.38",
        "r": "1.18"
      }
    ]
  ]
};

export const SurdoSuffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.82 6.34 L 20.73 11.92 L 3.69 12.09 L 21.11 18.74 L 10.61 17.02 L 18.67 5.38" />
      <circle cx="5.82" cy="6.34" r="0.80" />
      <circle cx="20.73" cy="11.92" r="1.12" />
      <circle cx="3.69" cy="12.09" r="0.80" />
      <circle cx="21.11" cy="18.74" r="0.65" />
      <circle cx="10.61" cy="17.02" r="1.32" />
      <circle cx="18.67" cy="5.38" r="1.18" />
      {children}
    </svg>
  );
});

export default SurdoSuffer;
