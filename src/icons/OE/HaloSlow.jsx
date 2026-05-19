import React from 'react';

export const iconData = {
  "id": "HaloSlow",
  "name": "HaloSlow",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.80 4.27 L 10.06 12.86 L 20.83 14.79 L 6.75 4.81 L 3.18 13.27 L 9.41 16.78"
      }
    ],
    [
      "circle",
      {
        "cx": "16.80",
        "cy": "4.27",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "10.06",
        "cy": "12.86",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "20.83",
        "cy": "14.79",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "6.75",
        "cy": "4.81",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "3.18",
        "cy": "13.27",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "9.41",
        "cy": "16.78",
        "r": "1.15"
      }
    ]
  ]
};

export const HaloSlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.80 4.27 L 10.06 12.86 L 20.83 14.79 L 6.75 4.81 L 3.18 13.27 L 9.41 16.78" />
      <circle cx="16.80" cy="4.27" r="1.45" />
      <circle cx="10.06" cy="12.86" r="0.76" />
      <circle cx="20.83" cy="14.79" r="1.44" />
      <circle cx="6.75" cy="4.81" r="0.81" />
      <circle cx="3.18" cy="13.27" r="1.22" />
      <circle cx="9.41" cy="16.78" r="1.15" />
      {children}
    </svg>
  );
});

export default HaloSlow;
