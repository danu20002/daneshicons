import React from 'react';

export const iconData = {
  "id": "ZonaMarine",
  "name": "ZonaMarine",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.06 9.63 L 15.62 5.99 L 16.11 3.26 L 18.21 20.29"
      }
    ],
    [
      "circle",
      {
        "cx": "3.06",
        "cy": "9.63",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "15.62",
        "cy": "5.99",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "16.11",
        "cy": "3.26",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "18.21",
        "cy": "20.29",
        "r": "0.75"
      }
    ]
  ]
};

export const ZonaMarine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.06 9.63 L 15.62 5.99 L 16.11 3.26 L 18.21 20.29" />
      <circle cx="3.06" cy="9.63" r="0.73" />
      <circle cx="15.62" cy="5.99" r="0.98" />
      <circle cx="16.11" cy="3.26" r="0.82" />
      <circle cx="18.21" cy="20.29" r="0.75" />
      {children}
    </svg>
  );
});

export default ZonaMarine;
