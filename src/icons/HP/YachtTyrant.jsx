import React from 'react';

export const iconData = {
  "id": "YachtTyrant",
  "name": "YachtTyrant",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.52 5.41 L 5.79 6.00 L 17.93 6.77 L 5.21 2.60 L 20.04 18.24"
      }
    ],
    [
      "circle",
      {
        "cx": "10.52",
        "cy": "5.41",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "5.79",
        "cy": "6.00",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "17.93",
        "cy": "6.77",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "5.21",
        "cy": "2.60",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "20.04",
        "cy": "18.24",
        "r": "0.99"
      }
    ]
  ]
};

export const YachtTyrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.52 5.41 L 5.79 6.00 L 17.93 6.77 L 5.21 2.60 L 20.04 18.24" />
      <circle cx="10.52" cy="5.41" r="1.35" />
      <circle cx="5.79" cy="6.00" r="1.31" />
      <circle cx="17.93" cy="6.77" r="0.91" />
      <circle cx="5.21" cy="2.60" r="1.28" />
      <circle cx="20.04" cy="18.24" r="0.99" />
      {children}
    </svg>
  );
});

export default YachtTyrant;
