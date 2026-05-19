import React from 'react';

export const iconData = {
  "id": "DuraThroat",
  "name": "DuraThroat",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.23 9.35 L 6.63 9.56"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 9.35 L 20.34 7.77"
      }
    ],
    [
      "path",
      {
        "d": "M 19.23 15.87 L 17.51 14.53"
      }
    ],
    [
      "path",
      {
        "d": "M 19.23 15.87 L 6.63 9.56"
      }
    ],
    [
      "path",
      {
        "d": "M 19.23 15.87 L 20.34 7.77"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 14.53 L 6.63 9.56"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 14.53 L 20.34 7.77"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 14.53 L 11.78 6.26"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 9.56 L 11.78 6.26"
      }
    ],
    [
      "circle",
      {
        "cx": "5.23",
        "cy": "9.35",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.23",
        "cy": "15.87",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.51",
        "cy": "14.53",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.63",
        "cy": "9.56",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.34",
        "cy": "7.77",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.78",
        "cy": "6.26",
        "r": "1.5"
      }
    ]
  ]
};

export const DuraThroat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.23 9.35 L 6.63 9.56" />
      <path d="M 5.23 9.35 L 20.34 7.77" />
      <path d="M 19.23 15.87 L 17.51 14.53" />
      <path d="M 19.23 15.87 L 6.63 9.56" />
      <path d="M 19.23 15.87 L 20.34 7.77" />
      <path d="M 17.51 14.53 L 6.63 9.56" />
      <path d="M 17.51 14.53 L 20.34 7.77" />
      <path d="M 17.51 14.53 L 11.78 6.26" />
      <path d="M 6.63 9.56 L 11.78 6.26" />
      <circle cx="5.23" cy="9.35" r="1.5" />
      <circle cx="19.23" cy="15.87" r="1.5" />
      <circle cx="17.51" cy="14.53" r="1.5" />
      <circle cx="6.63" cy="9.56" r="1.5" />
      <circle cx="20.34" cy="7.77" r="1.5" />
      <circle cx="11.78" cy="6.26" r="1.5" />
      {children}
    </svg>
  );
});

export default DuraThroat;
