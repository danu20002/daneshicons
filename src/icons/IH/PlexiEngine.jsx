import React from 'react';

export const iconData = {
  "id": "PlexiEngine",
  "name": "PlexiEngine",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.09 13.50 L 18.95 15.73"
      }
    ],
    [
      "path",
      {
        "d": "M 20.09 13.50 L 16.57 10.95"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 15.73 L 16.57 10.95"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 15.73 L 17.91 16.83"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 15.73 L 11.00 17.53"
      }
    ],
    [
      "path",
      {
        "d": "M 16.57 10.95 L 17.91 16.83"
      }
    ],
    [
      "path",
      {
        "d": "M 16.57 10.95 L 11.00 17.53"
      }
    ],
    [
      "path",
      {
        "d": "M 17.91 16.83 L 11.00 17.53"
      }
    ],
    [
      "circle",
      {
        "cx": "20.09",
        "cy": "13.50",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.95",
        "cy": "15.73",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.57",
        "cy": "10.95",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.91",
        "cy": "16.83",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.00",
        "cy": "17.53",
        "r": "1.5"
      }
    ]
  ]
};

export const PlexiEngine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.09 13.50 L 18.95 15.73" />
      <path d="M 20.09 13.50 L 16.57 10.95" />
      <path d="M 18.95 15.73 L 16.57 10.95" />
      <path d="M 18.95 15.73 L 17.91 16.83" />
      <path d="M 18.95 15.73 L 11.00 17.53" />
      <path d="M 16.57 10.95 L 17.91 16.83" />
      <path d="M 16.57 10.95 L 11.00 17.53" />
      <path d="M 17.91 16.83 L 11.00 17.53" />
      <circle cx="20.09" cy="13.50" r="1.5" />
      <circle cx="18.95" cy="15.73" r="1.5" />
      <circle cx="16.57" cy="10.95" r="1.5" />
      <circle cx="17.91" cy="16.83" r="1.5" />
      <circle cx="11.00" cy="17.53" r="1.5" />
      {children}
    </svg>
  );
});

export default PlexiEngine;
