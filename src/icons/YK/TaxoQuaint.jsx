import React from 'react';

export const iconData = {
  "id": "TaxoQuaint",
  "name": "TaxoQuaint",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.22 4.90 L 9.43 11.51 L 20.83 7.23 L 15.20 6.79 L 13.15 2.16 L 17.00 11.32 L 3.64 16.79 L 14.30 17.08"
      }
    ],
    [
      "circle",
      {
        "cx": "12.22",
        "cy": "4.90",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "9.43",
        "cy": "11.51",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "20.83",
        "cy": "7.23",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "6.79",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "13.15",
        "cy": "2.16",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "17.00",
        "cy": "11.32",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "3.64",
        "cy": "16.79",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "14.30",
        "cy": "17.08",
        "r": "1.21"
      }
    ]
  ]
};

export const TaxoQuaint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.22 4.90 L 9.43 11.51 L 20.83 7.23 L 15.20 6.79 L 13.15 2.16 L 17.00 11.32 L 3.64 16.79 L 14.30 17.08" />
      <circle cx="12.22" cy="4.90" r="1.48" />
      <circle cx="9.43" cy="11.51" r="1.03" />
      <circle cx="20.83" cy="7.23" r="1.47" />
      <circle cx="15.20" cy="6.79" r="0.87" />
      <circle cx="13.15" cy="2.16" r="0.87" />
      <circle cx="17.00" cy="11.32" r="0.98" />
      <circle cx="3.64" cy="16.79" r="0.61" />
      <circle cx="14.30" cy="17.08" r="1.21" />
      {children}
    </svg>
  );
});

export default TaxoQuaint;
