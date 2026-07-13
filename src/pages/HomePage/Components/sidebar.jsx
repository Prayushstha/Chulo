import '../Styles/sidebar.css'

export function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-list">
          <a href="#Around-The-Globe">Around The Globe</a>
        </li>
        <li className="sidebar-list">
          <a href="#Trending">Trending</a>
        </li>
        <li className="sidebar-list">
          <a href="#Dessert">Dessert</a>
        </li>
        <li className="sidebar-list">
          <a href="#Healthy">Healthy Option</a>
        </li>
        <li className="sidebar-list">
          <a href="#Desi">Desi food</a>
        </li>
      </ul>
    </div>
  );
}
