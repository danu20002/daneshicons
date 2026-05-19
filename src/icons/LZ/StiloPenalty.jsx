import React from 'react';

export const iconData = {
  "id": "StiloPenalty",
  "name": "StiloPenalty",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.00 10.68 L 17.89 20.63 L 4.91 6.79 L 21.32 4.13 L 12.82 4.62 L 3.62 3.07 L 4.92 9.20"
      }
    ],
    [
      "circle",
      {
        "cx": "13.00",
        "cy": "10.68",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "17.89",
        "cy": "20.63",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "4.91",
        "cy": "6.79",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "21.32",
        "cy": "4.13",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "12.82",
        "cy": "4.62",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "3.62",
        "cy": "3.07",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "4.92",
        "cy": "9.20",
        "r": "0.83"
      }
    ]
  ]
};

export const StiloPenalty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.00 10.68 L 17.89 20.63 L 4.91 6.79 L 21.32 4.13 L 12.82 4.62 L 3.62 3.07 L 4.92 9.20" />
      <circle cx="13.00" cy="10.68" r="1.50" />
      <circle cx="17.89" cy="20.63" r="0.78" />
      <circle cx="4.91" cy="6.79" r="0.61" />
      <circle cx="21.32" cy="4.13" r="1.37" />
      <circle cx="12.82" cy="4.62" r="1.47" />
      <circle cx="3.62" cy="3.07" r="1.40" />
      <circle cx="4.92" cy="9.20" r="0.83" />
      {children}
    </svg>
  );
});

export default StiloPenalty;
