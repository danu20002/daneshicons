import React from 'react';

export const iconData = {
  "id": "RupoTame",
  "name": "RupoTame",
  "category": "PP",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.90 15.44 L 6.90 17.58"
      }
    ],
    [
      "path",
      {
        "d": "M 13.90 15.44 L 12.76 19.85"
      }
    ],
    [
      "path",
      {
        "d": "M 13.90 15.44 L 11.38 12.26"
      }
    ],
    [
      "path",
      {
        "d": "M 13.90 15.44 L 12.40 11.60"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 17.58 L 12.76 19.85"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 17.58 L 12.07 7.49"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 17.58 L 11.38 12.26"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 17.58 L 12.40 11.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.76 19.85 L 11.38 12.26"
      }
    ],
    [
      "path",
      {
        "d": "M 12.76 19.85 L 12.40 11.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.07 7.49 L 11.38 12.26"
      }
    ],
    [
      "path",
      {
        "d": "M 11.38 12.26 L 12.40 11.60"
      }
    ],
    [
      "circle",
      {
        "cx": "13.90",
        "cy": "15.44",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.90",
        "cy": "17.58",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.76",
        "cy": "19.85",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.07",
        "cy": "7.49",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.38",
        "cy": "12.26",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.40",
        "cy": "11.60",
        "r": "1.5"
      }
    ]
  ]
};

export const RupoTame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.90 15.44 L 6.90 17.58" />
      <path d="M 13.90 15.44 L 12.76 19.85" />
      <path d="M 13.90 15.44 L 11.38 12.26" />
      <path d="M 13.90 15.44 L 12.40 11.60" />
      <path d="M 6.90 17.58 L 12.76 19.85" />
      <path d="M 6.90 17.58 L 12.07 7.49" />
      <path d="M 6.90 17.58 L 11.38 12.26" />
      <path d="M 6.90 17.58 L 12.40 11.60" />
      <path d="M 12.76 19.85 L 11.38 12.26" />
      <path d="M 12.76 19.85 L 12.40 11.60" />
      <path d="M 12.07 7.49 L 11.38 12.26" />
      <path d="M 11.38 12.26 L 12.40 11.60" />
      <circle cx="13.90" cy="15.44" r="1.5" />
      <circle cx="6.90" cy="17.58" r="1.5" />
      <circle cx="12.76" cy="19.85" r="1.5" />
      <circle cx="12.07" cy="7.49" r="1.5" />
      <circle cx="11.38" cy="12.26" r="1.5" />
      <circle cx="12.40" cy="11.60" r="1.5" />
      {children}
    </svg>
  );
});

export default RupoTame;
