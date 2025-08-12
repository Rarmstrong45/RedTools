export default function WallpaperBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Topographic Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2F7df31d2775f848d39d4a74bab01dcb4a%2F2eb47fbabf8e4053a19f5e94b336b356?format=webp&width=1920")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Red Top-Right to Black Bottom-Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-redtools-red/40 via-redtools-red-dark/20 to-black/80" />

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
