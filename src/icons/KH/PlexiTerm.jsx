import React from 'react';

export const iconData = {
  "id": "PlexiTerm",
  "name": "PlexiTerm",
  "category": "KH",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.88"
      }
    ]
  ]
};

export const PlexiTerm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.69" />
      <circle cx="6.00" cy="10.00" r="0.90" />
      <circle cx="6.00" cy="14.00" r="0.85" />
      <circle cx="6.00" cy="18.00" r="0.43" />
      <circle cx="10.00" cy="6.00" r="0.75" />
      <circle cx="10.00" cy="10.00" r="0.58" />
      <circle cx="10.00" cy="14.00" r="0.77" />
      <circle cx="10.00" cy="18.00" r="0.81" />
      <circle cx="14.00" cy="6.00" r="0.90" />
      <circle cx="14.00" cy="10.00" r="0.30" />
      <circle cx="14.00" cy="14.00" r="0.75" />
      <circle cx="14.00" cy="18.00" r="0.61" />
      <circle cx="18.00" cy="6.00" r="0.62" />
      <circle cx="18.00" cy="10.00" r="0.91" />
      <circle cx="18.00" cy="14.00" r="0.48" />
      <circle cx="18.00" cy="18.00" r="0.88" />
      {children}
    </svg>
  );
});

export default PlexiTerm;
