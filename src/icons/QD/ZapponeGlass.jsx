import React from 'react';

export const iconData = {
  "id": "ZapponeGlass",
  "name": "ZapponeGlass",
  "category": "QD",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.84"
      }
    ]
  ]
};

export const ZapponeGlass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.73" />
      <circle cx="6.00" cy="10.00" r="0.56" />
      <circle cx="6.00" cy="14.00" r="0.89" />
      <circle cx="6.00" cy="18.00" r="0.91" />
      <circle cx="10.00" cy="6.00" r="0.30" />
      <circle cx="10.00" cy="10.00" r="0.92" />
      <circle cx="10.00" cy="14.00" r="0.98" />
      <circle cx="10.00" cy="18.00" r="0.44" />
      <circle cx="14.00" cy="6.00" r="1.10" />
      <circle cx="14.00" cy="10.00" r="1.07" />
      <circle cx="14.00" cy="14.00" r="0.73" />
      <circle cx="14.00" cy="18.00" r="1.00" />
      <circle cx="18.00" cy="6.00" r="0.68" />
      <circle cx="18.00" cy="10.00" r="0.31" />
      <circle cx="18.00" cy="14.00" r="0.94" />
      <circle cx="18.00" cy="18.00" r="0.84" />
      {children}
    </svg>
  );
});

export default ZapponeGlass;
