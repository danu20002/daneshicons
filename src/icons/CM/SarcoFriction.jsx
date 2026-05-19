import React from 'react';

export const iconData = {
  "id": "SarcoFriction",
  "name": "SarcoFriction",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.50 18.39 L 11.75 10.38 L 3.11 4.82 L 2.10 9.70"
      }
    ],
    [
      "circle",
      {
        "cx": "13.50",
        "cy": "18.39",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "11.75",
        "cy": "10.38",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "3.11",
        "cy": "4.82",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "2.10",
        "cy": "9.70",
        "r": "0.84"
      }
    ]
  ]
};

export const SarcoFriction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.50 18.39 L 11.75 10.38 L 3.11 4.82 L 2.10 9.70" />
      <circle cx="13.50" cy="18.39" r="1.11" />
      <circle cx="11.75" cy="10.38" r="1.20" />
      <circle cx="3.11" cy="4.82" r="0.77" />
      <circle cx="2.10" cy="9.70" r="0.84" />
      {children}
    </svg>
  );
});

export default SarcoFriction;
