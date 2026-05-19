import React from 'react';

export const iconData = {
  "id": "VibratoSkunk",
  "name": "VibratoSkunk",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.74 10.04 L 10.38 9.56 L 8.21 7.75 L 12.06 4.61 L 10.05 12.15 L 20.38 10.71"
      }
    ],
    [
      "circle",
      {
        "cx": "7.74",
        "cy": "10.04",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "10.38",
        "cy": "9.56",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "8.21",
        "cy": "7.75",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "12.06",
        "cy": "4.61",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "10.05",
        "cy": "12.15",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "20.38",
        "cy": "10.71",
        "r": "0.74"
      }
    ]
  ]
};

export const VibratoSkunk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.74 10.04 L 10.38 9.56 L 8.21 7.75 L 12.06 4.61 L 10.05 12.15 L 20.38 10.71" />
      <circle cx="7.74" cy="10.04" r="0.70" />
      <circle cx="10.38" cy="9.56" r="1.26" />
      <circle cx="8.21" cy="7.75" r="0.60" />
      <circle cx="12.06" cy="4.61" r="1.42" />
      <circle cx="10.05" cy="12.15" r="1.44" />
      <circle cx="20.38" cy="10.71" r="0.74" />
      {children}
    </svg>
  );
});

export default VibratoSkunk;
