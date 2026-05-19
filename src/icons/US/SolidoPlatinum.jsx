import React from 'react';

export const iconData = {
  "id": "SolidoPlatinum",
  "name": "SolidoPlatinum",
  "category": "US",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.79 5.69 L 13.75 17.53"
      }
    ],
    [
      "path",
      {
        "d": "M 12.79 5.69 L 16.01 15.75"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 16.66 L 13.75 17.53"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 16.66 L 16.01 15.75"
      }
    ],
    [
      "path",
      {
        "d": "M 13.75 17.53 L 4.05 6.16"
      }
    ],
    [
      "path",
      {
        "d": "M 13.75 17.53 L 16.89 17.39"
      }
    ],
    [
      "path",
      {
        "d": "M 13.75 17.53 L 16.01 15.75"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 6.16 L 16.89 17.39"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 6.16 L 16.01 15.75"
      }
    ],
    [
      "circle",
      {
        "cx": "12.79",
        "cy": "5.69",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.92",
        "cy": "16.66",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.75",
        "cy": "17.53",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.05",
        "cy": "6.16",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.89",
        "cy": "17.39",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.01",
        "cy": "15.75",
        "r": "1.5"
      }
    ]
  ]
};

export const SolidoPlatinum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.79 5.69 L 13.75 17.53" />
      <path d="M 12.79 5.69 L 16.01 15.75" />
      <path d="M 17.92 16.66 L 13.75 17.53" />
      <path d="M 17.92 16.66 L 16.01 15.75" />
      <path d="M 13.75 17.53 L 4.05 6.16" />
      <path d="M 13.75 17.53 L 16.89 17.39" />
      <path d="M 13.75 17.53 L 16.01 15.75" />
      <path d="M 4.05 6.16 L 16.89 17.39" />
      <path d="M 4.05 6.16 L 16.01 15.75" />
      <circle cx="12.79" cy="5.69" r="1.5" />
      <circle cx="17.92" cy="16.66" r="1.5" />
      <circle cx="13.75" cy="17.53" r="1.5" />
      <circle cx="4.05" cy="6.16" r="1.5" />
      <circle cx="16.89" cy="17.39" r="1.5" />
      <circle cx="16.01" cy="15.75" r="1.5" />
      {children}
    </svg>
  );
});

export default SolidoPlatinum;
