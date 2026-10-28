import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '../components/ui/Loading';
import ScrollToTop from '../components/ui/ScrollToTop';
import PublicLayout from '../components/layout/PublicLayout';

// Dedicated corporate multi-page routes
const Home = lazy(() => import('../pages/Home'));
const WebsitesPage = lazy(() => import('../pages/WebsitesPage'));
const SoftwarePage = lazy(() => import('../pages/SoftwarePage'));
const SectorsPage = lazy(() => import('../pages/SectorsPage'));
const DentalGridPage = lazy(() => import('../pages/DentalGridPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Main Public Corporate Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/paginas-web" element={<WebsitesPage />} />
            <Route path="/software-a-medida" element={<SoftwarePage />} />
            <Route path="/sectores" element={<SectorsPage />} />
            <Route path="/dentalgrid" element={<DentalGridPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />

            {/* Redirects & Aliases */}
            <Route path="/servicios" element={<Navigate to="/software-a-medida" replace />} />
            <Route path="/soluciones" element={<Navigate to="/paginas-web" replace />} />
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/register" element={<Navigate to="/" replace />} />
            <Route path="/signup" element={<Navigate to="/" replace />} />
            <Route path="/forgot-password" element={<Navigate to="/" replace />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />

            <Route path="/404" element={<NotFound />} />
          </Route>

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}
