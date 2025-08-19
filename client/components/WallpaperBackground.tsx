import "./WallpaperBackground.css";

export default function WallpaperBackground() {
  return (
    <div className="wallpaper-background">
      {/* Topographic Background Image */}
      <div className="topographic-background" />

      {/* Red Top-Right to Black Bottom-Left Gradient */}
      <div className="gradient-overlay" />

      {/* Logo in Bottom Left Corner */}
      <div className="logo-container">
        <img
          src="https://cdn.builder.io/api/v1/assets/64496b1e452044d89561b3b5a5c1ff83/redtools-logo-257438?format=webp&width=800"
          alt="RedTools Logo"
          className="logo-image"
        />
      </div>

      {/* Subtle Vignette Effect */}
      <div className="vignette-effect" />
    </div>
  );
}
