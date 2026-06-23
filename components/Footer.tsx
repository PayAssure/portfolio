export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="w-full mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">P</div>
            <div>
              <div className="font-semibold">PayAssure</div>
              <div className="text-sm text-gray-500">Software Development</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">We deliver reliable software engineering services focused on outcomes and security.</p>
        </div>

        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-3 text-sm text-gray-600 space-y-2">
            <div>Email: hello@payassure.com</div>
            <div>Phone: +1 (555) 123-4567</div>
            <div className="flex items-center gap-3 mt-3">
              <a href="#" className="text-gray-500 hover:text-blue-600">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-blue-600">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t bg-white/90">
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-500 flex items-center justify-between">
          <div>© PayAssure — All rights reserved</div>
          <div className="text-xs">Made with care · Privacy · Terms</div>
        </div>
      </div>
    </footer>
  )
}
