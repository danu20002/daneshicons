import React from 'react';

export const iconData = {
  "id": "UmbroOscillate",
  "name": "UmbroOscillate",
  "category": "GV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 7.23 L 8.23 18.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 7.23 L 9.16 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 10.56 5.75 L 8.23 18.61"
      }
    ],
    [
      "path",
      {
        "d": "M 10.56 5.75 L 3.39 9.41"
      }
    ],
    [
      "path",
      {
        "d": "M 10.56 5.75 L 9.16 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 8.23 18.61 L 3.39 9.41"
      }
    ],
    [
      "path",
      {
        "d": "M 8.23 18.61 L 11.99 12.10"
      }
    ],
    [
      "path",
      {
        "d": "M 3.39 9.41 L 9.16 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 11.99 12.10 L 9.16 3.38"
      }
    ],
    [
      "circle",
      {
        "cx": "4.95",
        "cy": "7.23",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "10.56",
        "cy": "5.75",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "8.23",
        "cy": "18.61",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.39",
        "cy": "9.41",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.99",
        "cy": "12.10",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.16",
        "cy": "3.38",
        "r": "1.5"
      }
    ]
  ]
};

export const UmbroOscillate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 7.23 L 8.23 18.61" />
      <path d="M 4.95 7.23 L 9.16 3.38" />
      <path d="M 10.56 5.75 L 8.23 18.61" />
      <path d="M 10.56 5.75 L 3.39 9.41" />
      <path d="M 10.56 5.75 L 9.16 3.38" />
      <path d="M 8.23 18.61 L 3.39 9.41" />
      <path d="M 8.23 18.61 L 11.99 12.10" />
      <path d="M 3.39 9.41 L 9.16 3.38" />
      <path d="M 11.99 12.10 L 9.16 3.38" />
      <circle cx="4.95" cy="7.23" r="1.5" />
      <circle cx="10.56" cy="5.75" r="1.5" />
      <circle cx="8.23" cy="18.61" r="1.5" />
      <circle cx="3.39" cy="9.41" r="1.5" />
      <circle cx="11.99" cy="12.10" r="1.5" />
      <circle cx="9.16" cy="3.38" r="1.5" />
      {children}
    </svg>
  );
});

export default UmbroOscillate;
