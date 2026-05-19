import React from 'react';

export const iconData = {
  "id": "UrticeSaucer",
  "name": "UrticeSaucer",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.51 14.16 L 6.77 3.23 L 4.51 4.87 L 10.57 14.12"
      }
    ],
    [
      "circle",
      {
        "cx": "12.51",
        "cy": "14.16",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "6.77",
        "cy": "3.23",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "4.51",
        "cy": "4.87",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "10.57",
        "cy": "14.12",
        "r": "1.07"
      }
    ]
  ]
};

export const UrticeSaucer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.51 14.16 L 6.77 3.23 L 4.51 4.87 L 10.57 14.12" />
      <circle cx="12.51" cy="14.16" r="1.07" />
      <circle cx="6.77" cy="3.23" r="0.87" />
      <circle cx="4.51" cy="4.87" r="1.35" />
      <circle cx="10.57" cy="14.12" r="1.07" />
      {children}
    </svg>
  );
});

export default UrticeSaucer;
