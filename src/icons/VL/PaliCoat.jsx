import React from 'react';

export const iconData = {
  "id": "PaliCoat",
  "name": "PaliCoat",
  "category": "VL",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.51 4.37 L 4.40 12.51"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 4.37 L 8.25 4.33"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 4.37 L 6.51 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 4.37 L 8.27 20.29"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 4.37 L 17.93 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 4.40 12.51 L 6.51 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 4.33 L 6.51 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 6.51 17.67 L 8.27 20.29"
      }
    ],
    [
      "path",
      {
        "d": "M 8.27 20.29 L 17.93 20.54"
      }
    ],
    [
      "circle",
      {
        "cx": "17.51",
        "cy": "4.37",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.40",
        "cy": "12.51",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "8.25",
        "cy": "4.33",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.51",
        "cy": "17.67",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "8.27",
        "cy": "20.29",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.93",
        "cy": "20.54",
        "r": "1.5"
      }
    ]
  ]
};

export const PaliCoat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.51 4.37 L 4.40 12.51" />
      <path d="M 17.51 4.37 L 8.25 4.33" />
      <path d="M 17.51 4.37 L 6.51 17.67" />
      <path d="M 17.51 4.37 L 8.27 20.29" />
      <path d="M 17.51 4.37 L 17.93 20.54" />
      <path d="M 4.40 12.51 L 6.51 17.67" />
      <path d="M 8.25 4.33 L 6.51 17.67" />
      <path d="M 6.51 17.67 L 8.27 20.29" />
      <path d="M 8.27 20.29 L 17.93 20.54" />
      <circle cx="17.51" cy="4.37" r="1.5" />
      <circle cx="4.40" cy="12.51" r="1.5" />
      <circle cx="8.25" cy="4.33" r="1.5" />
      <circle cx="6.51" cy="17.67" r="1.5" />
      <circle cx="8.27" cy="20.29" r="1.5" />
      <circle cx="17.93" cy="20.54" r="1.5" />
      {children}
    </svg>
  );
});

export default PaliCoat;
