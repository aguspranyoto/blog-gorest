import Link from "next/link";

const Footer = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <footer
      className={`${
        isAdmin ? `sm:ml-64` : ``
      }  bg-gray-800 text-white py-6 px-4 md:px-6`}
    >
      {!isAdmin ? (
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              laboriosam ad! Ea ipsum officia alias quam provident harum soluta
              architecto!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <p className="text-sm">
              Jalan asrama haji, Jakarta Timur
              <br />
              Phone: (021) 111-222-3333
              <br />
              Email: info@bloggorest.com
            </p>
          </div>
        </div>
      ) : null}
      <div className={`${isAdmin ? `mt-0` : ``} mt-8 text-center text-sm`}>
        © Blog GoRest. All rights reserved.{" "}
        <a
          className="underline"
          href="https://github.com/aguspranyoto/blog-gorest"
        >
          Visit Github Repository
        </a>
      </div>
    </footer>
  );
};

export default Footer;
