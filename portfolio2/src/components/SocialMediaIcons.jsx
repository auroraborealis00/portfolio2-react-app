const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/riina-meos-b47a46239/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com/riina.meos/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src="../assets/facebook.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/meosriina/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/auroraborealis00"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/github.png" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;