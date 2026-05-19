import React from 'react';

export const iconData = {
  "id": "TympanSpray",
  "name": "TympanSpray",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.03 15.37 L 21.99 21.44 L 11.65 4.46 L 16.03 18.98 L 7.06 14.33 L 14.44 20.24 L 11.66 10.09"
      }
    ],
    [
      "circle",
      {
        "cx": "7.03",
        "cy": "15.37",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "21.99",
        "cy": "21.44",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "11.65",
        "cy": "4.46",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "16.03",
        "cy": "18.98",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "7.06",
        "cy": "14.33",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "14.44",
        "cy": "20.24",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "11.66",
        "cy": "10.09",
        "r": "0.92"
      }
    ]
  ]
};

export const TympanSpray = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.03 15.37 L 21.99 21.44 L 11.65 4.46 L 16.03 18.98 L 7.06 14.33 L 14.44 20.24 L 11.66 10.09" />
      <circle cx="7.03" cy="15.37" r="1.26" />
      <circle cx="21.99" cy="21.44" r="0.90" />
      <circle cx="11.65" cy="4.46" r="0.80" />
      <circle cx="16.03" cy="18.98" r="1.25" />
      <circle cx="7.06" cy="14.33" r="0.96" />
      <circle cx="14.44" cy="20.24" r="1.10" />
      <circle cx="11.66" cy="10.09" r="0.92" />
      {children}
    </svg>
  );
});

export default TympanSpray;
