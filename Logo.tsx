import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  monochrome?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 48,
  showText = false,
  monochrome = false,
}) => {
  const darkGreen = monochrome ? 'currentColor' : '#1B432C';
  const lightGreen = monochrome ? 'currentColor' : '#7FA038';
  const leafGreen = monochrome ? 'currentColor' : '#94BA42';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:rotate-2"
        aria-label="Zeylon Harmony Botanical Monogram"
      >
        {/* Outer Circular Ring */}
        <circle
          cx="100"
          cy="100"
          r="95"
          stroke={darkGreen}
          strokeWidth="3.5"
          fill="none"
          className="transition-colors duration-300"
        />

        {/* Outer Fine Inset Ring */}
        <circle
          cx="100"
          cy="100"
          r="91"
          stroke={lightGreen}
          strokeWidth="1"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Stylized 'H' in Fresh Leaf Green */}
        <g fill={lightGreen}>
          {/* Left vertical stem of H */}
          <path d="M102 67C104 67 114 67 117 67C118.5 76 118 120 117 131C114 131 104 131 102 131C102 127 106 125 106 120C106 100 106 88 106 77C106 73 102 70 102 67Z" />
          {/* Right vertical stem of H */}
          <path d="M140 67C142 67 152 67 155 67C153.5 76 153.5 120 155 131C152 131 142 131 140 131C140 127 144 125 144 120C144 95 144 88 144 77C144 73 140 70 140 67Z" />
        </g>

        {/* Lower dynamic swoosh in lime green underneath H */}
        <path
          d="M103 140C118 144 138 145 158 136C163 133 167 127 167 121C164 128 158 133 150 135C136 138 118 137 103 140Z"
          fill={lightGreen}
        />
        <path
          d="M102 143C124 146 151 148 174 130C168 143 145 153 118 150C110 149 104 146 102 143Z"
          fill={leafGreen}
        />

        {/* Flowing botanical vine serving as crossbar through Z & H */}
        <path
          d="M90 128C88 115 94 100 115 95C135 90 156 83 165 67C165 74 162 86 148 95C130 106 105 108 97 125C95 129 93 130 90 128Z"
          fill={darkGreen}
        />

        {/* The Bold Stylized 'Z' in Forest Green with Leaves */}
        {/* Upper horizontal bar & leaf branching */}
        <path
          d="M34 63C42 63 60 62 82 72C89 60 88 47 77 40C68 34 65 37 64 38C64 45 68 53 74 57C60 52 46 54 34 63Z"
          fill={darkGreen}
        />
        {/* Top Leaf Accent 1 */}
        <path
          d="M66 38C75 24 95 23 103 26C103 36 94 53 82 59C80 50 74 41 66 38Z"
          fill={darkGreen}
        />
        {/* Top Leaf Accent 2 (Fresh sprout) */}
        <path
          d="M93 42C106 31 123 35 130 40C127 50 114 62 101 64C100 56 97 47 93 42Z"
          fill={lightGreen}
        />

        {/* Main Z Diagonal Sweep & Bottom Serif */}
        <path
          d="M75 75C60 87 47 101 37 117C31 126 27 136 25 140C33 135 48 126 62 126C78 126 98 135 116 143C135 151 154 152 171 144C151 159 127 160 106 153C85 146 68 138 52 138C40 138 31 142 25 148C28 135 40 115 54 99C61 90 69 82 75 75Z"
          fill={darkGreen}
        />

        {/* Leaf sprout on Z shoulder */}
        <path
          d="M26 64C34 66 50 72 73 70C78 70 82 73 79 77C68 88 48 83 36 78C26 73 24 67 26 64Z"
          fill={darkGreen}
        />
        <path
          d="M34 64C48 64 68 70 79 77C57 78 40 73 34 64Z"
          fill={leafGreen}
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif text-lg tracking-wider font-semibold text-[#1B432C] leading-none">
            ZEYLON HARMONY
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] font-sans font-medium text-[#8C5535] mt-1">
            Artisanal Single Estate Ceylon Spices
          </span>
        </div>
      )}
    </div>
  );
};
