import React from 'react';

export const iconData = {
  "id": "SonnoPitch",
  "name": "SonnoPitch",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.29 7.36 L 21.33 2.19 L 19.71 2.04 L 5.36 18.07"
      }
    ],
    [
      "circle",
      {
        "cx": "21.29",
        "cy": "7.36",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "21.33",
        "cy": "2.19",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "19.71",
        "cy": "2.04",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "5.36",
        "cy": "18.07",
        "r": "0.78"
      }
    ]
  ]
};

export const SonnoPitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.29 7.36 L 21.33 2.19 L 19.71 2.04 L 5.36 18.07" />
      <circle cx="21.29" cy="7.36" r="1.43" />
      <circle cx="21.33" cy="2.19" r="1.12" />
      <circle cx="19.71" cy="2.04" r="1.05" />
      <circle cx="5.36" cy="18.07" r="0.78" />
      {children}
    </svg>
  );
});

export default SonnoPitch;
