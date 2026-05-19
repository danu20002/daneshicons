import React from 'react';

export const iconData = {
  "id": "StenoSlate",
  "name": "StenoSlate",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 5.16 L 17.70 19.14 L 17.21 4.91 L 21.97 11.68"
      }
    ],
    [
      "circle",
      {
        "cx": "3.85",
        "cy": "5.16",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "17.70",
        "cy": "19.14",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "17.21",
        "cy": "4.91",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "21.97",
        "cy": "11.68",
        "r": "1.34"
      }
    ]
  ]
};

export const StenoSlate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 5.16 L 17.70 19.14 L 17.21 4.91 L 21.97 11.68" />
      <circle cx="3.85" cy="5.16" r="0.67" />
      <circle cx="17.70" cy="19.14" r="0.70" />
      <circle cx="17.21" cy="4.91" r="1.05" />
      <circle cx="21.97" cy="11.68" r="1.34" />
      {children}
    </svg>
  );
});

export default StenoSlate;
