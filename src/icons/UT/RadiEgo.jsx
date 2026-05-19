import React from 'react';

export const iconData = {
  "id": "RadiEgo",
  "name": "RadiEgo",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.60 3.09 L 12.58 14.39 L 12.07 21.07 L 11.13 4.89 L 3.03 7.49 L 4.43 16.61"
      }
    ],
    [
      "circle",
      {
        "cx": "2.60",
        "cy": "3.09",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "12.58",
        "cy": "14.39",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "12.07",
        "cy": "21.07",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "11.13",
        "cy": "4.89",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "3.03",
        "cy": "7.49",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "4.43",
        "cy": "16.61",
        "r": "1.37"
      }
    ]
  ]
};

export const RadiEgo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.60 3.09 L 12.58 14.39 L 12.07 21.07 L 11.13 4.89 L 3.03 7.49 L 4.43 16.61" />
      <circle cx="2.60" cy="3.09" r="0.53" />
      <circle cx="12.58" cy="14.39" r="0.53" />
      <circle cx="12.07" cy="21.07" r="0.72" />
      <circle cx="11.13" cy="4.89" r="1.15" />
      <circle cx="3.03" cy="7.49" r="1.34" />
      <circle cx="4.43" cy="16.61" r="1.37" />
      {children}
    </svg>
  );
});

export default RadiEgo;
