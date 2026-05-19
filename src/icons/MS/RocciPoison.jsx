import React from 'react';

export const iconData = {
  "id": "RocciPoison",
  "name": "RocciPoison",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.00 5.08 L 9.10 9.66 L 2.91 3.87 L 9.15 12.75 L 7.32 5.91 L 2.80 11.13 L 14.63 14.48"
      }
    ],
    [
      "circle",
      {
        "cx": "5.00",
        "cy": "5.08",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "9.10",
        "cy": "9.66",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "2.91",
        "cy": "3.87",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "9.15",
        "cy": "12.75",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "7.32",
        "cy": "5.91",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "2.80",
        "cy": "11.13",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "14.63",
        "cy": "14.48",
        "r": "1.40"
      }
    ]
  ]
};

export const RocciPoison = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.00 5.08 L 9.10 9.66 L 2.91 3.87 L 9.15 12.75 L 7.32 5.91 L 2.80 11.13 L 14.63 14.48" />
      <circle cx="5.00" cy="5.08" r="1.03" />
      <circle cx="9.10" cy="9.66" r="1.49" />
      <circle cx="2.91" cy="3.87" r="1.23" />
      <circle cx="9.15" cy="12.75" r="0.78" />
      <circle cx="7.32" cy="5.91" r="1.18" />
      <circle cx="2.80" cy="11.13" r="0.64" />
      <circle cx="14.63" cy="14.48" r="1.40" />
      {children}
    </svg>
  );
});

export default RocciPoison;
