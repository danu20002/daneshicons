import React from 'react';

export const iconData = {
  "id": "HoloBuzz",
  "name": "HoloBuzz",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.98 8.29 L 18.38 9.49 L 14.30 16.58 L 18.04 21.45 L 4.62 18.95 L 5.73 9.57 L 13.38 18.73 L 17.25 13.54"
      }
    ],
    [
      "circle",
      {
        "cx": "15.98",
        "cy": "8.29",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "18.38",
        "cy": "9.49",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "14.30",
        "cy": "16.58",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "18.04",
        "cy": "21.45",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "4.62",
        "cy": "18.95",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "5.73",
        "cy": "9.57",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "13.38",
        "cy": "18.73",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "17.25",
        "cy": "13.54",
        "r": "1.12"
      }
    ]
  ]
};

export const HoloBuzz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.98 8.29 L 18.38 9.49 L 14.30 16.58 L 18.04 21.45 L 4.62 18.95 L 5.73 9.57 L 13.38 18.73 L 17.25 13.54" />
      <circle cx="15.98" cy="8.29" r="0.70" />
      <circle cx="18.38" cy="9.49" r="0.85" />
      <circle cx="14.30" cy="16.58" r="1.22" />
      <circle cx="18.04" cy="21.45" r="1.26" />
      <circle cx="4.62" cy="18.95" r="0.79" />
      <circle cx="5.73" cy="9.57" r="0.58" />
      <circle cx="13.38" cy="18.73" r="0.58" />
      <circle cx="17.25" cy="13.54" r="1.12" />
      {children}
    </svg>
  );
});

export default HoloBuzz;
