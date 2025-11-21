// components/Footer.jsx
import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-black! text-white  text-sm lg:px-20 px-5 lg:pt-20 lg:pb-[20]">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 ">
  
          {/* Column 1 - Dazzle */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Dazzle</h3>
            <ul className="space-y-2 opacity-80 p-0 m-0">
              <li>Home</li>
              <Link href="/aboutus" className="!no-underline text-[#FFFFFF]! p-0 m-0">About Us</Link>
              <li>Portfolio</li>
              <li>Clients</li>
              <li>Career</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
  
          {/* Column 2 - Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 opacity-80 p-0 m-0">
              <li>Consultation</li>
              <li>3D Booth Design</li>
              <li>Booth Construction</li>
              <li>Graphic Production</li>
              <li>Trade Show Management</li>
              <li>Installation, Dismantling & Shipping</li>
              <li>Audio and Visual</li>
              <li>On-site supervision</li>
            </ul>
          </div>
  
          {/* Column 3 - Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 opacity-80 p-0 m-0">
              <li>Portable Stand</li>
              <li>Custom Exhibition Stands</li>
              <li>Modular Exhibition Stands</li>
              <li>Country Pavilion</li>
              <li>Double Decker Exhibition Stands</li>
            </ul>
          </div>
  
          {/* Column 4 - Contact */}
          <div>
            <div className="mb-6">
              <p className="font-semibold uppercase text-xs opacity-60">Phone</p>
              <p className="mt-1">(+91) 9310072038</p>
            </div>
  
            <div className="mb-6">
              <p className="font-semibold uppercase text-xs opacity-60">Visit Us</p>
              <p className="mt-1 leading-relaxed">
                334-Q – Kaveri Apartment, Rajender Nagar,<br />
                Sector-5, Sahibabad, Ghaziabad – 201005, UP India
              </p>
            </div>
  
            <div>
              <p className="font-semibold uppercase text-xs opacity-60">Email</p>
              <p className="mt-1 leading-relaxed">
                info@dazzleexhibition.com<br />
                expos@dazzleexhibition.com
              </p>
            </div>
          </div>
        </div>
  
        <div className="text-center text-xs opacity-60 mt-12">
          © 2025 – Dazzle Exhibitions and Events
        </div>
      </footer>
    );
  }
  