import React from 'react';

export const iconData = {
  "id": "InteroPrompt",
  "name": "InteroPrompt",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.05 17.42 L 14.65 19.83 L 18.75 15.36 L 6.09 2.20 L 16.33 17.09 L 16.31 20.28"
      }
    ],
    [
      "circle",
      {
        "cx": "12.05",
        "cy": "17.42",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "14.65",
        "cy": "19.83",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "18.75",
        "cy": "15.36",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "6.09",
        "cy": "2.20",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "16.33",
        "cy": "17.09",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "16.31",
        "cy": "20.28",
        "r": "1.11"
      }
    ]
  ]
};

export const InteroPrompt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.05 17.42 L 14.65 19.83 L 18.75 15.36 L 6.09 2.20 L 16.33 17.09 L 16.31 20.28" />
      <circle cx="12.05" cy="17.42" r="1.18" />
      <circle cx="14.65" cy="19.83" r="0.61" />
      <circle cx="18.75" cy="15.36" r="0.75" />
      <circle cx="6.09" cy="2.20" r="1.49" />
      <circle cx="16.33" cy="17.09" r="0.70" />
      <circle cx="16.31" cy="20.28" r="1.11" />
      {children}
    </svg>
  );
});

export default InteroPrompt;
