import React from 'react';

export const iconData = {
  "id": "VelociCrash",
  "name": "VelociCrash",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.04 16.54 L 2.07 16.88 L 19.46 5.21 L 21.81 19.06 L 13.96 14.78 L 20.97 4.99 L 3.77 8.03 L 2.48 4.26"
      }
    ],
    [
      "circle",
      {
        "cx": "10.04",
        "cy": "16.54",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "2.07",
        "cy": "16.88",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "19.46",
        "cy": "5.21",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "21.81",
        "cy": "19.06",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "13.96",
        "cy": "14.78",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "20.97",
        "cy": "4.99",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "3.77",
        "cy": "8.03",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "2.48",
        "cy": "4.26",
        "r": "0.91"
      }
    ]
  ]
};

export const VelociCrash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.04 16.54 L 2.07 16.88 L 19.46 5.21 L 21.81 19.06 L 13.96 14.78 L 20.97 4.99 L 3.77 8.03 L 2.48 4.26" />
      <circle cx="10.04" cy="16.54" r="1.22" />
      <circle cx="2.07" cy="16.88" r="0.63" />
      <circle cx="19.46" cy="5.21" r="0.85" />
      <circle cx="21.81" cy="19.06" r="1.46" />
      <circle cx="13.96" cy="14.78" r="1.07" />
      <circle cx="20.97" cy="4.99" r="1.00" />
      <circle cx="3.77" cy="8.03" r="1.26" />
      <circle cx="2.48" cy="4.26" r="0.91" />
      {children}
    </svg>
  );
});

export default VelociCrash;
