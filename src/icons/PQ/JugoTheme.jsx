import React from 'react';

export const iconData = {
  "id": "JugoTheme",
  "name": "JugoTheme",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.48 11.17 L 3.33 7.10 L 4.99 20.91 L 8.08 11.29"
      }
    ],
    [
      "circle",
      {
        "cx": "8.48",
        "cy": "11.17",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "3.33",
        "cy": "7.10",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "4.99",
        "cy": "20.91",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "8.08",
        "cy": "11.29",
        "r": "0.83"
      }
    ]
  ]
};

export const JugoTheme = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.48 11.17 L 3.33 7.10 L 4.99 20.91 L 8.08 11.29" />
      <circle cx="8.48" cy="11.17" r="1.08" />
      <circle cx="3.33" cy="7.10" r="0.72" />
      <circle cx="4.99" cy="20.91" r="0.75" />
      <circle cx="8.08" cy="11.29" r="0.83" />
      {children}
    </svg>
  );
});

export default JugoTheme;
