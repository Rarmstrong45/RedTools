export default function WallpaperBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Flowing Topographic Contour Lines */}
      <div
        className="absolute inset-0 w-full h-full opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="#ef4444" stroke-width="0.8">
                <!-- Main hill contours on left -->
                <path d="M80,150 Q120,120 160,150 Q200,180 240,150 Q280,120 320,150" opacity="0.9"/>
                <path d="M70,140 Q110,110 150,140 Q190,170 230,140 Q270,110 310,140" opacity="0.8"/>
                <path d="M60,130 Q100,100 140,130 Q180,160 220,130 Q260,100 300,130" opacity="0.7"/>
                <path d="M50,120 Q90,90 130,120 Q170,150 210,120 Q250,90 290,120" opacity="0.6"/>
                <path d="M40,110 Q80,80 120,110 Q160,140 200,110 Q240,80 280,110" opacity="0.5"/>

                <!-- Valley contours on right -->
                <path d="M320,180 Q360,210 400,180" opacity="0.8"/>
                <path d="M310,190 Q350,220 390,190" opacity="0.7"/>
                <path d="M300,200 Q340,230 380,200" opacity="0.6"/>
                <path d="M290,210 Q330,240 370,210" opacity="0.5"/>

                <!-- Secondary elevation on upper left -->
                <path d="M30,80 Q70,50 110,80 Q150,110 190,80" opacity="0.7"/>
                <path d="M20,70 Q60,40 100,70 Q140,100 180,70" opacity="0.6"/>
                <path d="M10,60 Q50,30 90,60 Q130,90 170,60" opacity="0.5"/>

                <!-- Lower terrain flows -->
                <path d="M0,220 Q40,200 80,220 Q120,240 160,220 Q200,200 240,220 Q280,240 320,220 Q360,200 400,220" opacity="0.6"/>
                <path d="M0,230 Q40,210 80,230 Q120,250 160,230 Q200,210 240,230 Q280,250 320,230 Q360,210 400,230" opacity="0.5"/>
                <path d="M0,240 Q40,220 80,240 Q120,260 160,240 Q200,220 240,240 Q280,260 320,240 Q360,220 400,240" opacity="0.4"/>
              </g>
            </svg>
          `)}")`,
          backgroundSize: '400px 300px',
          backgroundPosition: '0 0'
        }}
      />

      {/* Gradient Overlay for Red/Black Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-redtools-red/20 via-black/80 to-black" />

      {/* Additional Detailed Contour Lines */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="#ef4444" stroke-width="0.6">
                <!-- Large flowing contours -->
                <path d="M100,200 Q200,150 300,200 Q400,250 500,200" opacity="0.8"/>
                <path d="M80,180 Q180,130 280,180 Q380,230 480,180" opacity="0.7"/>
                <path d="M60,160 Q160,110 260,160 Q360,210 460,160" opacity="0.6"/>
                <path d="M40,140 Q140,90 240,140 Q340,190 440,140" opacity="0.5"/>

                <!-- Meandering valley system -->
                <path d="M500,100 Q520,130 540,100 Q560,70 580,100" opacity="0.7"/>
                <path d="M490,110 Q510,140 530,110 Q550,80 570,110" opacity="0.6"/>
                <path d="M480,120 Q500,150 520,120 Q540,90 560,120" opacity="0.5"/>

                <!-- Ridge lines -->
                <path d="M20,300 Q120,280 220,300 Q320,320 420,300 Q520,280 600,300" opacity="0.6"/>
                <path d="M10,320 Q110,300 210,320 Q310,340 410,320 Q510,300 590,320" opacity="0.5"/>

                <!-- Circular hill formations -->
                <ellipse cx="150" cy="100" rx="40" ry="25" opacity="0.6"/>
                <ellipse cx="150" cy="100" rx="30" ry="18" opacity="0.7"/>
                <ellipse cx="150" cy="100" rx="20" ry="12" opacity="0.8"/>
                <ellipse cx="150" cy="100" rx="10" ry="6" opacity="0.9"/>

                <ellipse cx="450" cy="320" rx="50" ry="30" opacity="0.5"/>
                <ellipse cx="450" cy="320" rx="35" ry="21" opacity="0.6"/>
                <ellipse cx="450" cy="320" rx="20" ry="12" opacity="0.7"/>
              </g>
            </svg>
          `)}")`,
          backgroundSize: '600px 400px',
          backgroundPosition: '-100px -50px'
        }}
      />

      {/* Logo in Bottom Left Corner */}
      <div className="absolute bottom-8 left-8 z-10">
        <img
          src="https://cdn.builder.io/api/v1/assets/64496b1e452044d89561b3b5a5c1ff83/redtools-logo-257438?format=webp&width=800"
          alt="RedTools Logo"
          className="h-24 w-auto brightness-0 invert drop-shadow-lg"
        />
      </div>

      {/* Subtle Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
    </div>
  );
}
