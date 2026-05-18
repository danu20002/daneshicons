import React from 'react';

export const iconData = {
  id: "AlignVerticalJustifyStart",
  name: "AlignVerticalJustifyStart",
  category: "A",
  nodes: [["rect",{"width":"14","height":"6","x":"5","y":"16","rx":"2"}],["rect",{"width":"10","height":"6","x":"7","y":"6","rx":"2"}],["path",{"d":"M2 2h20"}]]
};

export const AlignVerticalJustifyStart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="14" height="6" x="5" y="16" rx="2" />
      <rect width="10" height="6" x="7" y="6" rx="2" />
      <path d="M2 2h20" />
      {children}
    </svg>
  );
});

export default AlignVerticalJustifyStart;
