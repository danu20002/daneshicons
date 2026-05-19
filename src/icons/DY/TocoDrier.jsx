import React from 'react';

export const iconData = {
  "id": "TocoDrier",
  "name": "TocoDrier",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.28 17.99 L 20.64 8.77 L 16.03 20.09 L 16.46 2.77 L 6.03 18.27"
      }
    ],
    [
      "circle",
      {
        "cx": "3.28",
        "cy": "17.99",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "20.64",
        "cy": "8.77",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "16.03",
        "cy": "20.09",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "16.46",
        "cy": "2.77",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "6.03",
        "cy": "18.27",
        "r": "1.04"
      }
    ]
  ]
};

export const TocoDrier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.28 17.99 L 20.64 8.77 L 16.03 20.09 L 16.46 2.77 L 6.03 18.27" />
      <circle cx="3.28" cy="17.99" r="1.17" />
      <circle cx="20.64" cy="8.77" r="0.51" />
      <circle cx="16.03" cy="20.09" r="1.48" />
      <circle cx="16.46" cy="2.77" r="1.44" />
      <circle cx="6.03" cy="18.27" r="1.04" />
      {children}
    </svg>
  );
});

export default TocoDrier;
