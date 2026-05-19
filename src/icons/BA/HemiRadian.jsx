import React from 'react';

export const iconData = {
  "id": "HemiRadian",
  "name": "HemiRadian",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.14 4.98 L 2.45 12.80 L 18.00 10.40 L 14.07 13.22"
      }
    ],
    [
      "circle",
      {
        "cx": "10.14",
        "cy": "4.98",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "2.45",
        "cy": "12.80",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.40",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "14.07",
        "cy": "13.22",
        "r": "0.78"
      }
    ]
  ]
};

export const HemiRadian = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.14 4.98 L 2.45 12.80 L 18.00 10.40 L 14.07 13.22" />
      <circle cx="10.14" cy="4.98" r="1.49" />
      <circle cx="2.45" cy="12.80" r="0.56" />
      <circle cx="18.00" cy="10.40" r="1.04" />
      <circle cx="14.07" cy="13.22" r="0.78" />
      {children}
    </svg>
  );
});

export default HemiRadian;
