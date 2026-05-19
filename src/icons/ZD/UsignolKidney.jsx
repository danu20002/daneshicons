import React from 'react';

export const iconData = {
  "id": "UsignolKidney",
  "name": "UsignolKidney",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.46 9.82 L 9.86 12.49 L 11.82 2.66 L 11.30 6.24 L 8.55 3.64 L 9.46 13.77 L 4.93 4.78"
      }
    ],
    [
      "circle",
      {
        "cx": "15.46",
        "cy": "9.82",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "9.86",
        "cy": "12.49",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "11.82",
        "cy": "2.66",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "11.30",
        "cy": "6.24",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "8.55",
        "cy": "3.64",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "9.46",
        "cy": "13.77",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "4.93",
        "cy": "4.78",
        "r": "0.58"
      }
    ]
  ]
};

export const UsignolKidney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.46 9.82 L 9.86 12.49 L 11.82 2.66 L 11.30 6.24 L 8.55 3.64 L 9.46 13.77 L 4.93 4.78" />
      <circle cx="15.46" cy="9.82" r="0.67" />
      <circle cx="9.86" cy="12.49" r="1.17" />
      <circle cx="11.82" cy="2.66" r="0.50" />
      <circle cx="11.30" cy="6.24" r="1.26" />
      <circle cx="8.55" cy="3.64" r="0.73" />
      <circle cx="9.46" cy="13.77" r="0.68" />
      <circle cx="4.93" cy="4.78" r="0.58" />
      {children}
    </svg>
  );
});

export default UsignolKidney;
