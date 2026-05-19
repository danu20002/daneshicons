import React from 'react';

export const iconData = {
  "id": "PlenoHush",
  "name": "PlenoHush",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.56 16.86 L 14.48 15.60 L 6.51 8.17 L 10.86 15.43 L 16.67 11.99 L 9.70 9.06"
      }
    ],
    [
      "circle",
      {
        "cx": "2.56",
        "cy": "16.86",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "14.48",
        "cy": "15.60",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "6.51",
        "cy": "8.17",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "10.86",
        "cy": "15.43",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "16.67",
        "cy": "11.99",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "9.70",
        "cy": "9.06",
        "r": "1.25"
      }
    ]
  ]
};

export const PlenoHush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.56 16.86 L 14.48 15.60 L 6.51 8.17 L 10.86 15.43 L 16.67 11.99 L 9.70 9.06" />
      <circle cx="2.56" cy="16.86" r="1.14" />
      <circle cx="14.48" cy="15.60" r="0.92" />
      <circle cx="6.51" cy="8.17" r="0.52" />
      <circle cx="10.86" cy="15.43" r="1.35" />
      <circle cx="16.67" cy="11.99" r="0.74" />
      <circle cx="9.70" cy="9.06" r="1.25" />
      {children}
    </svg>
  );
});

export default PlenoHush;
