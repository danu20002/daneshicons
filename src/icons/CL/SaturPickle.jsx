import React from 'react';

export const iconData = {
  "id": "SaturPickle",
  "name": "SaturPickle",
  "category": "CL",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.77 6.37 L 8.20 10.42"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 6.37 L 9.21 12.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 6.37 L 14.94 18.53"
      }
    ],
    [
      "path",
      {
        "d": "M 8.20 10.42 L 9.21 12.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 12.55 L 9.21 12.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 12.55 L 14.94 18.53"
      }
    ],
    [
      "circle",
      {
        "cx": "7.77",
        "cy": "6.37",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "8.20",
        "cy": "10.42",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "7.31",
        "cy": "12.55",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.21",
        "cy": "12.39",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.94",
        "cy": "18.53",
        "r": "1.5"
      }
    ]
  ]
};

export const SaturPickle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.77 6.37 L 8.20 10.42" />
      <path d="M 7.77 6.37 L 9.21 12.39" />
      <path d="M 7.77 6.37 L 14.94 18.53" />
      <path d="M 8.20 10.42 L 9.21 12.39" />
      <path d="M 7.31 12.55 L 9.21 12.39" />
      <path d="M 7.31 12.55 L 14.94 18.53" />
      <circle cx="7.77" cy="6.37" r="1.5" />
      <circle cx="8.20" cy="10.42" r="1.5" />
      <circle cx="7.31" cy="12.55" r="1.5" />
      <circle cx="9.21" cy="12.39" r="1.5" />
      <circle cx="14.94" cy="18.53" r="1.5" />
      {children}
    </svg>
  );
});

export default SaturPickle;
