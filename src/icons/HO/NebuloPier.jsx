import React from 'react';

export const iconData = {
  "id": "NebuloPier",
  "name": "NebuloPier",
  "category": "HO",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.42 6.80 L 20.50 7.47"
      }
    ],
    [
      "path",
      {
        "d": "M 18.42 6.80 L 3.37 14.18"
      }
    ],
    [
      "path",
      {
        "d": "M 18.42 6.80 L 20.66 19.46"
      }
    ],
    [
      "path",
      {
        "d": "M 18.42 6.80 L 19.53 8.78"
      }
    ],
    [
      "path",
      {
        "d": "M 20.50 7.47 L 20.88 8.36"
      }
    ],
    [
      "path",
      {
        "d": "M 20.50 7.47 L 19.53 8.78"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 14.18 L 20.66 19.46"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 14.18 L 19.53 8.78"
      }
    ],
    [
      "path",
      {
        "d": "M 20.88 8.36 L 19.53 8.78"
      }
    ],
    [
      "circle",
      {
        "cx": "18.42",
        "cy": "6.80",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.50",
        "cy": "7.47",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.37",
        "cy": "14.18",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.88",
        "cy": "8.36",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.66",
        "cy": "19.46",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.53",
        "cy": "8.78",
        "r": "1.5"
      }
    ]
  ]
};

export const NebuloPier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.42 6.80 L 20.50 7.47" />
      <path d="M 18.42 6.80 L 3.37 14.18" />
      <path d="M 18.42 6.80 L 20.66 19.46" />
      <path d="M 18.42 6.80 L 19.53 8.78" />
      <path d="M 20.50 7.47 L 20.88 8.36" />
      <path d="M 20.50 7.47 L 19.53 8.78" />
      <path d="M 3.37 14.18 L 20.66 19.46" />
      <path d="M 3.37 14.18 L 19.53 8.78" />
      <path d="M 20.88 8.36 L 19.53 8.78" />
      <circle cx="18.42" cy="6.80" r="1.5" />
      <circle cx="20.50" cy="7.47" r="1.5" />
      <circle cx="3.37" cy="14.18" r="1.5" />
      <circle cx="20.88" cy="8.36" r="1.5" />
      <circle cx="20.66" cy="19.46" r="1.5" />
      <circle cx="19.53" cy="8.78" r="1.5" />
      {children}
    </svg>
  );
});

export default NebuloPier;
