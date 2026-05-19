import React from 'react';

export const iconData = {
  "id": "SomaPipe",
  "name": "SomaPipe",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.73 8.95 L 2.56 2.26 L 6.91 21.92 L 9.91 10.64 L 17.73 2.77 L 5.55 16.49 L 15.37 5.76"
      }
    ],
    [
      "circle",
      {
        "cx": "17.73",
        "cy": "8.95",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "2.56",
        "cy": "2.26",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "6.91",
        "cy": "21.92",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "9.91",
        "cy": "10.64",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "17.73",
        "cy": "2.77",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "5.55",
        "cy": "16.49",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "15.37",
        "cy": "5.76",
        "r": "0.67"
      }
    ]
  ]
};

export const SomaPipe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.73 8.95 L 2.56 2.26 L 6.91 21.92 L 9.91 10.64 L 17.73 2.77 L 5.55 16.49 L 15.37 5.76" />
      <circle cx="17.73" cy="8.95" r="1.18" />
      <circle cx="2.56" cy="2.26" r="1.40" />
      <circle cx="6.91" cy="21.92" r="0.83" />
      <circle cx="9.91" cy="10.64" r="1.45" />
      <circle cx="17.73" cy="2.77" r="1.10" />
      <circle cx="5.55" cy="16.49" r="1.09" />
      <circle cx="15.37" cy="5.76" r="0.67" />
      {children}
    </svg>
  );
});

export default SomaPipe;
