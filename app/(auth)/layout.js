export default function RootLayout({ children }) {
  return (
    <section className="flex h-screen overflow-y-auto justify-center items-center">
        {children}
    </section>
  );
}
