import React from 'react';

export const iconData = {
  "id": "TextuDistill",
  "name": "TextuDistill",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.37 11.64 L 12.33 8.70 L 20.59 14.66 L 2.25 8.63 L 11.28 9.77 L 16.79 18.98 L 11.15 9.64"
      }
    ],
    [
      "circle",
      {
        "cx": "11.37",
        "cy": "11.64",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "12.33",
        "cy": "8.70",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "20.59",
        "cy": "14.66",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "2.25",
        "cy": "8.63",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "11.28",
        "cy": "9.77",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "16.79",
        "cy": "18.98",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "11.15",
        "cy": "9.64",
        "r": "1.32"
      }
    ]
  ]
};

export const TextuDistill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.37 11.64 L 12.33 8.70 L 20.59 14.66 L 2.25 8.63 L 11.28 9.77 L 16.79 18.98 L 11.15 9.64" />
      <circle cx="11.37" cy="11.64" r="1.40" />
      <circle cx="12.33" cy="8.70" r="0.77" />
      <circle cx="20.59" cy="14.66" r="0.50" />
      <circle cx="2.25" cy="8.63" r="1.13" />
      <circle cx="11.28" cy="9.77" r="1.30" />
      <circle cx="16.79" cy="18.98" r="1.09" />
      <circle cx="11.15" cy="9.64" r="1.32" />
      {children}
    </svg>
  );
});

export default TextuDistill;
