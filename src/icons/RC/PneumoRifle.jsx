import React from 'react';

export const iconData = {
  "id": "PneumoRifle",
  "name": "PneumoRifle",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 6.80 L 12.44 20.80 L 11.00 6.04 L 9.85 11.88 L 20.87 12.72 L 15.99 15.99"
      }
    ],
    [
      "circle",
      {
        "cx": "9.97",
        "cy": "6.80",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "12.44",
        "cy": "20.80",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "11.00",
        "cy": "6.04",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "9.85",
        "cy": "11.88",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "20.87",
        "cy": "12.72",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "15.99",
        "cy": "15.99",
        "r": "0.54"
      }
    ]
  ]
};

export const PneumoRifle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 6.80 L 12.44 20.80 L 11.00 6.04 L 9.85 11.88 L 20.87 12.72 L 15.99 15.99" />
      <circle cx="9.97" cy="6.80" r="0.99" />
      <circle cx="12.44" cy="20.80" r="1.07" />
      <circle cx="11.00" cy="6.04" r="1.00" />
      <circle cx="9.85" cy="11.88" r="1.11" />
      <circle cx="20.87" cy="12.72" r="1.21" />
      <circle cx="15.99" cy="15.99" r="0.54" />
      {children}
    </svg>
  );
});

export default PneumoRifle;
