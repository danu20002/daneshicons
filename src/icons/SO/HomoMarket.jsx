import React from 'react';

export const iconData = {
  "id": "HomoMarket",
  "name": "HomoMarket",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 15.99 L 14.84 7.38 L 2.51 17.45 L 4.44 5.89 L 15.14 8.63 L 18.89 2.68 L 7.72 16.45 L 8.89 3.18"
      }
    ],
    [
      "circle",
      {
        "cx": "3.19",
        "cy": "15.99",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "14.84",
        "cy": "7.38",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "2.51",
        "cy": "17.45",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "4.44",
        "cy": "5.89",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "15.14",
        "cy": "8.63",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "18.89",
        "cy": "2.68",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "7.72",
        "cy": "16.45",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "8.89",
        "cy": "3.18",
        "r": "1.00"
      }
    ]
  ]
};

export const HomoMarket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 15.99 L 14.84 7.38 L 2.51 17.45 L 4.44 5.89 L 15.14 8.63 L 18.89 2.68 L 7.72 16.45 L 8.89 3.18" />
      <circle cx="3.19" cy="15.99" r="0.82" />
      <circle cx="14.84" cy="7.38" r="1.47" />
      <circle cx="2.51" cy="17.45" r="1.39" />
      <circle cx="4.44" cy="5.89" r="1.31" />
      <circle cx="15.14" cy="8.63" r="0.96" />
      <circle cx="18.89" cy="2.68" r="1.42" />
      <circle cx="7.72" cy="16.45" r="1.20" />
      <circle cx="8.89" cy="3.18" r="1.00" />
      {children}
    </svg>
  );
});

export default HomoMarket;
