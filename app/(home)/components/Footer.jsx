
export default function FooterMinimal() {
  return (
    <footer className="bg-transparent px-4 py-6 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-sm font-medium text-foreground">
          &copy; 2024 Made by <a href="https://edwardgaibor.me" target="_blank" className="underline">
            Edward Gaibor
          </a> :) |{" "}
          <a href="https://github.com/gaiborjosue/portfolio-yadira" target="_blank" className="underline">
            GitHub Repo
          </a>
        </p>
      </div>
    </footer>
  )
}