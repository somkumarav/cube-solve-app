import { Footer } from './Footer';
import { Nav } from './Nav';

interface IProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="App">
      {children}
      <div className="nav-footer-container">
        <Nav />
        <Footer />
      </div>
    </div>
  );
};
