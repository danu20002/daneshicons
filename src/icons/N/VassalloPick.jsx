import React from 'react';

export const iconData = {
  "id": "VassalloPick",
  "name": "VassalloPick",
  "category": "N",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.77 4.89 L 7.22 17.75"
      }
    ],
    [
      "path",
      {
        "d": "M 13.77 4.89 L 10.63 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 13.77 4.89 L 3.44 5.53"
      }
    ],
    [
      "path",
      {
        "d": "M 7.22 17.75 L 3.44 5.53"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 20.55 L 10.63 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 20.55 L 3.44 5.53"
      }
    ],
    [
      "path",
      {
        "d": "M 10.63 20.87 L 3.44 5.53"
      }
    ],
    [
      "circle",
      {
        "cx": "13.77",
        "cy": "4.89",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "7.22",
        "cy": "17.75",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.20",
        "cy": "20.55",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "10.63",
        "cy": "20.87",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.44",
        "cy": "5.53",
        "r": "1.5"
      }
    ]
  ]
};

export const VassalloPick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.77 4.89 L 7.22 17.75" />
      <path d="M 13.77 4.89 L 10.63 20.87" />
      <path d="M 13.77 4.89 L 3.44 5.53" />
      <path d="M 7.22 17.75 L 3.44 5.53" />
      <path d="M 3.20 20.55 L 10.63 20.87" />
      <path d="M 3.20 20.55 L 3.44 5.53" />
      <path d="M 10.63 20.87 L 3.44 5.53" />
      <circle cx="13.77" cy="4.89" r="1.5" />
      <circle cx="7.22" cy="17.75" r="1.5" />
      <circle cx="3.20" cy="20.55" r="1.5" />
      <circle cx="10.63" cy="20.87" r="1.5" />
      <circle cx="3.44" cy="5.53" r="1.5" />
      {children}
    </svg>
  );
});

export default VassalloPick;
