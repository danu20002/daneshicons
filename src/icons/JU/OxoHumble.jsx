import React from 'react';

export const iconData = {
  "id": "OxoHumble",
  "name": "OxoHumble",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.46 4.22 L 4.06 19.03 L 3.11 5.99 L 6.44 8.05 L 21.80 20.04 L 16.19 3.33"
      }
    ],
    [
      "circle",
      {
        "cx": "8.46",
        "cy": "4.22",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "4.06",
        "cy": "19.03",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "3.11",
        "cy": "5.99",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "6.44",
        "cy": "8.05",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "21.80",
        "cy": "20.04",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "16.19",
        "cy": "3.33",
        "r": "1.35"
      }
    ]
  ]
};

export const OxoHumble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.46 4.22 L 4.06 19.03 L 3.11 5.99 L 6.44 8.05 L 21.80 20.04 L 16.19 3.33" />
      <circle cx="8.46" cy="4.22" r="0.70" />
      <circle cx="4.06" cy="19.03" r="0.62" />
      <circle cx="3.11" cy="5.99" r="0.57" />
      <circle cx="6.44" cy="8.05" r="0.66" />
      <circle cx="21.80" cy="20.04" r="0.66" />
      <circle cx="16.19" cy="3.33" r="1.35" />
      {children}
    </svg>
  );
});

export default OxoHumble;
