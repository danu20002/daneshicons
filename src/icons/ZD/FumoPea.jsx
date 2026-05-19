import React from 'react';

export const iconData = {
  "id": "FumoPea",
  "name": "FumoPea",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.38 4.37 L 12.69 10.71 L 6.93 3.47 L 6.24 9.33"
      }
    ],
    [
      "circle",
      {
        "cx": "7.38",
        "cy": "4.37",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "12.69",
        "cy": "10.71",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "6.93",
        "cy": "3.47",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "6.24",
        "cy": "9.33",
        "r": "1.08"
      }
    ]
  ]
};

export const FumoPea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.38 4.37 L 12.69 10.71 L 6.93 3.47 L 6.24 9.33" />
      <circle cx="7.38" cy="4.37" r="1.49" />
      <circle cx="12.69" cy="10.71" r="1.18" />
      <circle cx="6.93" cy="3.47" r="1.42" />
      <circle cx="6.24" cy="9.33" r="1.08" />
      {children}
    </svg>
  );
});

export default FumoPea;
