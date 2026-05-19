import React from 'react';

export const iconData = {
  "id": "UrticeOmen",
  "name": "UrticeOmen",
  "category": "NK",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.59 8.37 L 4.86 11.02"
      }
    ],
    [
      "path",
      {
        "d": "M 11.59 8.37 L 10.19 5.61"
      }
    ],
    [
      "path",
      {
        "d": "M 11.59 8.37 L 13.95 13.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 11.02 L 10.19 5.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 11.02 L 13.95 13.55"
      }
    ],
    [
      "path",
      {
        "d": "M 10.19 5.61 L 13.95 13.55"
      }
    ],
    [
      "circle",
      {
        "cx": "11.59",
        "cy": "8.37",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.86",
        "cy": "11.02",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "10.19",
        "cy": "5.61",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.95",
        "cy": "13.55",
        "r": "1.5"
      }
    ]
  ]
};

export const UrticeOmen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.59 8.37 L 4.86 11.02" />
      <path d="M 11.59 8.37 L 10.19 5.61" />
      <path d="M 11.59 8.37 L 13.95 13.55" />
      <path d="M 4.86 11.02 L 10.19 5.61" />
      <path d="M 4.86 11.02 L 13.95 13.55" />
      <path d="M 10.19 5.61 L 13.95 13.55" />
      <circle cx="11.59" cy="8.37" r="1.5" />
      <circle cx="4.86" cy="11.02" r="1.5" />
      <circle cx="10.19" cy="5.61" r="1.5" />
      <circle cx="13.95" cy="13.55" r="1.5" />
      {children}
    </svg>
  );
});

export default UrticeOmen;
