import React from 'react';

export const iconData = {
  "id": "UltraJeep",
  "name": "UltraJeep",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.33 4.56 L 9.42 8.12 L 19.17 17.97 L 2.82 12.13 L 16.34 15.22 L 9.18 5.21"
      }
    ],
    [
      "circle",
      {
        "cx": "17.33",
        "cy": "4.56",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "9.42",
        "cy": "8.12",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "19.17",
        "cy": "17.97",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "2.82",
        "cy": "12.13",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "16.34",
        "cy": "15.22",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "9.18",
        "cy": "5.21",
        "r": "1.21"
      }
    ]
  ]
};

export const UltraJeep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.33 4.56 L 9.42 8.12 L 19.17 17.97 L 2.82 12.13 L 16.34 15.22 L 9.18 5.21" />
      <circle cx="17.33" cy="4.56" r="1.22" />
      <circle cx="9.42" cy="8.12" r="0.73" />
      <circle cx="19.17" cy="17.97" r="1.20" />
      <circle cx="2.82" cy="12.13" r="0.54" />
      <circle cx="16.34" cy="15.22" r="0.59" />
      <circle cx="9.18" cy="5.21" r="1.21" />
      {children}
    </svg>
  );
});

export default UltraJeep;
