export function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="mx-auto max-w-6xl px-4 text-center text-muted-foreground sm:px-6 lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} Apex Corporate Solutions. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
