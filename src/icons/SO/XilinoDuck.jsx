import React from 'react';

export const iconData = {
  "id": "XilinoDuck",
  "name": "XilinoDuck",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.75 14.30 L 20.86 16.59 L 15.13 2.38 L 6.27 21.23 L 14.40 17.07 L 6.86 9.91"
      }
    ],
    [
      "circle",
      {
        "cx": "18.75",
        "cy": "14.30",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "20.86",
        "cy": "16.59",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "15.13",
        "cy": "2.38",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "6.27",
        "cy": "21.23",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "14.40",
        "cy": "17.07",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "6.86",
        "cy": "9.91",
        "r": "1.32"
      }
    ]
  ]
};

export const XilinoDuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.75 14.30 L 20.86 16.59 L 15.13 2.38 L 6.27 21.23 L 14.40 17.07 L 6.86 9.91" />
      <circle cx="18.75" cy="14.30" r="0.63" />
      <circle cx="20.86" cy="16.59" r="0.95" />
      <circle cx="15.13" cy="2.38" r="1.00" />
      <circle cx="6.27" cy="21.23" r="1.49" />
      <circle cx="14.40" cy="17.07" r="0.60" />
      <circle cx="6.86" cy="9.91" r="1.32" />
      {children}
    </svg>
  );
});

export default XilinoDuck;
