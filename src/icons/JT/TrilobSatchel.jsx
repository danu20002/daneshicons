import React from 'react';

export const iconData = {
  "id": "TrilobSatchel",
  "name": "TrilobSatchel",
  "category": "JT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.16 18.05 L 19.92 14.36"
      }
    ],
    [
      "path",
      {
        "d": "M 13.16 18.05 L 4.21 9.27"
      }
    ],
    [
      "path",
      {
        "d": "M 19.92 14.36 L 4.10 14.97"
      }
    ],
    [
      "circle",
      {
        "cx": "13.16",
        "cy": "18.05",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.92",
        "cy": "14.36",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.21",
        "cy": "9.27",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.10",
        "cy": "14.97",
        "r": "1.5"
      }
    ]
  ]
};

export const TrilobSatchel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.16 18.05 L 19.92 14.36" />
      <path d="M 13.16 18.05 L 4.21 9.27" />
      <path d="M 19.92 14.36 L 4.10 14.97" />
      <circle cx="13.16" cy="18.05" r="1.5" />
      <circle cx="19.92" cy="14.36" r="1.5" />
      <circle cx="4.21" cy="9.27" r="1.5" />
      <circle cx="4.10" cy="14.97" r="1.5" />
      {children}
    </svg>
  );
});

export default TrilobSatchel;
