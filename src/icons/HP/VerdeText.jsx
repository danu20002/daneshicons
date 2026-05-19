import React from 'react';

export const iconData = {
  "id": "VerdeText",
  "name": "VerdeText",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.00 11.96 L 20.45 9.23 L 18.33 13.12 L 14.26 21.42"
      }
    ],
    [
      "circle",
      {
        "cx": "16.00",
        "cy": "11.96",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "20.45",
        "cy": "9.23",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "18.33",
        "cy": "13.12",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "14.26",
        "cy": "21.42",
        "r": "1.24"
      }
    ]
  ]
};

export const VerdeText = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.00 11.96 L 20.45 9.23 L 18.33 13.12 L 14.26 21.42" />
      <circle cx="16.00" cy="11.96" r="1.10" />
      <circle cx="20.45" cy="9.23" r="1.46" />
      <circle cx="18.33" cy="13.12" r="0.58" />
      <circle cx="14.26" cy="21.42" r="1.24" />
      {children}
    </svg>
  );
});

export default VerdeText;
