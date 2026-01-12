import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './shared/components/Navigation';
import { Footer } from './shared/components/Footer';
import { OptInPage } from './features/opt-in/OptInPage';
import { ThankYouPage } from './features/thank-you/ThankYouPage';
import { AuditPage } from './features/audit/AuditPage';
import { WorkshopPage } from './features/workshop/WorkshopPage';
import { WorkshopApplicationPage } from './features/workshop/WorkshopApplicationPage';
import { DoneForYouPage } from './features/done-for-you/DoneForYouPage';
import { DoneForYouApplicationPage } from './features/done-for-you/DoneForYouApplicationPage';
import { ViralPage } from './features/viral/ViralPage';
import { VaultPage } from './features/vault/VaultPage';
import { BookPage } from './features/book/BookPage';
import { BrandEbookPage } from './features/brand-ebook/BrandEbookPage';
import { BuildWorkshopPage } from './features/build-workshop/BuildWorkshopPage';
import { BuildWorkshopApplicationPage } from './features/build-workshop/BuildWorkshopApplicationPage';
import DesignPartnerPage from './features/design-partner/DesignPartnerPage';
import { DesignPartnerApplicationPage } from './features/design-partner/DesignPartnerApplicationPage';
import SimpleWebsitesPage from './features/simple-websites/SimpleWebsitesPage';
import { SimpleWebsitesApplicationPage } from './features/simple-websites/SimpleWebsitesApplicationPage';
import FunnelsPage from './features/funnels/FunnelsPage';
import { FunnelsApplicationPage } from './features/funnels/FunnelsApplicationPage';
import FunnelSupportPage from './features/funnel-support/FunnelSupportPage';
import { PrivacyPolicyPage } from './features/legal/PrivacyPolicyPage';
import { TermsAndConditionsPage } from './features/legal/TermsAndConditionsPage';
import { RefundPolicyPage } from './features/legal/RefundPolicyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<OptInPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/audit" element={<AuditPage />} />
            <Route path="/workshop" element={<WorkshopPage />} />
            <Route path="/workshop/apply" element={<WorkshopApplicationPage />} />
            <Route path="/done-for-you" element={<DoneForYouPage />} />
            <Route path="/done-for-you/apply" element={<DoneForYouApplicationPage />} />
            <Route path="/viral" element={<ViralPage />} />
            <Route path="/vault" element={<VaultPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/brand-ebook" element={<BrandEbookPage />} />
            <Route path="/build-workshop" element={<BuildWorkshopPage />} />
            <Route path="/build-workshop/apply" element={<BuildWorkshopApplicationPage />} />
            <Route path="/design-partner" element={<DesignPartnerPage />} />
            <Route path="/design-partner/apply" element={<DesignPartnerApplicationPage />} />
            <Route path="/simple-websites" element={<SimpleWebsitesPage />} />
            <Route path="/simple-websites/apply" element={<SimpleWebsitesApplicationPage />} />
            <Route path="/funnels" element={<FunnelsPage />} />
            <Route path="/funnels/apply" element={<FunnelsApplicationPage />} />
            <Route path="/funnel-support" element={<FunnelSupportPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
