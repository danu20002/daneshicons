import React from 'react';

export const iconData = {
  "id": "VulpinRibbon",
  "name": "VulpinRibbon",
  "category": "GV",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.59 16.32 L 20.91 15.73"
      }
    ],
    [
      "path",
      {
        "d": "M 11.59 16.32 L 17.19 10.92"
      }
    ],
    [
      "path",
      {
        "d": "M 11.59 16.32 L 7.38 10.76"
      }
    ],
    [
      "path",
      {
        "d": "M 13.50 4.77 L 20.91 15.73"
      }
    ],
    [
      "path",
      {
        "d": "M 13.50 4.77 L 17.19 10.92"
      }
    ],
    [
      "path",
      {
        "d": "M 13.50 4.77 L 7.38 10.76"
      }
    ],
    [
      "path",
      {
        "d": "M 20.91 15.73 L 20.37 6.94"
      }
    ],
    [
      "path",
      {
        "d": "M 20.91 15.73 L 17.19 10.92"
      }
    ],
    [
      "path",
      {
        "d": "M 20.91 15.73 L 7.38 10.76"
      }
    ],
    [
      "path",
      {
        "d": "M 20.37 6.94 L 17.19 10.92"
      }
    ],
    [
      "path",
      {
        "d": "M 20.37 6.94 L 7.38 10.76"
      }
    ],
    [
      "path",
      {
        "d": "M 17.19 10.92 L 7.38 10.76"
      }
    ],
    [
      "circle",
      {
        "cx": "11.59",
        "cy": "16.32",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.50",
        "cy": "4.77",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.91",
        "cy": "15.73",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.37",
        "cy": "6.94",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.19",
        "cy": "10.92",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "7.38",
        "cy": "10.76",
        "r": "1.5"
      }
    ]
  ]
};

export const VulpinRibbon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.59 16.32 L 20.91 15.73" />
      <path d="M 11.59 16.32 L 17.19 10.92" />
      <path d="M 11.59 16.32 L 7.38 10.76" />
      <path d="M 13.50 4.77 L 20.91 15.73" />
      <path d="M 13.50 4.77 L 17.19 10.92" />
      <path d="M 13.50 4.77 L 7.38 10.76" />
      <path d="M 20.91 15.73 L 20.37 6.94" />
      <path d="M 20.91 15.73 L 17.19 10.92" />
      <path d="M 20.91 15.73 L 7.38 10.76" />
      <path d="M 20.37 6.94 L 17.19 10.92" />
      <path d="M 20.37 6.94 L 7.38 10.76" />
      <path d="M 17.19 10.92 L 7.38 10.76" />
      <circle cx="11.59" cy="16.32" r="1.5" />
      <circle cx="13.50" cy="4.77" r="1.5" />
      <circle cx="20.91" cy="15.73" r="1.5" />
      <circle cx="20.37" cy="6.94" r="1.5" />
      <circle cx="17.19" cy="10.92" r="1.5" />
      <circle cx="7.38" cy="10.76" r="1.5" />
      {children}
    </svg>
  );
});

export default VulpinRibbon;
