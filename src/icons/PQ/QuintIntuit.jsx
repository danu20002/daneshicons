import React from 'react';

export const iconData = {
  "id": "QuintIntuit",
  "name": "QuintIntuit",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.11 3.13 L 12.69 2.87 L 21.39 20.65 L 3.54 16.96 L 13.07 7.18 L 15.79 4.66"
      }
    ],
    [
      "circle",
      {
        "cx": "15.11",
        "cy": "3.13",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "12.69",
        "cy": "2.87",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "21.39",
        "cy": "20.65",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "3.54",
        "cy": "16.96",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "13.07",
        "cy": "7.18",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "15.79",
        "cy": "4.66",
        "r": "0.57"
      }
    ]
  ]
};

export const QuintIntuit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.11 3.13 L 12.69 2.87 L 21.39 20.65 L 3.54 16.96 L 13.07 7.18 L 15.79 4.66" />
      <circle cx="15.11" cy="3.13" r="0.98" />
      <circle cx="12.69" cy="2.87" r="0.99" />
      <circle cx="21.39" cy="20.65" r="1.15" />
      <circle cx="3.54" cy="16.96" r="0.77" />
      <circle cx="13.07" cy="7.18" r="0.70" />
      <circle cx="15.79" cy="4.66" r="0.57" />
      {children}
    </svg>
  );
});

export default QuintIntuit;
