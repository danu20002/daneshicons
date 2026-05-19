import React from 'react';

export const iconData = {
  "id": "DilithioNudge",
  "name": "DilithioNudge",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.64 7.62 L 10.77 17.35 L 7.01 11.58 L 17.72 20.54"
      }
    ],
    [
      "circle",
      {
        "cx": "10.64",
        "cy": "7.62",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "10.77",
        "cy": "17.35",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "7.01",
        "cy": "11.58",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "17.72",
        "cy": "20.54",
        "r": "0.69"
      }
    ]
  ]
};

export const DilithioNudge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.64 7.62 L 10.77 17.35 L 7.01 11.58 L 17.72 20.54" />
      <circle cx="10.64" cy="7.62" r="1.18" />
      <circle cx="10.77" cy="17.35" r="0.79" />
      <circle cx="7.01" cy="11.58" r="1.21" />
      <circle cx="17.72" cy="20.54" r="0.69" />
      {children}
    </svg>
  );
});

export default DilithioNudge;
