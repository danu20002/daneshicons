import React from 'react';

export const iconData = {
  "id": "TsunamGrill",
  "name": "TsunamGrill",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.82 9.13 L 14.10 4.40 L 10.62 5.63 L 20.87 4.41"
      }
    ],
    [
      "circle",
      {
        "cx": "14.82",
        "cy": "9.13",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "14.10",
        "cy": "4.40",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "10.62",
        "cy": "5.63",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "20.87",
        "cy": "4.41",
        "r": "0.88"
      }
    ]
  ]
};

export const TsunamGrill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.82 9.13 L 14.10 4.40 L 10.62 5.63 L 20.87 4.41" />
      <circle cx="14.82" cy="9.13" r="0.89" />
      <circle cx="14.10" cy="4.40" r="0.57" />
      <circle cx="10.62" cy="5.63" r="0.94" />
      <circle cx="20.87" cy="4.41" r="0.88" />
      {children}
    </svg>
  );
});

export default TsunamGrill;
