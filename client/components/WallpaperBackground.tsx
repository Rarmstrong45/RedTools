export default function WallpaperBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Topography Background Pattern */}
      <div 
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <g fill="#ef4444" fill-opacity="0.8">
                  <circle cx="30" cy="30" r="1.5"/>
                  <circle cx="10" cy="10" r="1"/>
                  <circle cx="50" cy="10" r="1"/>
                  <circle cx="10" cy="50" r="1"/>
                  <circle cx="50" cy="50" r="1"/>
                  <circle cx="5" cy="30" r="0.5"/>
                  <circle cx="55" cy="30" r="0.5"/>
                  <circle cx="30" cy="5" r="0.5"/>
                  <circle cx="30" cy="55" r="0.5"/>
                  <circle cx="20" cy="20" r="0.8"/>
                  <circle cx="40" cy="20" r="0.8"/>
                  <circle cx="20" cy="40" r="0.8"/>
                  <circle cx="40" cy="40" r="0.8"/>
                  <circle cx="15" cy="30" r="0.6"/>
                  <circle cx="45" cy="30" r="0.6"/>
                  <circle cx="30" cy="15" r="0.6"/>
                  <circle cx="30" cy="45" r="0.6"/>
                </g>
              </g>
            </svg>
          `)}")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient Overlay for Red/Black Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-redtools-red/20 via-black/80 to-black" />
      
      {/* Additional Topographic Lines */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,50 Q30,30 50,50 T90,50" stroke="#ef4444" stroke-width="0.5" fill="none"/>
              <path d="M20,30 Q40,10 60,30 T100,30" stroke="#ef4444" stroke-width="0.3" fill="none"/>
              <path d="M5,70 Q25,50 45,70 T85,70" stroke="#ef4444" stroke-width="0.4" fill="none"/>
              <path d="M15,80 Q35,60 55,80 T95,80" stroke="#ef4444" stroke-width="0.2" fill="none"/>
              <path d="M0,20 Q20,0 40,20 T80,20" stroke="#ef4444" stroke-width="0.3" fill="none"/>
            </svg>
          `)}")`,
          backgroundSize: '100px 100px'
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
