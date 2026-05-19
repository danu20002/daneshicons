import React from 'react';

export const iconData = {
  "id": "TridentePresent",
  "name": "TridentePresent",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.29 6.16 L 3.01 10.45 L 6.92 2.63 L 4.50 5.41 L 16.75 12.28 L 18.68 7.73 L 9.82 17.73"
      }
    ],
    [
      "circle",
      {
        "cx": "19.29",
        "cy": "6.16",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "3.01",
        "cy": "10.45",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "6.92",
        "cy": "2.63",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "4.50",
        "cy": "5.41",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "16.75",
        "cy": "12.28",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "18.68",
        "cy": "7.73",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "9.82",
        "cy": "17.73",
        "r": "0.77"
      }
    ]
  ]
};

export const TridentePresent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.29 6.16 L 3.01 10.45 L 6.92 2.63 L 4.50 5.41 L 16.75 12.28 L 18.68 7.73 L 9.82 17.73" />
      <circle cx="19.29" cy="6.16" r="0.80" />
      <circle cx="3.01" cy="10.45" r="1.02" />
      <circle cx="6.92" cy="2.63" r="1.44" />
      <circle cx="4.50" cy="5.41" r="1.34" />
      <circle cx="16.75" cy="12.28" r="1.10" />
      <circle cx="18.68" cy="7.73" r="0.77" />
      <circle cx="9.82" cy="17.73" r="0.77" />
      {children}
    </svg>
  );
});

export default TridentePresent;
