import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Firm Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Rutto & Patners Advocates
            </h3>
            <p className="text-gray-300 mb-4">
              Professional legal services with integrity, dedication, and
              excellence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 hover:text-white"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 hover:text-white">
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 hover:text-white"
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  href="#sercices"
                  className="text-gray-300 hover:text-white"
                >
                  Family Law
                </Link>
              </li>
              <li>
                <Link
                  href="#sercices"
                  className="text-gray-300 hover:text-white"
                >
                  Criminal Defense
                </Link>
              </li>
              <li>
                <Link
                  href="#sercices"
                  className="text-gray-300 hover:text-white"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="#sercices"
                  className="text-gray-300 hover:text-white"
                >
                  Litigation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start space-x-3 mb-2">
                <FaMapMarkerAlt className="mt-1 text-gray-300" />
                <span className="text-gray-300">
                  Kiren Arcade
                  <br />
                  3rd floor, room 25
                  <br />
                  Ronald Ngala Street, Eldoret
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-2">
                <FaPhone className="text-gray-300" />
                <a
                  href="tel:+254722886287"
                  className="text-white hover:underline"
                >
                  (254) 7228-86287
                </a>
               
           
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-300" />
                <a
                  href="mailto:contact@lawfirmname.com"
                  className="text-white hover:underline"
                >
                  ruttopatnerslaw@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Rutto & Patners Advocates. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-300">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
