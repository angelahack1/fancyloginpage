import { LandingPage } from './landing-page';
import './page.css';
import PageLoadHandler from './components/PageLoadHandler';

export default function Home() {
  return (
    <PageLoadHandler>
    <main className="main-container">
      <div className="content-wrapper">
        <LandingPage />
      </div>
    </main>
    </PageLoadHandler>
  );
}