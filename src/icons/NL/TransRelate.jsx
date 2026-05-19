import React from 'react';

export const iconData = {
  "id": "TransRelate",
  "name": "TransRelate",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.62 16.03 L 3.01 13.03 L 15.16 9.27 L 6.10 7.60 L 6.77 3.92"
      }
    ],
    [
      "circle",
      {
        "cx": "8.62",
        "cy": "16.03",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "3.01",
        "cy": "13.03",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "15.16",
        "cy": "9.27",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "6.10",
        "cy": "7.60",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "6.77",
        "cy": "3.92",
        "r": "0.99"
      }
    ]
  ]
};

export const TransRelate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.62 16.03 L 3.01 13.03 L 15.16 9.27 L 6.10 7.60 L 6.77 3.92" />
      <circle cx="8.62" cy="16.03" r="0.73" />
      <circle cx="3.01" cy="13.03" r="0.83" />
      <circle cx="15.16" cy="9.27" r="1.25" />
      <circle cx="6.10" cy="7.60" r="1.29" />
      <circle cx="6.77" cy="3.92" r="0.99" />
      {children}
    </svg>
  );
});

export default TransRelate;
