const Footer = () => {
    return (
      <footer
        style={{ fontFamily: "DM Sans, sans-serif" }}
        className="flex flex-col md:flex-row leading-7 md:items-center text-sm justify-evenly h-80 bg-yellow-100 bg-opacity-50"
      >
        <aside className="text-center md:w-1/5 ">
          <h2
            className="uppercase text-3xl text-blue-700  cursor-pointer"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <b>Chatter</b>
          </h2>
        </aside>
        <div className="flex justify-evenly md:w-4/5">
          <aside>
            <ul>
              <li className="py-4 text-base">
                <h2>
                  <b>Explore</b>
                </h2>
              </li>
              <li>Community</li>
              <li>Trending Blogs</li>
              <li>Chatter for Teams</li>
            </ul>
          </aside>
          <aside>
            <ul>
              <li className="py-4 text-base">
                <h2>
                  <b>Support</b>
                </h2>
              </li>
              <li>Support Docs</li>
              <li>Join Slack</li>
              <li>Contact</li>
            </ul>
          </aside>
          <aside>
            <ul>
              <li className="py-4 text-base">
                <h2>
                  <b>Official Blog</b>
                </h2>
              </li>
              <li>Official blog</li>
              <li>Engineering blog</li>
            </ul>
          </aside>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  