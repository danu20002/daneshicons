import React from 'react';

export const iconData = {
  "id": "XericoPeacock",
  "name": "XericoPeacock",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.34 18.36 L 3.91 13.23 L 9.57 14.49 L 10.12 7.63 L 13.19 8.88 L 17.36 11.56"
      }
    ],
    [
      "circle",
      {
        "cx": "20.34",
        "cy": "18.36",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "3.91",
        "cy": "13.23",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "9.57",
        "cy": "14.49",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "10.12",
        "cy": "7.63",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "13.19",
        "cy": "8.88",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "17.36",
        "cy": "11.56",
        "r": "0.75"
      }
    ]
  ]
};

export const XericoPeacock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.34 18.36 L 3.91 13.23 L 9.57 14.49 L 10.12 7.63 L 13.19 8.88 L 17.36 11.56" />
      <circle cx="20.34" cy="18.36" r="0.63" />
      <circle cx="3.91" cy="13.23" r="0.75" />
      <circle cx="9.57" cy="14.49" r="1.37" />
      <circle cx="10.12" cy="7.63" r="1.38" />
      <circle cx="13.19" cy="8.88" r="1.38" />
      <circle cx="17.36" cy="11.56" r="0.75" />
      {children}
    </svg>
  );
});

export default XericoPeacock;
