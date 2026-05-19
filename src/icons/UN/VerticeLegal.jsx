import React from 'react';

export const iconData = {
  "id": "VerticeLegal",
  "name": "VerticeLegal",
  "category": "UN",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.70"
      }
    ]
  ]
};

export const VerticeLegal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.73" />
      <circle cx="5.60" cy="8.80" r="0.53" />
      <circle cx="5.60" cy="12.00" r="0.60" />
      <circle cx="5.60" cy="15.20" r="0.91" />
      <circle cx="5.60" cy="18.40" r="1.08" />
      <circle cx="8.80" cy="5.60" r="0.36" />
      <circle cx="8.80" cy="8.80" r="0.61" />
      <circle cx="8.80" cy="12.00" r="0.62" />
      <circle cx="8.80" cy="15.20" r="0.94" />
      <circle cx="8.80" cy="18.40" r="0.79" />
      <circle cx="12.00" cy="5.60" r="0.98" />
      <circle cx="12.00" cy="8.80" r="0.35" />
      <circle cx="12.00" cy="12.00" r="0.41" />
      <circle cx="12.00" cy="15.20" r="0.81" />
      <circle cx="12.00" cy="18.40" r="0.61" />
      <circle cx="15.20" cy="5.60" r="0.49" />
      <circle cx="15.20" cy="8.80" r="0.41" />
      <circle cx="15.20" cy="12.00" r="0.52" />
      <circle cx="15.20" cy="15.20" r="0.67" />
      <circle cx="15.20" cy="18.40" r="1.08" />
      <circle cx="18.40" cy="5.60" r="0.55" />
      <circle cx="18.40" cy="8.80" r="0.33" />
      <circle cx="18.40" cy="12.00" r="0.98" />
      <circle cx="18.40" cy="15.20" r="0.30" />
      <circle cx="18.40" cy="18.40" r="0.70" />
      {children}
    </svg>
  );
});

export default VerticeLegal;
