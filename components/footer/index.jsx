/* eslint-disable @next/next/no-img-element */
function Footer() {
  return (
    <footer className="bg-white min-h-[400px] p-8">
      <div className="container">
        <img
          src="/logo-colored.png"
          alt="logo"
          className="block w-48 mx-auto mt-12"
        />
        <p className="w-full md:w-1/2 mx-auto text-gray-600 text-center my-8">
          Glym Autos is your one-stop shop for buying and selling of car. With
          over many years of experience, we’re the trusted guide in car
          shopping.
        </p>
        <div className="flex flex-col items-center">
          <p className="font-bold text-lg">Connect with us</p>
          <div className="flex items-center gap-6 mt-3">
            <a href="https://www.facebook.com/profile.php?id=100081137442260">
              <img src="/facebook-ic.svg" alt="" />
            </a>
            <a href="https://instagram.com/glymleoautos?igshid=YmMyMTA2M2Y=">
              <img src="/insta-ic.svg" alt="" />
            </a>
          </div>
        </div>

        <p className="mt-28 text-dark/50 text-center">Glymleo 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
