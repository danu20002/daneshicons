import React from 'react';

export const iconData = {
  "id": "KaryoRattle",
  "name": "KaryoRattle",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.96 7.48 L 19.56 6.40 L 3.83 4.30 L 21.04 5.87"
      }
    ],
    [
      "circle",
      {
        "cx": "16.96",
        "cy": "7.48",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "19.56",
        "cy": "6.40",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "3.83",
        "cy": "4.30",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "21.04",
        "cy": "5.87",
        "r": "1.29"
      }
    ]
  ]
};

export const KaryoRattle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.96 7.48 L 19.56 6.40 L 3.83 4.30 L 21.04 5.87" />
      <circle cx="16.96" cy="7.48" r="0.61" />
      <circle cx="19.56" cy="6.40" r="1.02" />
      <circle cx="3.83" cy="4.30" r="0.85" />
      <circle cx="21.04" cy="5.87" r="1.29" />
      {children}
    </svg>
  );
});

export default KaryoRattle;
