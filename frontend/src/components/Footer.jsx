import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-0 pb-0">

      <div className="bg-white h-[200px] mb-5 flex justify-between px-6">
        {/* Section 1 */}
        <div className="w-[40%] bg-white flex flex-col justify-between p-2">
          {/* Centered Top Logo */}
          <div className="flex justify-center">
            <img src="/logo.png" alt="Company Logo" className="h-18 object-contain" />
          </div>

          {/* Paragraph */}
          <div>
            <p className="text-tblue text-base leading-relaxed">
              Pitambara Techno Legal Consultancy LLP brings together deep technical and legal expertise to deliver integrated cybersecurity, privacy, technical security, and legal services.
            </p>
          </div>

          <div className="flex flex-row space-x-3 mt-1 pl-0">
  {/* Facebook */}
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group">
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-dblue group-hover:text-dyellow transition-colors">
    <title>Facebook</title>
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 
                        1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 
                        1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 
                        0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 
                        1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 
                        18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 
                        10.35 9.101 11.647Z"/>
  </svg>
</a>

{/* X */}
<a href="https://x.com" target="_blank" rel="noopener noreferrer" className="group">
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-dblue group-hover:text-dyellow transition-colors">
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 
                        7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 
                        3.24H4.298Z"/>
  </svg>
</a>

{/* Instagram */}
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group">
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-dblue group-hover:text-dyellow transition-colors">
    <title>Instagram</title>
    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 
                        1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 
                        1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 
                        2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 
                        1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 
                        3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 
                        2.1228-1.3881.665-.6682 1.0745-1.3378 
                        1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 
                        1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 
                        16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 
                        7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 
                        1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
  </svg>
</a>

{/* Pinterest */}
<a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="group">
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-dblue group-hover:text-dyellow transition-colors">
    <title>Pinterest</title>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 
                        9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 
                        1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 
                        0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 
                        1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 
                        0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 
                        1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 
                        0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 
                        7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 
                        2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 
                        11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
  </svg>
</a>

{/* GitHub */}
<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group">
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-dblue group-hover:text-dyellow transition-colors">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                        3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 
                        18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 
                        1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 
                        3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
                        0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 
                        3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 
                        3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 
                        3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 
                        2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 
                        12.297c0-6.627-5.373-12-12-12"/>
  </svg>
</a>
</div>
        </div>

        {/* Section 2 */}
        <div className="flex-1 max-w-xs bg-white p-2 text-tblue pt-5 ml-20">
          <h3 className="text-xl font-bold">Contact</h3>
          <div className="w-6 h-1 bg-dyellow my-1 rounded" />

          <div className="flex items-center gap-2 mt-3">
            <Phone size={20} strokeWidth={1.8} />
            <span className="text-base">+91 99817 01277</span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <Mail size={20} strokeWidth={1.8} />
            <span className="text-base">pitambaratlcinfo@gmail.com</span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <MapPin size={26} strokeWidth={1.8} />
            <span className="text-base">
              365, Sector B, Vijay Nagar, Indore, Madhya Pradesh, 452010
            </span>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex-1 max-w-xs bg-white p-2 text-tblue pt-5 ml-20">
          <h3 className="text-xl font-bold">Top Links</h3>
          <div className="w-6 h-1 bg-dyellow my-1 rounded" />

          <ul className="space-y-2 mt-3 text-base">
            <li>
              <a href="#" className="hover:text-dyellow transition-colors">Terms of Use</a>
            </li>
            <li>
              <a href="#" className="hover:text-dyellow transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-dyellow transition-colors">Cookies Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-dyellow transition-colors">Contacts</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
<div className="bg-[#f0faff] h-[100px] px-6 flex items-center justify-between pb-0">
  {/* Left Side */}
  <div className="text-tblue text-sm leading-snug">
    <p>Copyright © 2025 PTLC | All Right Reserved</p>
    {/* <p>
      <a href="#" className="hover:text-dyellow transition-colors">Support</a>{' '}
      <a href="#" className="hover:text-dyellow transition-colors">Terms & Conditions</a>{' '}
      <a href="#" className="hover:text-dyellow transition-colors">Privacy Policy</a>.
    </p> */}
  </div>

  {/* Right Side */}
  <div className="flex items-center gap-4">
  <span className="text-tblue font-bold text-base">Newsletter SignUp!</span>

  <div className="flex overflow-hidden rounded-full border border-gray-300">
    <input
      type="email"
      placeholder="E-Mail Type . . ."
      className="px-4 py-2 outline-none w-64 border-none bg-white"
    />
    <button className="bg-[#1a1a9e] text-white font-bold px-5 py-2 hover:bg-dyellow transition-colors">
      SUBSCRIBE
    </button>
  </div>
</div>
</div>

    </footer>
  );
};

export default Footer;
