import React from 'react';

export const iconData = {
  "id": "HibernoNeed",
  "name": "HibernoNeed",
  "category": "TG",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.91 13.65 L 14.39 18.33"
      }
    ],
    [
      "circle",
      {
        "cx": "17.91",
        "cy": "13.65",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.79",
        "cy": "19.03",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.39",
        "cy": "18.33",
        "r": "1.5"
      }
    ]
  ]
};

export const HibernoNeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.91 13.65 L 14.39 18.33" />
      <circle cx="17.91" cy="13.65" r="1.5" />
      <circle cx="17.79" cy="19.03" r="1.5" />
      <circle cx="14.39" cy="18.33" r="1.5" />
      {children}
    </svg>
  );
});

export default HibernoNeed;
