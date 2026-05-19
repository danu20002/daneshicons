import React from 'react';

export const iconData = {
  "id": "GalvoEssence",
  "name": "GalvoEssence",
  "category": "KM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 13.12 L 15.91 20.27"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 13.12 L 14.71 6.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 13.12 L 10.17 8.98"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 13.12 L 19.31 12.62"
      }
    ],
    [
      "path",
      {
        "d": "M 15.91 20.27 L 14.71 6.96"
      }
    ],
    [
      "path",
      {
        "d": "M 15.91 20.27 L 10.17 8.98"
      }
    ],
    [
      "path",
      {
        "d": "M 15.91 20.27 L 10.85 11.97"
      }
    ],
    [
      "path",
      {
        "d": "M 14.71 6.96 L 10.17 8.98"
      }
    ],
    [
      "path",
      {
        "d": "M 14.71 6.96 L 19.31 12.62"
      }
    ],
    [
      "path",
      {
        "d": "M 10.17 8.98 L 10.85 11.97"
      }
    ],
    [
      "path",
      {
        "d": "M 10.17 8.98 L 19.31 12.62"
      }
    ],
    [
      "path",
      {
        "d": "M 10.85 11.97 L 19.31 12.62"
      }
    ],
    [
      "circle",
      {
        "cx": "3.77",
        "cy": "13.12",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "15.91",
        "cy": "20.27",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.71",
        "cy": "6.96",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "10.17",
        "cy": "8.98",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "10.85",
        "cy": "11.97",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.31",
        "cy": "12.62",
        "r": "1.5"
      }
    ]
  ]
};

export const GalvoEssence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 13.12 L 15.91 20.27" />
      <path d="M 3.77 13.12 L 14.71 6.96" />
      <path d="M 3.77 13.12 L 10.17 8.98" />
      <path d="M 3.77 13.12 L 19.31 12.62" />
      <path d="M 15.91 20.27 L 14.71 6.96" />
      <path d="M 15.91 20.27 L 10.17 8.98" />
      <path d="M 15.91 20.27 L 10.85 11.97" />
      <path d="M 14.71 6.96 L 10.17 8.98" />
      <path d="M 14.71 6.96 L 19.31 12.62" />
      <path d="M 10.17 8.98 L 10.85 11.97" />
      <path d="M 10.17 8.98 L 19.31 12.62" />
      <path d="M 10.85 11.97 L 19.31 12.62" />
      <circle cx="3.77" cy="13.12" r="1.5" />
      <circle cx="15.91" cy="20.27" r="1.5" />
      <circle cx="14.71" cy="6.96" r="1.5" />
      <circle cx="10.17" cy="8.98" r="1.5" />
      <circle cx="10.85" cy="11.97" r="1.5" />
      <circle cx="19.31" cy="12.62" r="1.5" />
      {children}
    </svg>
  );
});

export default GalvoEssence;
