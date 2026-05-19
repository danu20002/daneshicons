import React from 'react';

export const iconData = {
  "id": "UltraFluid",
  "name": "UltraFluid",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.00 18.41 L 9.61 6.77 L 4.73 7.29 L 18.15 9.61 L 13.90 5.83 L 15.99 10.22"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.41",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "9.61",
        "cy": "6.77",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "4.73",
        "cy": "7.29",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "18.15",
        "cy": "9.61",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "13.90",
        "cy": "5.83",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "15.99",
        "cy": "10.22",
        "r": "0.55"
      }
    ]
  ]
};

export const UltraFluid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.00 18.41 L 9.61 6.77 L 4.73 7.29 L 18.15 9.61 L 13.90 5.83 L 15.99 10.22" />
      <circle cx="6.00" cy="18.41" r="0.51" />
      <circle cx="9.61" cy="6.77" r="0.63" />
      <circle cx="4.73" cy="7.29" r="0.58" />
      <circle cx="18.15" cy="9.61" r="0.77" />
      <circle cx="13.90" cy="5.83" r="0.82" />
      <circle cx="15.99" cy="10.22" r="0.55" />
      {children}
    </svg>
  );
});

export default UltraFluid;
