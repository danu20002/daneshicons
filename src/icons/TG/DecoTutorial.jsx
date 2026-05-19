import React from 'react';

export const iconData = {
  "id": "DecoTutorial",
  "name": "DecoTutorial",
  "category": "TG",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.92 12.54 L 15.25 11.67"
      }
    ],
    [
      "path",
      {
        "d": "M 14.92 12.54 L 5.16 14.82"
      }
    ],
    [
      "path",
      {
        "d": "M 14.92 12.54 L 17.79 13.59"
      }
    ],
    [
      "path",
      {
        "d": "M 15.25 11.67 L 5.16 14.82"
      }
    ],
    [
      "path",
      {
        "d": "M 15.25 11.67 L 17.79 13.59"
      }
    ],
    [
      "path",
      {
        "d": "M 15.25 11.67 L 16.02 12.76"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 14.82 L 17.79 13.59"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 14.82 L 16.02 12.76"
      }
    ],
    [
      "path",
      {
        "d": "M 17.79 13.59 L 16.02 12.76"
      }
    ],
    [
      "circle",
      {
        "cx": "14.92",
        "cy": "12.54",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "15.25",
        "cy": "11.67",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.16",
        "cy": "14.82",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.79",
        "cy": "13.59",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.02",
        "cy": "12.76",
        "r": "1.5"
      }
    ]
  ]
};

export const DecoTutorial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.92 12.54 L 15.25 11.67" />
      <path d="M 14.92 12.54 L 5.16 14.82" />
      <path d="M 14.92 12.54 L 17.79 13.59" />
      <path d="M 15.25 11.67 L 5.16 14.82" />
      <path d="M 15.25 11.67 L 17.79 13.59" />
      <path d="M 15.25 11.67 L 16.02 12.76" />
      <path d="M 5.16 14.82 L 17.79 13.59" />
      <path d="M 5.16 14.82 L 16.02 12.76" />
      <path d="M 17.79 13.59 L 16.02 12.76" />
      <circle cx="14.92" cy="12.54" r="1.5" />
      <circle cx="15.25" cy="11.67" r="1.5" />
      <circle cx="5.16" cy="14.82" r="1.5" />
      <circle cx="17.79" cy="13.59" r="1.5" />
      <circle cx="16.02" cy="12.76" r="1.5" />
      {children}
    </svg>
  );
});

export default DecoTutorial;
