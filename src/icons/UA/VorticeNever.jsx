import React from 'react';

export const iconData = {
  "id": "VorticeNever",
  "name": "VorticeNever",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.57 7.04 L 11.39 9.32 L 5.14 13.70 L 8.78 5.91 L 12.84 12.42"
      }
    ],
    [
      "circle",
      {
        "cx": "15.57",
        "cy": "7.04",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "11.39",
        "cy": "9.32",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "5.14",
        "cy": "13.70",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "8.78",
        "cy": "5.91",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "12.84",
        "cy": "12.42",
        "r": "1.33"
      }
    ]
  ]
};

export const VorticeNever = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.57 7.04 L 11.39 9.32 L 5.14 13.70 L 8.78 5.91 L 12.84 12.42" />
      <circle cx="15.57" cy="7.04" r="1.48" />
      <circle cx="11.39" cy="9.32" r="1.03" />
      <circle cx="5.14" cy="13.70" r="0.55" />
      <circle cx="8.78" cy="5.91" r="1.15" />
      <circle cx="12.84" cy="12.42" r="1.33" />
      {children}
    </svg>
  );
});

export default VorticeNever;
