import React from 'react';

export const iconData = {
  "id": "YenInherit",
  "name": "YenInherit",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.80 18.40 L 3.02 17.63 L 21.53 9.47 L 8.44 12.24 L 20.36 13.62 L 17.13 13.67"
      }
    ],
    [
      "circle",
      {
        "cx": "10.80",
        "cy": "18.40",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "3.02",
        "cy": "17.63",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "21.53",
        "cy": "9.47",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "8.44",
        "cy": "12.24",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "20.36",
        "cy": "13.62",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "17.13",
        "cy": "13.67",
        "r": "1.11"
      }
    ]
  ]
};

export const YenInherit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.80 18.40 L 3.02 17.63 L 21.53 9.47 L 8.44 12.24 L 20.36 13.62 L 17.13 13.67" />
      <circle cx="10.80" cy="18.40" r="0.67" />
      <circle cx="3.02" cy="17.63" r="1.21" />
      <circle cx="21.53" cy="9.47" r="1.12" />
      <circle cx="8.44" cy="12.24" r="0.75" />
      <circle cx="20.36" cy="13.62" r="1.08" />
      <circle cx="17.13" cy="13.67" r="1.11" />
      {children}
    </svg>
  );
});

export default YenInherit;
