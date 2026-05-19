import React from 'react';

export const iconData = {
  "id": "LuteoDecorate",
  "name": "LuteoDecorate",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.55 21.33 L 17.29 5.14 L 20.14 17.89 L 2.24 16.99 L 12.60 3.16 L 8.94 13.55 L 4.33 2.09"
      }
    ],
    [
      "circle",
      {
        "cx": "6.55",
        "cy": "21.33",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "17.29",
        "cy": "5.14",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "20.14",
        "cy": "17.89",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "2.24",
        "cy": "16.99",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "12.60",
        "cy": "3.16",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "8.94",
        "cy": "13.55",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "4.33",
        "cy": "2.09",
        "r": "0.83"
      }
    ]
  ]
};

export const LuteoDecorate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.55 21.33 L 17.29 5.14 L 20.14 17.89 L 2.24 16.99 L 12.60 3.16 L 8.94 13.55 L 4.33 2.09" />
      <circle cx="6.55" cy="21.33" r="0.73" />
      <circle cx="17.29" cy="5.14" r="1.25" />
      <circle cx="20.14" cy="17.89" r="1.47" />
      <circle cx="2.24" cy="16.99" r="1.09" />
      <circle cx="12.60" cy="3.16" r="0.83" />
      <circle cx="8.94" cy="13.55" r="0.90" />
      <circle cx="4.33" cy="2.09" r="0.83" />
      {children}
    </svg>
  );
});

export default LuteoDecorate;
