export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-2 border-border" />
        <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-transparent border-t-brand-500 animate-spin" />
      </div>
    </div>
  );
}
