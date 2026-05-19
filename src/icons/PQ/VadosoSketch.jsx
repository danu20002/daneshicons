import React from 'react';

export const iconData = {
  "id": "VadosoSketch",
  "name": "VadosoSketch",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.31 18.93 L 16.46 11.95 L 9.34 3.51 L 17.07 3.13 L 15.81 4.05 L 8.37 3.32"
      }
    ],
    [
      "circle",
      {
        "cx": "7.31",
        "cy": "18.93",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "16.46",
        "cy": "11.95",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "9.34",
        "cy": "3.51",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "17.07",
        "cy": "3.13",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "15.81",
        "cy": "4.05",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "8.37",
        "cy": "3.32",
        "r": "1.28"
      }
    ]
  ]
};

export const VadosoSketch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.31 18.93 L 16.46 11.95 L 9.34 3.51 L 17.07 3.13 L 15.81 4.05 L 8.37 3.32" />
      <circle cx="7.31" cy="18.93" r="1.29" />
      <circle cx="16.46" cy="11.95" r="0.58" />
      <circle cx="9.34" cy="3.51" r="0.59" />
      <circle cx="17.07" cy="3.13" r="1.45" />
      <circle cx="15.81" cy="4.05" r="1.49" />
      <circle cx="8.37" cy="3.32" r="1.28" />
      {children}
    </svg>
  );
});

export default VadosoSketch;
