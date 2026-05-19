import React from 'react';

export const iconData = {
  "id": "QuiesMint",
  "name": "QuiesMint",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.36 14.90 L 20.39 15.70 L 2.82 18.59 L 19.51 17.06 L 16.59 20.66 L 7.72 20.06 L 18.67 15.14"
      }
    ],
    [
      "circle",
      {
        "cx": "4.36",
        "cy": "14.90",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "20.39",
        "cy": "15.70",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "2.82",
        "cy": "18.59",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "19.51",
        "cy": "17.06",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "16.59",
        "cy": "20.66",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "7.72",
        "cy": "20.06",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "18.67",
        "cy": "15.14",
        "r": "0.57"
      }
    ]
  ]
};

export const QuiesMint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.36 14.90 L 20.39 15.70 L 2.82 18.59 L 19.51 17.06 L 16.59 20.66 L 7.72 20.06 L 18.67 15.14" />
      <circle cx="4.36" cy="14.90" r="1.27" />
      <circle cx="20.39" cy="15.70" r="0.92" />
      <circle cx="2.82" cy="18.59" r="1.48" />
      <circle cx="19.51" cy="17.06" r="1.18" />
      <circle cx="16.59" cy="20.66" r="0.99" />
      <circle cx="7.72" cy="20.06" r="0.89" />
      <circle cx="18.67" cy="15.14" r="0.57" />
      {children}
    </svg>
  );
});

export default QuiesMint;
