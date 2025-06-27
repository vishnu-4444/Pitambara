export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="w-full px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Penetration Testing</a></li>
              <li><a href="#" className="hover:underline">Compliance Advisory</a></li>
              <li><a href="#" className="hover:underline">Policy Drafting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/alerts" className="hover:underline">Security Alerts</a></li>
              <li><a href="/news" className="hover:underline">Updates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@pitanbara.com</li>
              <li>Phone: +91-98765-43210</li>
              <li>
                <div className="flex space-x-3 mt-2">
                  <a href="#" className="hover:underline">LinkedIn</a>
                  <a href="#" className="hover:underline">Twitter</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Pitanbara. All rights reserved.
        </div>
      </footer>
    );
  }
  